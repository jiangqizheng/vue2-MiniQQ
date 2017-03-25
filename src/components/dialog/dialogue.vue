<template>
  <div>
    <div class="dialogue">
      <mu-list-item :disableRipple="true">
        <mu-avatar :src="userData.friend.avatar"
                   slot="leftAvatar" />
        <span slot="title">
                <span class="content" style="color: rgba(0, 0, 0, .9)">请输入，与我对话Q.o</span>
        </span>
      </mu-list-item>
    </div>
  
    <div class="dialogue"
         v-for="item of messageList">
      <mu-list-item :disableRipple="true"
                    ref="el">
        <mu-avatar :src="item._id===0?userData.self.avatar:userData.friend.avatar"
                   :slot="item._id===0?'rightAvatar':'leftAvatar'" />
        <span :slot="item._id===0?'after':'title'">
                <span class="content" style="color: rgba(0, 0, 0, .9)">{{item.message}}</span>
        </span>
      </mu-list-item>
    </div>
  
  </div>
</template>
<script>
export default {
  props: ['userData'],
  computed: {
    messageList() {
      let message = this.$store.state.messageList[this.userData.friend._id - 1]
      return message.list
    }
  },
  updated() {
    this.$emit('scrollC')
  }
}
</script>
<style lang="stylus" scoped>
.dialogue
  margin-top: 10px
  font-size: 16px
  background: #f4f4f6
  .content
    display: inline-block
    padding: 1.5vh
    background: #fff
</style>
