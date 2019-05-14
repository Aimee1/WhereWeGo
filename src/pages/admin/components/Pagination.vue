<template>
  <div class="box">
    <el-header >游戏管理</el-header>
    <el-table
      :data="tempList"
      stripe
      border
      style="margin-bottom:14px;"
    >
      <el-table-column property="type" label="游戏标识" width="228" ref="type"></el-table-column>
      <el-table-column property="name" label="游戏名称" width="228" :formatter="formatDecimal2"></el-table-column>
      <el-table-column property="ratio" label="回调地址 "></el-table-column>
      <el-table-column property="marketValue" label="总人数" :formatter="toPercent"></el-table-column>
      <el-table-column property="data" label="日期" :formatter="toPercent"></el-table-column>
      <el-table-column label="操作" :formatter="toPercent">
            <el-table-column  width="100"><i class="el-icon-edit" @click="handleEdit" ref="true"></i></el-table-column>
            <el-table-column  width="100"><i class="el-icon-delete" @click="handleDelet(scope.$index,tempList)"></i></el-table-column>
      </el-table-column>
    </el-table>
    <div class="paginationClass">
      <el-pagination
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page="currentPage1"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total1"
      ></el-pagination>
    </div>
  </div>
</template>
<script>

export default {
  name: "adminPagination",
  data() {
    return {
      total1: 0,
      currentPage1: 1,
      pageSize: 10,
      tempList: [
        {
          data: "2018-05-13",
          name: "黑暗信仰",
          marketValue: 21,
          type: "HXXY",
          ratio: "gfdeasw279"
        },
        {
          data: "2018-05-13",
          name: "遮天",
          marketValue: 12,
          type: "ZT",
          ratio: "fsdfsd278"
        },
        {
          data: "2018-05-13",
          name: "梦红楼",
          marketValue: 12,
          type: "MHL",
          ratio: "fsdfds2783"
        },
        {
          data: "2018-05-13",
          name: "无双屠龙",
          marketValue: 12,
          type: "WSTL",
          ratio: "dasdas27699"
        },
        {
          data: "2018-05-13",
          name: "基因特工",
          marketValue: 7587,
          type: "JYTG",
          ratio: "asd2734"
        },
        {
          data: "2018-05-13",
          name: "泡泡精灵",
          marketValue: 6789,
          type: "PPJL",
          ratio: "dasd24853"
        },
        {
          data: "2018-05-13",
          name: "贪吃蛇",
          marketValue: 61,
          type: "TCS",
          ratio: "dadsa24853"
        },
        {
          data: "2018-05-13",
          name: "扑鱼",
          marketValue: 6,
          type: "PU",
          ratio: "dasdas24"
        },
        {
          data: "2018-05-13",
          name: "斗地主",
          marketValue: 461,
          type: "DDZ",
          ratio: "sfds18"
        },
        {
          data: "2018-05-13",
          name: "16山钢03",
          marketValue: 38,
          type: "信用债",
          ratio: "dss015"
        },
        // {
        //   data: "2018-05-13",
        //   name: "黑暗信仰",
        //   marketValue: 21,
        //   type: "HXXY",
        //   ratio: "dssa795"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "遮天",
        //   marketValue: 12,
        //   type: "ZT",
        //   ratio: "sds278"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "梦红楼",
        //   marketValue: 12,
        //   type: "MHL",
        //   ratio:"sdasd783"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "无双屠龙",
        //   marketValue: 12,
        //   type: "WSTL",
        //   ratio: "fsdds7699"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "基因特工",
        //   marketValue: 7587,
        //   type: "JYTG",
        //   ratio: "dsfds2734"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "泡泡精灵",
        //   marketValue: 6789,
        //   type: "PPJL",
        //   ratio: "dsfsd24853"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "贪吃蛇",
        //   marketValue: 61,
        //   type: "TCS",
        //   ratio:"dsfds4853"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "扑鱼",
        //   marketValue: 6,
        //   type: "PU",
        //   ratio: "fdsfsd024"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "斗地主",
        //   marketValue: 461,
        //   type: "DDZ",
        //   ratio: "fsdf18"
        // },
        // {
        //   data: "2018-05-13",
        //   name: "16山钢03",
        //   marketValue: 38,
        //   type: "信用债",
        //   ratio: "ds15"
        // }
      ]
    };
  },
  methods: {
    handleSizeChange1: function(pageSize) {
      // 每页条数切换
      this.pageSize = pageSize;
      this.handleCurrentChange1(this.currentPage1);
    },
    handleCurrentChange1: function(currentPage) {
      //页码切换
      this.currentPage1 = currentPage;
      this.currentChangePage(this.tempList, currentPage);
    },

  //  点击编辑时操作
     handleEdit (index,row){
       this.$emit("change",this.type)
     },
     handleDelet (index, rows){
       rows.splice(index, 1);
        
     }
    // //分页方法（重点）
    // currentChangePage(list, currentPage) {
    //   let from = (currentPage - 1) * this.pageSize;
    //   let to = currentPage * this.pageSize;
    //   this.tempList = [];
    //   for (; from < to; from++) {
    //     if (list[from]) {
    //       this.tempList.push(list[from]);
    //     }
    //   }
    // }
    
  }
};
</script>

<style lang="stylus" scoped>
.box{

}
</style>
