<template>
  <div>
    <button type="button" @click="choose">选择图片</button>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
      <block v-for="item in img" :key="item">
        <swiper-item>
          <image :src="item" class="slide-image" mode="aspectFit" circular="true" indicator-color="#fafaaf" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: []
    };
  },
  methods: {
    choose() {
      var self = this;
      wx.chooseImage({
        count: 6,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: function(res) {
          self.img = res.tempFilePaths;
        }
      });
    }
  }
};
</script>

<style scoped>
.slide-image {
  width: 100%;
}
</style>
