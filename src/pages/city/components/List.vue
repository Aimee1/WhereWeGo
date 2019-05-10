<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-city">
        <div class="button-warrper" v-for="item in cityName" :key="item">
          <div class="button">{{item. name}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
       <div class="button-city">
        <div class="button-warrper" v-for="item in cityName" :key="item">
          <div class="button">{{item. name}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
          <div class="button-city">
          <div class="button-warrper" v-for="i in cityName1" :key="i">
            <div class="button">{{i.name1}}</div>
          </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data(){
    return {
      cityName:[
        {"name":"北京"},
        {"name":"上海"},
        {"name":"天津"},
        {"name":"南京"},
        {"name":"杭州"}
      ],
      cityName1:[
        {"name1":"阿拉尔"},
        {"name1":"就结束"},
        {"name1":"放的假"},
        {"name1":"飞飞"},
        {"name1":"koi"}
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.border-topbottom
  &:after
    border-color #ccc
  &:before
    border-color #ccc  
.title
  line-height .4rem
  background #eeeeee
  padding-left .2rem
  color #666
.button-city
  overflow hidden
  padding .1rem .6rem .1rem .1rem
  .button-warrper
    float left 
    width 33.33%
    .button
      margin .1rem
      padding .1rem 0
      text-align center
      border 0.02rem solid #ccc
      border-radius .06rem
</style>
