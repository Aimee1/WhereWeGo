<template>
  <div class="search">
     <input type="text" placeholder="请输入搜索城市" class="search-input">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl";
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    border none 
    outline none
</style>
