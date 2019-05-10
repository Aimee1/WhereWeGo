<template>
  <div class="header">
      城市选择
      <router-link to="/"> <div class="iconfont header-back">&#xe624;</div></router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl";
.header
  position relative
  overflow hidden
  height .86rem
  line-height .86rem
  text-align center 
  color #fff
  background $bgColor
  font-size .3rem 
  .header-back
    width  .4rem
    position absolute
    left 2%
    top 0
</style>
