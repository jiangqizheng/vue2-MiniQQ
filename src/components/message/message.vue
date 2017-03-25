<template>
  <mu-list @itemClick="showDialog">
  
    <div v-for="item of friends">
      <!--标题-->
      <mu-list-item :title="item.name"
                    :describeLine="1"
                    :disableRipple="true"
                    @click="getActiveId_x(item._id)">
        <!--头像-->
        <mu-avatar :src="item.avatar"
                   slot="leftAvatar" />
        <!--预览信息-->
        <span slot="describe">
                <span style="color: rgba(0, 0, 0, .5)">{{item.explain}}</span>
        </span>
        <!--时间与待处理-->
        <div class="item-right"
             slot="right">
          <span class="time">16:02</span>
          <mu-badge content="8" />
        </div>
      </mu-list-item>
      <!--分割线-->
      <mu-divider inset/>
    </div>
  
  </mu-list>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    friends() {
      return this.$store.state.data.friends
    }
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveId']),
    // 获取点击的friend的_id
    getActiveId_x(id) {
      this.getActiveId({ activeId: id })
    }
  }
}
</script>
<style lang="stylus">
.mu-list
  background: #f4f4f6
  .mu-item-wrapper
    background: #fff
  .mu-item-content
    padding-right:10px
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
