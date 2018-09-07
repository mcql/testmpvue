<template>
  <div class="container">
    <div class="userinfo">
      <div class="namepic">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="nametext">
        用户名 :
        <open-data type="userNickName" lang="zh_CN"></open-data>
      </div>
    </div>
    <div class="content">
      <button @click="testbtn" v-show="show1">送你一颗小星星</button>
      <button @click="testbtn1" v-show="show">结果来了个太阳</button>
    </div>
    <v-tabbar :selectNavIndex=selectNavIndex></v-tabbar>
  </div>
</template>

<script>
import vTabbar from "../../components/tabbar.vue";
export default {
  components: {
    vTabbar
  },
  data() {
    return {
      selectNavIndex: 2,
      userInfo: {
        avatarUrl: "",
        nickName: ""
      },
      show: false,
      show1: true,
    };
  },
  onShow: function() {
    wx.hideTabBar();
  },
  methods:{
    testbtn(){
      wx.setScreenBrightness({
        value : 0
      })
      this.show = true;
      this.show1 = false;
    },
    testbtn1(){
      wx.setScreenBrightness({
        value : 1
      })
    }
  }
};
</script>

<style scoped>
.namepic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px auto;
}
.nametext {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  border-top: 1px solid #e3e3e3;
}
.content {
  width: 100%;
  height: 100%;
}
.userinfo {
  width: 95%;
  margin: 5px auto;
  background: linear-gradient(#ff9c00, #ffd48f);
  border-radius: 15px;
  color:cornsilk;
}
</style>