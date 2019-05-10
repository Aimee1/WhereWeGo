<template>
<div class="icons">
  <swiper>
    <!-- slides -->
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <li class="icon" v-for="item in iconList" :key="item.id">
        <img class="icon-img" :src="item.url" />
        <p class="icon-desc">{{item.keywords}}</p>
      </li>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data(){
    return{
       swiperOption:{
          pagination:".swiper-pagination",
          loop:true
        },
        iconList:[
          {
           id: 1,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "热门景点"
          },
         {
           id: 2,
           url: "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
           keywords: "北京一日游玩乐啊啊"
          },
          {
            id: 3,
            url: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
            keywords: "溜溜娃"
          },
         {
           id: 4,
           url: "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
           keywords: "北京必游"
         },
         {
           id: 5,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "爬长城"
         },
         {
           id: 6,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "故宫"
         },
         {
           id: 7,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "动物园"
          },
         {
           id: 8,
           url: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
           keywords: "植物园"
         },
         {
           id: 9,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "京城赏"
         },
         {
           id: 10,
           url: "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png",
           keywords: "欢乐谷"
         }
        ]
    }
  },
  computed: {
    pages() {
      const pages=[];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
          if(!pages[page]){
          pages[page] = [];
        }
        pages[page].push(item);
      })
      return pages;
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~styles/varibles.styl";
.icon>>> .swiper-container
  width 100%;
  padding-bottom 50%  
.icons
  overflow hidden 
  height 0
  padding-bottom 60%
  margin-top .1rem
  .icon
    list-style none
    overflow hidden
    float left 
    width 25%
    height 0
    padding-bottom 30%
    margin 1% 0
    .icon-img
      width 80%
      margin-left 10%
    .icon-desc
      text-align center
      line-height .44rem 
      ellipsis()
</style>