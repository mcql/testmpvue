<template>
  <div class="container">
    <div class="search">
      <v-search></v-search>
    </div>
    <div class="cont">
      <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <swiper-item v-for="item in banner" :key="item">
          <image :src="item" class="slide-image" mode="widthFix" circular="true" indicator-color="#fafaaf" />
        </swiper-item>
      </swiper>
      <div class="nav">
        <ul>
          <li v-for="(category , cindex) in categories" :index="cindex" :key="category">
            <img :src="category.imgurl" mode="aspectFit" />
            <p>{{category.title}}</p>
          </li>
        </ul>
      </div>
      <div class="rrxy">
        <p>快速提升人人信用</p>
        <swiper class="swiper-box" indicator-active-color="red" indicator-dots="true" duration="1000">
          <swiper-item v-for="item in rrxy" :key="item">
            <image :src="item" class="slide-image" mode="widthFix" circular="true" indicator-color="#fafaaf" />
          </swiper-item>
        </swiper>
      </div>
      <div class="swiperash">
        <swiper class="swiper_third" previous-margin="30px" next-margin="30px" autoplay="true" circular="true" interval="5000" duration="1000">
          <swiper-item v-for="item in banner" :key="item">
            <image :src="item" class="slide-image" mode="widthFix" circular="true" indicator-color="#fafaaf" />
          </swiper-item>
        </swiper>
      </div>
      <div class="cateprod">
        <p class="catetitle">分类标题</p>
        <ul>
          <li>
            大分类
          </li>
          <li v-for="item in cateprod" :key="item">
            <img :src="item.imgurl" />
            <p class="realprice">{{item.price}}</p>
            <p class="oldprice">{{item.oldprice}}</p>
          </li>
          <li>
            小分类
          </li>
        </ul>
      </div>
    </div>
    <div class="tabbar">
      <v-tabbar :selectNavIndex=selectNavIndex></v-tabbar>
    </div>
  </div>
</template>

<script>
import vSearch from "../../components/search.vue";
import vTabbar from "../../components/tabbar.vue";

export default {
  components: {
    vSearch,
    vTabbar
  },
  onShow: function() {
    wx.hideTabBar();
  },
  async onPullDownRefresh() {
    // to doing..
    // 停止下拉刷新
    wx.stopPullDownRefresh();
  },
  data() {
    return {
      selectNavIndex: 0,
      cateprod: [
        {
          imgurl: "",
          price: "1",
          oldprice: "2"
        },
        {
          imgurl: "",
          price: "2",
          oldprice: "3"
        },
        {
          imgurl: "",
          price: "3",
          oldprice: "4"
        },
        {
          imgurl: "",
          price: "4",
          oldprice: "5"
        },
        {
          imgurl: "",
          price: "5",
          oldprice: "6"
        },
        {
          imgurl: "",
          price: "6",
          oldprice: "7"
        },
        {
          imgurl: "",
          price: "7",
          oldprice: "8"
        }
      ],
      rrxy: [
        "/static/images/rrxy/act_list_1.png",
        "/static/images/rrxy/act_list_2.png",
        "/static/images/rrxy/act_list_3.png",
        "/static/images/rrxy/act_list_4.png"
      ],

      banner: [
        "/static/images/banner/banner-1.png",
        "/static/images/banner/banner-2.png",
        "/static/images/banner/banner-3.png",
        "/static/images/banner/banner-4.png",
        "/static/images/banner/banner-5.png"
      ],
      categories: [
        {
          title: "美食",
          imgurl: "/static/images/nav/activity.png"
        },
        {
          title: "电器城",
          imgurl: "/static/images/nav/auction.png"
        },
        {
          title: "家居",
          imgurl: "/static/images/nav/brand.png"
        },
        {
          title: "运动",
          imgurl: "/static/images/nav/cart.png"
        },
        {
          title: "母婴玩具",
          imgurl: "/static/images/nav/category.png"
        },
        {
          title: "服饰",
          imgurl: "/static/images/nav/community.png"
        },
        {
          title: "鞋包",
          imgurl: "/static/images/nav/crowd_funding.png"
        },
        {
          title: "汽车配件",
          imgurl: "/static/images/nav/groupbuy.png"
        },
        {
          title: "火车票",
          imgurl: "/static/images/nav/guanzhu.png"
        },
        {
          title: "手机充值",
          imgurl: "/static/images/nav/money.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 50px;
}
.container {
  background-color: #f0f0f0;
}
.cont {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.catetitle {
  font-size: 16px;
  line-height: 32px;
  text-indent: 15px;
}
.realprice {
  margin-top: 15px;
  font-size: 14px;
  color: red;
}
.oldprice {
  font-size: 12px;
  color: #757575;
}
.cateprod ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.cateprod ul li {
  width: 33.3%;
  height: 180px;
  background-color: #aa87af;
  border: 1px solid #fafafa;
  border-bottom: none;
  border-left: none;
  box-sizing: border-box;
  padding: 5px;
}
.cateprod ul li:nth-child(3n) {
  border-right: none;
}
.cateprod ul li image {
  width: 100%;
  height: 70%;
}
.swiperash {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
}
.swiper_third {
  width: 100%;
  height: 150px;
}
.swiper_third image {
  width: 95%;
}
.swiper_third swiper-item {
  display: flex;
  justify-content: center;
}
.swiper swiper-item,
.swiper image,
.swiper-box swiper-item,
.swiper-box image {
  width: 100%;
}
.rrxy {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #fff;
}
.rrxy p {
  font-size: 12px;
  line-height: 40px;
}
.nav {
  background-color: #fff;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.nav ul li {
  width: 20%;
  font-size: 14px;
  text-align: center;
  margin: 10px 0;
}
.nav ul li img {
  width: 60%;
  height: 40px;
}
.tabbar {
  width: 100%;
  height: 50px;
  background-color: #fff;
}
</style>