<template>
  <div id="app">

  <div class="container-top">
    <top-nav></top-nav>
  </div>
  <div class="container-content">
    <div class="patch"></div>
  <router-view></router-view>
  </div>
  <div class="container-bottom">
     <bottom-tab class="tab"></bottom-tab>
  </div>

  </div>
</template>

<script>
import bottomTab from './components/bottomtab/bottom-tab'
import topNav from './components/topnav/top-nav'

export default {
  name: 'app',
  components: {
    bottomTab,
    topNav
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl'

#app
  position:relative
  min-height: 100vh
  width: 100%
  .container-top
    position: fixed
    z-index:999
    top: 0
    left: 0
    width: 100%
    height: 10%
  .container-bottom
    position: fixed
    z-index:999
    bottom: 0
    left: 0
    width: 100%
    height: 10%
  .container-content
    width:100%
    .patch
      position: relative
      top: 0
      left: 0
      width: 100%
      height: 10vh
  
</style>
