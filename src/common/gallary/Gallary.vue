<template>
    <div class="container">
     <div class="swiper">
    <swiper :options="swiperOption" >
    <!-- slides -->
    <swiper-slide v-for="item in imgList" :key='item.id'>
      <img :src="item.url" class="swiper-img">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
    </div>
</template>

<script>
export default {
  name:"CommonGallary",
   data(){
    return{
       swiperOption:{
          pagination:".swiper-pagination",
          loop:true,
          paginationType:'fraction'
        },
        imgList:[
          {id:1,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e0c5d91cb9b435518bb223b81b70874e.jpg_750x200_f2d5c66a.jpg"},
          {id:2,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg"}
           ]
    }
  }
}
</script>

<style lang="stylus" scope> 
.swiper>>>.swiper-pagination-bullet-active
  background-color: white!important;
.swiper>>>.swiper-pagination-bullets
  bottom -20%
  color #fff
.container
  height 100%
  width 100%
  position fixed
  left 0
  right 0
  bottom 0
  background #000
  z-index 10
  .swiper
    position absolute
    left 0
    top 36%
    width 100%
    height 0
    padding-bottom 26.7%
    .swiper-img
      width 100% 
</style>


