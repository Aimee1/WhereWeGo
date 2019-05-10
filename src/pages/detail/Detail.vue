<template>
<div>
    <detail-banner></detail-banner>
</div>
</template>

<script>
import DetailBanner from './components/Banner'
import axios from "axios"
export default {
  name: 'Detail',
  components:{
    DetailBanner
  },
  data(){
    return{
      list:[{
        title:"成人票"
      }]
    }
  },
   methods:{
    getDetailInfo(){
       axios.get("/static/mock/details.json?id="+this.$router.params.user)
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>