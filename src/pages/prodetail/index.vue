<template>
    <div class="prodetail">
        <div class="detail">
            <div class="title">
                <p :class="goods ? 'active' : ''" @click="showgoods">商品</p>
                <p :class="goods ? '' : 'active'" @click="showdetail">详情</p>
            </div>
            <div v-if="goods === true">123</div>
            <div v-else>456</div>
        </div>
        <v-prodtabbar></v-prodtabbar>
    </div>
</template>

<script>
import vProdtabbar from "../../components/prodtabbar.vue";
export default {
  components: {
    vProdtabbar
  },
  onShow() {
    wx.hideTabBar();
  },
  data() {
    return {
      goods: true
    };
  },
  methods: {
    showgoods() {
      this.goods = true;
    },
    showdetail() {
      this.goods = false;
    }
  }
};
</script>

<style>
.prodetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.detail {
  width: 100%;
  height: 100%;
}
.title{
    display: flex;
    justify-content: center;
    background-color: #fafafa;
}
.title p{
    width: 20%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
}
.active{
    color: red;
}
</style>
