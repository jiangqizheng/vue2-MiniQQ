<template>
  <div >
  <div class="dialogue">
    <mu-list-item :disableRipple="true">
      <mu-avatar :src="avatar1"
                 slot="leftAvatar" />
      <span slot="title">
          <span class="content" style="color: rgba(0, 0, 0, .9)">今天天气怎么样</span>
      </span>
    </mu-list-item>
    </div>

   <div class="dialogue">
    <mu-list-item :disableRipple="true">
      <mu-avatar :src="avatar2"
                 slot="rightAvatar" />
      <span slot="after">
          <span class="content-right" style="color: rgba(0, 0, 0, .9)">不怎么样，下雨</span>
      </span>
    </mu-list-item>
    </div>
  
<div class="dialogue">
    <mu-list-item :disableRipple="true">
      <mu-avatar :src="avatar1"
                 slot="leftAvatar" />
      <span slot="title">
          <span class="content" style="color: rgba(0, 0, 0, .9)">哦</span>
      </span>
    </mu-list-item>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar1: '/static/images/avatar1.jpg',
      avatar2: '/static/images/avatar2.jpg',
      avatar3: '/static/images/avatar3.jpg'
    }
  }
}
</script>
<style lang="stylus" scoped>
.dialogue
  margin-top: 10px
  font-size: 16px
  .content
    display: inline-block
    padding: 12px
    background: #fff
    
  .content-right
    display: inline-block
    margin-right: 6px
    padding: 12px
    background: #fff
</style>
