<template>
  <div class="shoptabbar">
    <div v-for="(item ,index) in navList" :key="item" :index="index" :class="item.class" @click="selectNavItem(index,item.pagePath)">
      <div v-if="item.navioc !== ''">Ioc</div>
      {{item.text}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          class: "contact",
          text: "联系客服",
          pagePath: "/",
          navioc: "1"
        },
        {
          class: "guanzhu",
          text: "关注",
          navioc: "2"
        },
        {
          class: "cart",
          text: "购物车",
          pagePath: "/",
          navioc: "3"
        },
        {
          class: "addcart",
          text: "加入购物车",
          navioc: ""
        },
        {
          class: "buynow",
          text: "立即购买",
          navioc: ""
        }
      ]
    };
  },
  methods: {
    selectNavItem(index, pagePath) {
      console.log(index);
      if (pagePath) {
        wx.switchTab(pagePath);
      }
    }
  }
};
</script>

<style scoped>
.shoptabbar {
  border-top: 1px solid #f0f0f0;
  box-shadow: 0 0 5px #e5e5e5;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  font-size: 12px;
  text-align: center;
}
.contact,
.guanzhu,
.cart {
  width: 17%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.addcart,
.buynow {
  width: 25%;
  color: #fff;
  line-height: 50px;
  font-size: 14px;
}
.addcart {
  background-color: #535353;
}
.buynow {
  background-color: red;
}
</style>
