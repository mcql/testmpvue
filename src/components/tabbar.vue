<template>
    <div class="tabbar">
        <ul v-if="navList.length > 0">
            <li v-for="(item , index) in navList" :key="item" :index="index" @click="selectNavItem(index , item.pagePath)">
              <div>
                <p :class="selectNavIndex === index ? 'item-text active' : 'item-text'">{{item.text}}</p>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props:["selectNavIndex"],
  data() {
    return {
      navList: [
        {
          pagePath: "/pages/home/main",
          text: "首页"
        },
        {
          pagePath: "/pages/category/main",
          text: "分类"
        },{
          pagePath: "/pages/my/main",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    selectNavItem: function(index, pagePath) {
      if (index === this.selectNavIndex) {
        return false;
      }
      this.bindViewTap(pagePath);
    },
    bindViewTap(url) {
      wx.switchTab({
        url
      });
    }
  }
};
</script>

<style scpoed>
.tabbar{
  border-top: 1px solid #e3e3e3;
  font-size: 14px;
}
.tabbar ul {
  display: flex;
  justify-content: space-around;
}
.tabbar li {
  line-height: 50px;
}
.active{
  color: red;
}
</style>
