<template>
  <div>
    <admin-aside></admin-aside>
    <admin-form ></admin-form>
  </div>
</template>

<script>
 import adminAside from "./components/Aside";
import adminForm from "./components/Form";
export default {
  name: "AdminIndex",
  flag:false,
  components: {
    adminAside,
    adminForm
  }
  // mounted:function(){
  //   his.flag = true,
  //   this.$on("change",function(type){
  //     console.log(type)
  //   })
  // }
};
</script>

<style lang="stylus" scoped>
 
</style>
