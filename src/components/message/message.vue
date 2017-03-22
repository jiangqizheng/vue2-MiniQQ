<template>
  <mu-list @itemClick="fn">

    <!--标题-->
    <mu-list-item title="Myron Liu Mr" :describeLine="1" :disableRipple="true" >
      <!--头像-->
      <mu-avatar :src="avatar1"
                 slot="leftAvatar" />
      <!--预览信息-->
      <span slot="describe">
          <span style="color: rgba(0, 0, 0, .5)">Will you take a seat at the head of the table? It's an in</span>  
      </span>
      <!--时间与待处理-->
      <div class="item-right"
           slot="right">
        <span class="time">16:02</span>
          <mu-badge content="8" />
      </div>
    </mu-list-item>
    <!--分割线-->
    <mu-divider inset/>
     <!--标题-->
    <mu-list-item title="Myron Liu" :describeLine="1" :disableRipple="true" >
      <!--头像-->
      <mu-avatar :src="avatar2"
                 slot="leftAvatar" />
      <!--预览信息-->
      <span slot="describe">
          <span style="color: rgba(0, 0, 0, .5)"> -</span>Mr. liu, would you care for another helping?
      </span>
      <!--时间与待处理-->
      <div class="item-right"
           slot="right">
        <span class="time">20:34</span>
          <mu-badge content="16" />
      </div>
    </mu-list-item>
    <mu-divider inset/>


  </mu-list>
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
  methods: {
    fn(e) {
      console.log(e.title)
      this.$store.commit('openDialog')
    }
  }
}
</script>
<style lang="stylus">
.mu-list
  background: #f4f4f6
  .mu-item-wrapper
    background: #fff
  .mu-item-content
    padding-right:10px
  .item-right
    position:relative
    .time
      display: inline-block
      position: absolute
      top: -10px
      left: -16px
    .mu-badge
      display: inline-block
      position: absolute
      top: 0
      left: -10px
      border-radius: 5px
</style>
