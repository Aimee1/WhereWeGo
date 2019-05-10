<template>
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
</template>

<script>
export default {
  name: 'HomeSwiper',
  data(){
    return{
       swiperOption:{
          pagination:".swiper-pagination",
          loop:true
        },
        imgList:[
          {id:1,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e0c5d91cb9b435518bb223b81b70874e.jpg_750x200_f2d5c66a.jpg"},
          {id:2,url:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg"}
           ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.swiper>>>.swiper-pagination-bullet-active
  background-color: white!important;
.swiper
  width 100%
  height 0
  overflow hidden
  padding-bottom 26.7%
  .swiper-img
    width 100%    
</style>