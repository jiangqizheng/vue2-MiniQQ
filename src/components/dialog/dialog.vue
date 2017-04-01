<template>
  <div class="dialog">
    <mu-appbar :title="userData.self.name"
               :zDepth="0">
      <mu-icon-button icon="arrow_back"
                      slot="left"
                      @click="showDialog_x" />
      <div class="right-top" slot="right">
        <mu-icon-button icon="videocam" />
        <mu-icon-button icon="call" />
        <mu-icon-button icon="person" @click="showPersonindex_x" />
      </div>
    </mu-appbar>
  
    <!--对话内容-->
    <div>
      <div class="patch-1"></div>
      <my-dialogue :userData="userData"
                   class="dialogue"
                   @scrollC="scrollC"></my-dialogue>
      <div class="patch-2"></div>
      <!--锚点-->
      <a name="1"
         href="#1"
         ref="end"
         style="height:0;color:rgba(0,0,0,0)">.</a>
    </div>
  
    <div class="footer"
         ref="footer">
      <div class="top">
        <mu-text-field hintText="输入文字"
                       v-model="value"
                       @focus="focus"
                       @blur="blur"
                       @keyup.enter.native="sendValue"
                        />
  
        <mu-icon-button icon="send"
                        @click="sendValue"   />
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
import { mapState, mapMutations } from 'vuex'
import myDialogue from './dialogue'

export default {
  name: 'dialog',
  components: {
    myDialogue
  },
  data() {
    return {
      value: '',
      timer: {}
    }
  },
  computed: {
    ...mapState({
      self: state => state.data.self,
      headerTitle: 'headerTitle'
    }),
    userData() {
      return {
        self: this.self,
        friend: this.$store.getters.friend
      }
    }
  },
  methods: {
    ...mapMutations(['showDialog', 'getActiveId', 'showPersonindex']),
    showDialog_x() {
      this.showDialog()
      this.getActiveId({ activeId: 0 })
      this.$router.push(this.headerTitle)
    },
    showPersonindex_x() {
      this.showDialog()
      this.showPersonindex()
      this.$router.push(this.headerTitle)
    },
    sendValue() {
      if (this.value.length) {
        this.$store.dispatch('sendValue', {
          _id: this.userData.friend._id,
          message: this.value,
          that: this
        })
      } else {
        console.log('不能为空')
      }
      this.value = ''
    },
    // 监听子组件事件
    scrollC() {
      // 取巧的方法，每次组件更新后模拟点击，破坏性的修改哈希值，但是简便（此处可以修改为正常控制滚动条）
      this.$refs.end.click()
    },
    // 输入框获得焦点时触发
    focus() {
      this.timer.T = setInterval(() => {
        // 完美解决输入框被软键盘遮挡
        this.$refs.footer.scrollIntoView(false)
      }, 200)
    },
    blur() {
      // 输入框失去焦点时清除定时器
      clearInterval(this.timer.T)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'

.dialog
  z-index: 999
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  background: color-g
  .patch-1
    height: 60px
  .patch-2
    height: 90px
    background: color-g
  .mu-appbar
    position: fixed
    top: 0
    left: 0
    width: 100%
    background: color-w
    color: color-b
  .dialogue
    width: 100%
  .footer
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 90px
    text-align: center
    background: color-w
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
