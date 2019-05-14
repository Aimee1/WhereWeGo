<template>
  <div>
    <ul id="text">
      <li v-for="(item,index) in items" :key="item.id" @click="getkey(index)">{{item.title}}</li>
    </ul>
    <div id="listtext">
      <li v-for="it in items[Id].list" :key="it">{{it.listName}}</li>
      <div></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AdminCue",
  data() {
    return {
      Id: 0,
      items: [
        {
          id: 0,
          title: "title-1",
          list: [
            {
              listName: "list11",
              description: "description-11"
            },
            {
              listName: "list12",
              description: "description-12"
            },
            {
              listName: "list13",
              description: "description-13"
            },
            {
              listName: "list14",
              description: "description-14"
            }
          ]
        },
        {
          id: 1,
          title: "title-2",
          list: [
            {
              listName: "list21",
              description: "description-21"
            },
            {
              listName: "list22",
              description: "description-22"
            },
            {
              listName: "list23",
              description: "description-23"
            },
            {
              listName: "list24",
              description: "description-24"
            }
          ]
        },
        {
          id: 2,
          title: "title-3",
          list: [
            {
              listName: "list31",
              description: "description-31"
            },
            {
              listName: "list32",
              description: "description-32"
            },
            {
              listName: "list33",
              description: "description-33"
            },
            {
              listName: "list34",
              description: "description-34"
            }
          ]
        },
        {
          id: 3,
          title: "title-4",
          list: [
            {
              listName: "list41",
              description: "description-41"
            },
            {
              listName: "list42",
              description: "description-42"
            },
            {
              listName: "list43",
              description: "description-43"
            },
            {
              listName: "list44",
              description: "description-44"
            }
          ]
        }
      ]
    };
  },
  methods:{
      getkey(id){
        this.Id = id
      }
  }
};
</script>

<style lang="stylus" scoped>
li{
  list-style :none;
}
#text {
  font-size: 0.4rem;
  float: left;
  line-height: 0.8rem;
  width: 15%;
  text-align: center;
  background: #2e8bd1;
}
#listtext{
  background: #6ed49c;
  font-size: 0.3rem;
}
#listtext li{
  diaplay:inset-block;
  }
</style>
