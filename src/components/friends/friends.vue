<template>
  <div class="friend">
  
    <div class="title-1">
      <mu-icon value="assignment_ind" />
      <span class="text">Sync phone contacts!</span>
      <mu-icon-button icon="chevron_right" />
    </div>
  
    <div class="tab">
      <!--观赏性-->
      <mu-tabs>
        <mu-tab value="tab1"
                icon="person_add"
                title="New Friend"
                iconClass="i-1"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab2"
                icon="people"
                title="Groups"
                iconClass="i-2"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab3"
                icon="person"
                title="Official Accour"
                iconClass="i-3"
                titleClass="t-1"
                disabled/>
      </mu-tabs>
  
    </div>
    <div class="title-2">
      <span style="color: rgba(0, 0, 0, .8)">My Device</span>
    </div>
    <div class="mac">
      <mu-list-item title="Mac"
                    :describeLine="1"
                    :disableRipple="true">
        <mu-avatar icon="folder"
                   slot="leftAvatar"
                   color="#2e2c6b"
                   backgroundColor="#eee"
                   :size="40"
                   :iconSize="20" />
        <span slot="describe">
                    <span style="color: rgba(0, 0, 0, .5)">You are my destiny</span>
        </span>
        <div class="item-right"
             slot="right">
          <span class="time">20:34</span>
        </div>
      </mu-list-item>
    </div>
    <div class="title-3">
      <span style="color: rgba(0, 0, 0, .8)">My Friends</span>
    </div>
  
    <mu-list>
      <!--动态渲染-->
      <div v-for="item of friends" class="item">
        <mu-list-item :title="item.name"
                      @click="showPersonindex(item._id)"
                      :disableRipple="true">
          <mu-avatar :src="item.avatar"
                     slot="leftAvatar" />
          <mu-icon value="chat_bubble"
                   slot="right" />
        </mu-list-item>
        <mu-divider inset/>
      </div>
  
    </mu-list>
  
  </div>
</template>
<script>
export default {
  name: 'friend',
  computed: {
    // 获取全部好友
    friends() {
      return this.$store.state.data.friends
    }
  },
  methods: {
    // 点击展示个人主页
    showPersonindex(e) {
      this.$store.commit('getActiveId', { activeId: e })
      this.$store.commit('showPersonindex')
    }
  }
}

</script>
<style lang="stylus"  scoped>
@import '../../common/stylus/mixin.styl'
.friend
  .item
    background color-w
  .title-1
    position:relative
    height: 8vh
    line-height: 8vh
    text-align:center
    .mu-icon
      position: absolute;
      top:50%;
      left: 10%;
      transform:translate(-50%, -50%);
      color: color-b
    .mu-icon-button
      position: absolute;
      top:50%;
      left: 94%;
      transform:translate(-50%, -50%);
      color: color-b
    .text
      display: inline-block
      vertical-align: top
      font-size: 1.2em
  .tab
    height: 12vh
    overflow:hidden
    background: color-w
    .mu-tabs
      background:color-w
      color:color-b
  .title-2
    padding-left:4vw
    height: 6vh
    line-height: 6vh
  .mac
    position:relative
    height: 10vh
    background: color-w
  .title-3
    padding-left:4vw
    height: 4vh
    line-height: 5vh
    
</style>
