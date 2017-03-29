<template>
  <div class="search">
    <mu-appbar :zDepth="0">
  
      <mu-icon-button icon="arrow_back"
                      slot="left"
                      @click="showSearch" />
  
      <mu-text-field class="appbar-search-field"
                     slot="default"
                     hintText="...."
                     v-model="value"
                     @input="input" />
      <mu-icon-button icon="search"
                      slot="right" />
    </mu-appbar>
  
    <mu-list>
      <mu-sub-header>在输入框中，输入名字或者Phone搜索好友</mu-sub-header>
      <div v-for="item of friend">
        <mu-list-item :title="item.name"
                      @click="showPersonindex_x(item._id)">
          <mu-avatar :src="item.avatar"
                     slot="leftAvatar" />
          <mu-icon value="chat_bubble"
                   slot="right" />
        </mu-list-item>
      </div>
    </mu-list>
  
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'search',
  data() {
    return {
      value: '',
      friend: []
    }
  },
  computed: {
    ...mapState({
      friends: state => state.data.friends
    })
  },
  methods: {
    ...mapMutations(['showSearch', 'showPersonindex', 'getActiveId']),
    // 点击展示个人主页
    showPersonindex_x(id) {
      this.showSearch()
      this.getActiveId({ activeId: id })
      this.showPersonindex()
    },
    input(val) {
      // 判断输入的值是否是数字
      if (val === '') {
        this.friend = []
      } else if (isNaN(val)) {
        // 不是数字
        this.friend = this.friends.filter(x => {
          if (x.name.indexOf(val) !== -1) {
            return true
          } else {
            return false
          }
        })
      } else {
        // 是数字
        this.friend = this.friends.filter(x => {
          if (x.phone.indexOf(val) !== -1) {
            return true
          } else {
            return false
          }
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.search
  position: absolute
  z-index: 102
  top: 0
  left: 0
  width: 100%
  height: 100vh
  background: color-g
  .mu-appbar
    height: 10vh
    color: #000
    background: color-w


</style>
