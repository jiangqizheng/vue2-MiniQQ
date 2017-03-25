<template>
  <div class="dialog">
    <mu-appbar :title="userData.self.name"
               :zDepth="0">
      <mu-icon-button icon="arrow_back"
                      slot="left"
                      @click="showDialog" />
      <div class="right-top"
           slot="right">
        <mu-icon-button icon="videocam" />
        <mu-icon-button icon="call" />
        <mu-icon-button icon="person"
                        @click="showPersonindex" />
      </div>
    </mu-appbar>
  
    <!--对话内容-->
    <div>
      <div class="patch-1"></div>
      <my-dialogue :userData="userData"
                   class="dialogue"
                   ref="child"
                   @scrollC="scrollC"></my-dialogue>
      <div class="patch-2"></div>
    </div>
    <!--<input type="text" v-model="value">-->
  
    <div class="footer">
      <div class="top">
  
        <mu-text-field hintText="输入文字"
                       v-model="value" />
  
        <mu-icon-button icon="send"
                        @click="sendValue" />
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
  data() {
    return {
      value: ''
    }
  },
  computed: {
    userData() {
      return {
        self: this.$store.state.data.self,
        friend: this.$store.getters.friend
      }
    }
  },
  methods: {
    showDialog() {
      this.$store.commit('showDialog')
      this.$store.commit('getActiveId', { activeId: 0 })
    },
    showPersonindex() {
      this.$store.commit('showDialog')
      this.$store.commit('showPersonindex')
    },
    sendValue() {
      this.$store.dispatch('sendValue', {
        _id: this.userData.friend._id,
        message: this.value,
        that: this
      })
      this.value = ''
    },
    scrollC() {
      console.log('子组件更新')
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
  .patch-1
    height: 60px
  .patch-2
    height: 90px
  .mu-appbar
    position: fixed
    top: 0
    left: 0
    width: 100%
    background: #fff
    color: #2e2c6b
  .dialogue
    width: 100%
  .footer
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 90px
    text-align: center
    background: #fff
    .top
      display: flex
      justify-content: center
      padding: 0 10px
      .mu-icon-button
        display: inline-block
        margin-left: 18px
        vertical-align: top
    .bottom
      margin-top: -14px
      color:rgba(0,0,0,.3)    
</style>
