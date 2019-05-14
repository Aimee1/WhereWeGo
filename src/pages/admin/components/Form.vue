<template>
  <div class="form">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="游戏标识">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <el-form-item label="游戏名称">
        <el-select v-model="form.name" placeholder="请选择游戏名称">
          <el-option label="黑暗信仰" value="黑暗信仰"></el-option>
          <el-option label="基因特工" value="基因特工"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="回调地址">
        <el-input v-model="form.ratio"></el-input>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "adminForm",
  data() {
    return {
      form: {
        type: "",
        name: [],
        ratio: "fasfds",
        date1: "e",
        date2: "12",
        delivery: false,
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="stylus" scoped>
form>>>.line
  text-align center
body {
  height: 100%;
  form {
    width: 30%;
    position: fixed;
    left: 35%;
    top: 20%;
    background: #ececec;
    padding: 40px 2%;
  }
}
</style>