<template>
  <mu-appbar class="top-nav"
             :zDepth="0">
  
    <mu-avatar slot="left"
               :src="avatar"
               :size="30" />
  
    <div slot="default" class="title">
      Message
    </div>
  
    <mu-icon-button icon="search"
                    slot="right" />
  </mu-appbar>
</template>

<script>
export default {
  data() {
    return {
      avatar: '/static/images/avatar.jpg'
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
    color:#2e2c6b
    .mu-avatar
      margin-left:12px
    .title
      padding-left: 10px
      text-align: center
      font-weight: 700
    
</style>

