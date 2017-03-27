<template>
  <div>
    <div class="dialogue"
         v-for="item of messageList">
      <mu-list-item :disableRipple="true"
                    >
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
@import '../../common/stylus/mixin.styl'
.dialogue
  margin-top: 10px
  font-size: 16px
  background: color-g
  .content
    display: inline-block
    padding: 1.5vh
    background: #fff
</style>
