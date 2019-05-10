<template>
<div class="header">
   <div class="header-left" >
     <div class="iconfont back-icon">&#xe624;</div>
   </div>
   <div class="header-input"> <span class="iconfont search-icon">&#xe611;</span>输入城市景点主题</div>
   <router-link to="/city">
     <div class="header-right">城市 <span class="iconfont arrow-icon">&#xe652;</span></div></router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
      city:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~styles/varibles.styl";
  .header
    height .86rem
    display flex
    background  $bgColor 
    color #fff
    line-height .86rem
    width 96%
    padding 0 2%
    .header-left
      width .64rem
      float left
      line-height .86rem
      .back-icon
        text-align color 
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      background #fff
      border-radius .1rem 
      margin-top .11rem 
      text-indent .1rem
      color #dddddd
      font-size .25rem  
    .header-right
      width 1.24rem
      float right 
      text-align center
      font-size .3rem
      color black
      .arrow-icon
        font-size .24rem
</style>