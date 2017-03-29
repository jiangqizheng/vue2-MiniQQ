<template>
  <mu-drawer :open="sidebar.open"
             :docked="sidebar.docked"
             @close="showSidebar()">
  
    <div class="content">
  
      <div class="top">
        <mu-avatar :src="self.avatar"
                   :size="96"
                   @click="showPersonindex_x" />
        <span class="name">{{self.name}}</span>
      </div>
      <div class="bottom">
        <span>{{self.explain}}</span>
      </div>
  
    </div>
  
    <mu-list-item title="albums">
      <mu-icon slot="left"
               value="inbox"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="Favorites">
      <mu-icon slot="left"
               value="grade"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="Wallet">
      <mu-icon slot="left"
               value="send"
               color="#2e2c6b" />
    </mu-list-item>
    <mu-list-item title="Files">
      <mu-icon slot="left"
               value="drafts"
               color="#2e2c6b" />
    </mu-list-item>
  
    <mu-list-item title="close"
                  @click.native="showSidebar">
      <mu-icon slot="left"
               value="close"
               color="#2e2c6b" />
    </mu-list-item>
  </mu-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'sidebar',
  computed: mapState({
    sidebar: 'sidebar',
    self: state => state.data.self
  }),
  methods: {
    ...mapMutations(['showSidebar', 'showPersonindex']),
    showPersonindex_x() {
      this.showSidebar()
      this.showPersonindex()
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.mu-drawer
  color: color-b
  .content
    position: relative
    height: 30vh
    padding-top: 1px
    margin-bottom: 50px
    .top
      padding: 20px
      .name
        position: absolute
        display: inline-block
        top: 5vh/*偏移*/
        left: 56% /*偏移*/
        font-size: 1.8em
    .bottom
      padding: 20px
      padding-left: 40px
  
</style>
