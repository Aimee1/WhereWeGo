<template>
  <div>
      <div class="recommand-title">热销推荐</div>
      <ul class="items">
          <router-link 
            tag="li"
            class="item border-bottom" 
            v-for="item in infoList" 
            :key="item.id"
            :to="'/detail/'+item.id">
              <img class="item-img" :src="item.url">
              <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-des">{{item.des}}</p>
                    <button class="item-button">查看详情</button>
              </div>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data(){
      return{
          infoList:[
              {
                  id:1,
                  url:'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
                  des:"的还是打击奥术大师大师赛上",
                  title:'上海迪士尼乐园'
               },
                {
                  id:2,
                  url:'http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_200x200_740bd4c0.jpg',
                  des:"的还是打击奥术大师大师赛上",
                  title:'上海野生动物园'
               },
                {
                  id:3,
                  url:'http://img1.qunarzz.com/sight/p0/1904/6e/6edffb73a665bc70a3.img.jpg_200x200_0e892907.jpg',
                  des:"的还是打击奥术大师大师赛上",
                  title:'上海海昌海洋公园'
               },
                {
                  id:4,
                  url:'http://img1.qunarzz.com/sight/p0/1502/ba/ba5f873a22327e0f.water.jpg_200x200_9bf5cc14.jpg',
                  des:"的还是打击奥术大师大师赛都是苦阿萨瓦一爱上我都不是我的第三反倒是肌肤上",
                  title:'上海影视乐园'
               },
                {
                  id:5,
                  url:'http://img1.qunarzz.com/sight/p0/1804/a7/a78d5d7a31a55d9ba3.img.jpg_200x200_4ebba6b4.jpg',
                  des:"上海郊野公园奇迹花园",
                  title:'上海郊野公园奇迹花园'
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
    display flex
    height 1.9rem
    padding-bottom .1rem
    .item-img
      width 2rem
      height 1.7rem
      padding .1rem
    .item-info
      line-height .44rem  
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        color #000
      .item-des
        line-height .6rem
        color #ccc 
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
       .item-button
         background #ff9300
         border-radius .06rem
         padding .05rem .2rem  
         line-height .44rem
         border none
</style>
