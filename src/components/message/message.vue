<template>
  <mu-list>
    <!--设置列表删除时动态效果-->
    <!--<transition-group name="transition-list">-->
      <div v-for="(item, index) of friends"
           :class="[{swipeleft: isSwipe[index]},'wrap']"
           @click="getActiveId_x(item._id,index)"
           ref="child"
           :key="index">
  
        <mu-list-item :title="item.name"
                      :describeLine="1"
                      :disableRipple="true"
                      class="list-item">
          <!--头像-->
          <mu-avatar :src="item.avatar"
                     slot="leftAvatar" />
          <!--预览信息-->
          <span slot="describe">
              <span style="color: rgba(0, 0, 0, .5)">{{messageList[index].list[messageList[index].list.length-1].message}}</span>
          </span>
          <!--时间与待处理-->
          <div class="item-right"
               slot="right">
            <!--获取到当前聊天队列，最后一条内容的time-->
            <span class="time">{{messageList[index].list[messageList[index].list.length-1].time}}</span>
            <!--数据条数-->
            <!--数据需求是为字符串-->
            <mu-badge :content="`${messageList[index].list.length-1}`" />
          </div>
        </mu-list-item>
        <!--分割线-->
        <div class="delete"
             @click.stop="deleteM(index)">删除</div>
      </div>
    <!--</transition-group>-->
  
  </mu-list>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
// 后续会将滑动封装至子组件
// import swipeDelete from './swipeDelete'
export default {
  data() {
    return {
      isSwipe: [false, false, false]
    }
  },
  computed: {
    ...mapState({
      friends: state => state.data.friends,
      messageList: 'messageList'
    })
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveId', 'zeroRemove']),
    // 获取点击的friend的_id
    getActiveId_x(id) {
      this.getActiveId({ activeId: id })
      this.showDialog()
    },
    // 零时方法，后续修改
    deleteM(index) {
      this.zeroRemove({ index })
    }
  },
  created() {
    setTimeout(() => {
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
    transform:translateX(-15%)
  .wrap
    width: 120%
    overflow: hidden
    transition:all 0.3s linear
    border-b-1px(rgba(0,0,0,.1))
    .list-item
      float: left
      width:85%
      height: 10vh
      background: color-w
      transition:all 0.3s linear
    .delete
      float: right
      display: block
      height: 10vh
      line-height: 10vh
      width: 15%
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
