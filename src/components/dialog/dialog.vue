<template>
  <div class="dialog">
    <mu-appbar title="name"
               :zDepth="0">
      <mu-icon-button icon="arrow_back"
                      slot="left" @click="closeDialog"/>
      <div class="right-top"
           slot="right">
        <mu-icon-button icon="videocam" />
        <mu-icon-button icon="call" />
        <mu-icon-button icon="person" />
      </div>
    </mu-appbar>
  
    <!--经典sticky footers布局-->
    <div class="sticky-wrap">
      <div class="sticky-main clear">

        <!--对话内容-->
       <my-dialogue></my-dialogue>

      </div>
    </div>
    <div class="sticky-footer">
      <div class="top">
        <mu-text-field hintText="输入文字" />
        <mu-icon-button icon="send" />
      </div>
      <div class="bottom">
        <mu-icon-button icon="mic_none" />
        <mu-icon-button icon="photo_size_select_actual" />
        <mu-icon-button icon="tag_faces" />
        <mu-icon-button icon="switch_video" />
        <mu-icon-button icon="cloud_queue" />
        <mu-icon-button icon="photo_camera" />
        <mu-icon-button icon="folder_open" />
      </div>
    </div>
  
  </div>
</template>
<script>
import myDialogue from './dialogue'

export default {
  components: {
    myDialogue
  },
  methods: {
    closeDialog() {
      this.$store.commit('closeDialog')
    }
  }
}
</script>
<style lang="stylus" scoped>
.dialog
  z-index: 999
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: #f4f4f6
  .mu-appbar
    background: #fff
    color: #2e2c6b
  .sticky-wrap
    height: auto
    min-height: 100%
    background: #f4f4f6
    .sticky-main
      padding-bottom: 146px
      width: 100%
  .sticky-footer
    position: relative
    margin-top: -146px
    height: 146px
    clear: both
    text-align: center
    background: #fff
    .top
      padding-left: 15px
      .mu-icon-button
        display: inline-block
        margin-left: 20px
        vertical-align: top
    .bottom
      margin-top: -14px
      color:rgba(0,0,0,.3)
      
</style>
