<template>
  <div>
      <city-header></city-header>
      <city-search></city-search>
      <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from "./components/Header"
import CityList from "./components/List"
import CitySearch from "./components/Search"
export default {
  name: 'City',
  components:{
    CityHeader,
    CityList,
    CitySearch
  },
  methods:{
     getCityDate(){
         
     }
  },
  mounted(){
      getCityDate()
  }
}
</script>

<style lang="stylus" scoped>
</style>
