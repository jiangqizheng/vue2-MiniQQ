<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">
  
    <div class="content">

      <div class="top">
        <mu-avatar :src="avatar1"
                   :size="96" @click="showPersonindex"/>
                   <span class="name">name</span>
      </div>
      <div class="bottom">
        <span>这是关于我的个人说明</span>
      </div>
  
    </div>
  
    <mu-list-item title="albums" >
      <mu-icon slot="left"
               value="inbox" color="#2e2c6b"/>
    </mu-list-item>
    <mu-list-item title="Favorites">
      <mu-icon slot="left"
               value="grade"  color="#2e2c6b"/>
    </mu-list-item>
    <mu-list-item title="Wallet">
      <mu-icon slot="left"
               value="send"  color="#2e2c6b"/>
    </mu-list-item>
    <mu-list-item title="Files">
      <mu-icon slot="left"
               value="drafts"  color="#2e2c6b"/>
    </mu-list-item>
  
    <mu-list-item title="close"
                  @click.native="showSidebar">
      <mu-icon slot="left"
               value="close"  color="#2e2c6b"/>
    </mu-list-item>
  </mu-drawer>
</template>

<script>
export default {
  data() {
    return {
      avatar1: '/static/images/avatar1.jpg',
      avatar2: '/static/images/avatar2.jpg',
      avatar3: '/static/images/avatar3.jpg',
      avatar4: '/static/images/avatar4.jpg'
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.sidebar
    }
  },
  methods: {
    showSidebar() {
      this.$store.commit('showSidebar')
    },
    showPersonindex() {
      this.$store.commit('showSidebar')
      this.$store.commit('showPersonindex')
    }
  }
}

</script>
<style lang="stylus" scoped>
.mu-drawer
  color: #2e2c6b
  .content
    position: relative
    height: 30vh
    padding-top: 1px
    margin-bottom: 40px
    .top
      padding: 20px
      .name
        position: absolute
        display: inline-block
        top: 10vh/*偏移*/
        left: 56% /*偏移*/
        font-size: 1.8em
    .bottom
      padding: 20px
      padding-left: 40px
  
</style>
