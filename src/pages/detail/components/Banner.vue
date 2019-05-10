<template>
<div >
  <img v-on:click="flagShow" class="detail-header" src="//img1.qunarzz.com/sight/p0/1901/8c/8c1d317bc954ce06a3.water.jpg_600x330_437c0534.jpg">
  <ul>

  </ul>
  <common-gallary v-if="flag"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import axios from "axios"
export default {
  name: 'Detail',
  components:{
    CommonGallary
  },
  data(){
    return{
       flag:false
    }
  },
  methods:{
    flagShow (){
      this.flag = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.detail-header
  width 100%
  z-index 1
</style>