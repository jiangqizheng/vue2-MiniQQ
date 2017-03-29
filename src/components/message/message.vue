<template>
  <!--判定ajax结束后，且有消息列表存在才开始渲染组件，防止报错-->
  <mu-list v-if="isAjax&&nowMessageList">
    <!--设置列表删除时动态效果-->
    <div v-for="(item, index) of nowMessageList"
         :class="[{swipeleft: isSwipe[index]},'wrap']"
         @click="getActiveId_x(item._id)"
         ref="child"
         :key="index">
  
      <mu-list-item :title="item.friend.name"
                    :describeLine="1"
                    :disableRipple="true"
                    class="list-item">
        <!--头像-->
        <mu-avatar :src="item.friend.avatar"
                   slot="leftAvatar" />
        <!--预览信息-->
        <span slot="describe">
                        <span style="color: rgba(0, 0, 0, .5)">{{item.list[item.list.length-1].message}}</span>
        </span>
        <!--时间与待处理-->
        <div class="item-right"
             slot="right">
          <!--获取到当前聊天队列，最后一条内容的time-->
          <span class="time">{{item.list[item.list.length-1].time}}</span>
          <!--数据条数-->
          <!--数据需求是为字符串-->
          <mu-badge :content="`${item.list.length-1}`" />
        </div>
      </mu-list-item>
      <!--分割线-->
      <!--阻止时间冒泡-->
      <div class="delete"
           @click.stop="removeM(item._id)">删除</div>
    </div>
  
  </mu-list>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
// 后续会将滑动封装至子组件
// import swipeDelete from './swipeDelete'
export default {
  name: 'message',
  data() {
    return {
      isSwipe: [false, false, false]
    }
  },
  computed: {
    ...mapGetters(['nowMessageList']),
    // ajax是否已经结束
    ...mapState(['isAjax'])
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveId', 'zeroRemove', 'removeMessage']),
    // 获取点击的friend的_id
    getActiveId_x(id) {
      this.getActiveId({ activeId: id })
      this.showDialog()
    },
    // 删除信息
    removeM(_id) {
      this.removeMessage({ _id })
    }
  },
  created() {
    setTimeout(() => {
      // 判断是否存在信息列表
      if (this.$refs.child) {
        this.$refs.child.forEach((element, index) => {
          let x, y, X, Y, swipeX, swipeY
          // 监听touchstart
          element.addEventListener('touchstart', e => {
            x = e.changedTouches[0].pageX
            y = e.changedTouches[0].pageY
            swipeX = true
            swipeY = true
            this.isSwipe = [false, false, false]
          })
          element.addEventListener('touchmove', e => {
            X = event.changedTouches[0].pageX
            Y = event.changedTouches[0].pageY
            if (swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0) {
              // 阻止默认事件
              e.stopPropagation()
              // 右滑
              if (X - x > 10) {
                e.preventDefault()
                this.isSwipe.splice(index, 1, false)
              }
              if (x - X > 10) {
                e.preventDefault()
                this.isSwipe.splice(index, 1, true)
              }
              swipeY = false
            }
            if (swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
              swipeX = false
            }
          })
        })
      }
    }, 1000)
  }
}
</script>
<style lang="stylus">
@import '../../common/stylus/mixin.styl'
.mu-list
  overflow: hidden
  background: color-g
  // 左滑删除
  .swipeleft
    transform:translateX(-20%)
  .wrap
    width: 125%
    overflow: hidden
    transition:all 0.3s linear
    border-b-1px(rgba(0,0,0,.1))
    .list-item
      float: left
      width:80%
      height: 10vh
      background: color-w
      transition:all 0.3s linear
    .delete
      float: right
      display: block
      height: 10vh
      line-height: 10vh
      width: 20%
      text-align: center
      font-size: 1.2em
      font-weight: 500
      color: color-w
      background: #ff1744
  .item-right
    position:relative
    .time
      display: inline-block
      position: absolute
      top: -10px
      left: -16px
    .mu-badge
      display: inline-block
      position: absolute
      top: 0
      left: -10px
      border-radius: 5px
</style>
