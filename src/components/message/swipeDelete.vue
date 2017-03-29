<template>
  <div @click="clickitem" >
      <slot ref="child"></slot>
  </div>
</template>
<script>
export default {
  name: 'swipeDelete',
  methods: {
    clickitem() {
      this.$emit('clickitem')
      console.log(this.$refs.child)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
