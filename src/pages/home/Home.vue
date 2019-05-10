<template>
  <div>
       <home-header :city='city'></home-header>
       <home-swiper></home-swiper>
       <home-icons></home-icons>
       <home-recommand></home-recommand>
       <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommand from './components/Recommand'
import HomeWeekend from './components/Weekend'
import Axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommand,
    HomeWeekend
  },
  data() {
      return{
          city:''
      }
  },
  methods:{
      getHomeInfo(){
          Axios.get('/static/mock/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
          console.log(res.data)
          res= res.data
          if(res.ret && res.data){
              const data = res.data
              this.city = data.city  
          }
      }
  },
  mounted (){
      this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
