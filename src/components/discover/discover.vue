<template>
  <div class="friend">
  
    <div class="gap"></div>
  
    <div class="tab">
      <!--观赏性-->
      <mu-tabs>
        <mu-tab value="tab1"
                icon="star"
                title="Morment"
                iconClass="ii-1"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab2"
                icon="location_on"
                title="Nearby"
                iconClass="ii-2"
                titleClass="t-1"
                disabled/>
        <mu-tab value="tab3"
                icon="terrain"
                title="Interest"
                iconClass="ii-3"
                titleClass="t-1"
                disabled/>
      </mu-tabs>
    </div>
  
    <div class="gap-1"></div>
    <mu-list>
      <div class="item">
      <mu-list-item title="Live">
        <mu-icon slot="left"
                 value="videocam"
                 color="#64dd17" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="Video">
        <mu-icon slot="left"
                 value="video_library"
                 color="#d84315" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="Music">
        <mu-icon slot="left"
                 value="headset"
                 color="#1976d2" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>
  
    <mu-list>
      <div class="item">
      <mu-list-item title="Book">
        <mu-icon slot="left"
                 value="book"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="News">
        <mu-icon slot="left"
                 value="whatshot"
                 color="#ef6c00" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      <mu-divider inset/>
      <mu-list-item title="Game">
        <mu-icon slot="left"
                 value="videogame_asset"
                 color="#00e5ff" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>
    <mu-list>
      <div class="item">
      <mu-list-item title="Mucket">
        <mu-icon slot="left"
                 value="shopping_cart"
                 color="#1e88e5" />
        <mu-icon value="keyboard_arrow_right"
                 slot="right" />
      </mu-list-item>
      </div>
    </mu-list>
  
  </div>
</template>
<script>
export default({
  name: 'discover'
})
</script>
<style lang="stylus"  scoped>
@import '../../common/stylus/mixin.styl'
.friend
  .item
    background: color-w
  .gap
    position:relative
    height: 2vh
  .gap-1
    height: 1vh
  .tab
    height: 12vh
    overflow:hidden
    background: colot-w
    .mu-tabs
      background:color-w
      color:color-b
</style>
