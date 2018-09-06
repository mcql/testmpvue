<template>
    <div class="leftcate">
        <ul>
            <li v-for="(item , index) in categories" :class="{'active' : item.selected === true }" :key="item" :index="index" @click="loadprod(index)">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: "1", title: "家用电器", selected: true },
        { id: "2", title: "手机数码", selected: false },
        { id: "3", title: "电脑办公", selected: false },
        { id: "4", title: "家居家具", selected: false },
        { id: "5", title: "男装", selected: false },
        { id: "6", title: "女装", selected: false },
        { id: "7", title: "内衣配饰", selected: false },
        { id: "8", title: "美妆个护", selected: false },
        { id: "9", title: "宠物", selected: false },
        { id: "10", title: "鞋靴", selected: false },
        { id: "11", title: "箱包", selected: false },
        { id: "12", title: "珠宝首饰", selected: false },
        { id: "13", title: "运动户外", selected: false },
        { id: "14", title: "家用电器", selected: false },
        { id: "15", title: "箱包", selected: false },
        { id: "16", title: "女装", selected: false },
        { id: "17", title: "家居家具", selected: false },
        { id: "18", title: "运动户外", selected: false },
        { id: "19", title: "鞋靴", selected: false },
        { id: "20", title: "箱包", selected: false },
        { id: "21", title: "电脑办公", selected: false }
      ]
    };
  },
  methods: {
    loadprod: function(index) {
      this.categories.forEach(element => {
        element.selected = false;
      });
      this.categories[index].selected = true;
      this.$emit("typeid", this.categories[index].id);
    }
  }
};
</script>

<style scoped>
.leftcate {
  width: 100%;
  line-height: 45px;
  font-size: 14px;
  text-align: center;
  color: #4e4e4e;
  background-color: #f0f0f0;
}
.leftcate li {
  border-bottom: 1px solid #d8d8d8;
}
.active {
  background-color: #fff;
  color: red;
  border-left: 5px solid red;
  box-sizing: border-box;
}
</style>
