<template>
  <div class="top-wrap">
    <mu-appbar class="top-nav"
               :zDepth="0">
  
      <!--等待添加弹出层按钮-->
      <mu-avatar slot="left"
                 :src="avatar"
                 :size="30"
                 @click="showSidebar_x(true)" />
  
      <div slot="default"
           class="title">
        <div class="title-item">{{headerTitle}}</div>
      </div>
  
      <!--<mu-icon-button icon="search"
                              slot="right" />-->
      <mu-icon slot="right"
               value="search"
               color="#2e2c6b"
               @click="showSearch" />
    </mu-appbar>
  
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: mapState({
    avatar: state => state.data.self.avatar,
    headerTitle: 'headerTitle'
  }),
  methods: {
    ...mapMutations(['showSidebar', 'showSearch']),
    showSidebar_x(flag) {
      this.showSidebar({ flag })
    }
  }
}
</script>

<style lang="stylus" scoped>

.mu-appbar
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background:#fff
    .mu-avatar
      margin-left:12px
    .title
      padding-right: 12px
      .title-item
        margin: 0 auto
        width: 48%
        height: 34px
        line-height: 30px
        text-align: center
        border: 1px solid #2e2c6b
        border-radius: 4px
        font-weight: 500
        background:#2e2c6b
        color:#fff
    
</style>

