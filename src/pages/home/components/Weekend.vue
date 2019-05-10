<template>
  <div>
      <div class="recommand-title">周末去哪了</div>
      <ul class="items">
          <li class="item border-bottom" v-for="item in infoList" :key="item.id">
              <img class="item-img" :src="item.url" /> 
              <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-des">{{item.des}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
      return{
          infoList:[
              {
                  id:1,
                  url:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
                  des:"中西合璧，现代风格各种精彩",
                  title:'上海必打卡'
               },
                {
                  id:2,
                  url:'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
                  des:"走进大自然或玩乐园，感知大千世界，游戏项目",
                  title:'周末亲子爱玩'
               },
                {
                  id:3,
                  url:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
                  des:"的还是打击奥术大师大师赛上",
                  title:'上海城市观光'
               }
          ]
      }
  }
}
</script>

<style lang="stylus" scoped>
.recommand-title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-indent .2rem
 .items
   width 100% 
  .item
    overflow hidden
    .item-img
      width 100%
    .item-info
      line-height .44rem  
      padding .1rem
      .item-title
        line-height .4rem
        font-size .26rem
        color #000
      .item-des
        line-height .6rem
        color #ccc 
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        margin-bottom .1rem
</style>
