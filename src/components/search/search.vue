<template>
  <div class="search">
    <mu-appbar :zDepth="0">
  
      <mu-icon-button icon="arrow_back"
                      slot="left"
                      @click="showSearch" />
  
      <mu-text-field class="appbar-search-field"
                     slot="default"
                     hintText="...." />
      <mu-icon-button icon="search"
                      slot="right" />
    </mu-appbar>
  
    <mu-list>
      <mu-sub-header>在输入框中，输入名字或者QQ搜索好友</mu-sub-header>
  
      <mu-list-item title="Mike Li">
        <mu-avatar :src="avatar1"
                   slot="leftAvatar" />
        <mu-icon value="chat_bubble"
                 slot="right" />
      </mu-list-item>
  
    </mu-list>
  
  </div>
</template>
<script>
// 还没写
export default {
  data() {
    return {
      avatar1: '/static/images/avatar1.jpg',
      avatar2: '/static/images/avatar2.jpg',
      avatar3: '/static/images/avatar3.jpg',
      avatar4: '/static/images/avatar4.jpg'
    }
  },
  methods: {
    showSearch() {
      this.$store.commit('showSearch')
    }
  }
}
</script>
<style lang="stylus" scoped>
.search
  position: absolute
  z-index: 102
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: #f4f4f6
  .mu-appbar
    color: #000
    background: #fff
    .mu-icon-button
      color: #f00


</style>
