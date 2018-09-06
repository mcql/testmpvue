<template>
  <div class="container">
    <v-search></v-search>
    <div class="prodtype">
      <div class="left">
        <v-catrgories @typeid="typeid"></v-catrgories>
      </div>
      <div class="prod">
        <div class="typecont">当前分类id为:{{id}}</div>
      </div>
    </div>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import vCatrgories from "../../components/categories.vue";
import vSearch from "../../components/search.vue";
import vTabbar from "../../components/tabbar.vue";

export default {
  data() {
    return {
      id: 0
    };
  },
  components: {
    vCatrgories,
    vSearch,
    vTabbar
  },
  methods: {
    typeid(id) {
      this.id = id;
    }
  }
};
</script>

<style scoped>
.addheight {
  height: 50px;
}
.prodtype {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
.left {
  width: 30%;
  height: 100%;
  overflow: scroll;
}
.prod {
  width: 70%;
  height: 100%;
  overflow: scroll;
  background-color: #fff;
  padding: 20px;
}
</style>
