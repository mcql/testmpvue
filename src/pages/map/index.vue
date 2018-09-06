<template>
    <div>
        <map class="map" :scale="16" :markers="pointmark" :latitude="locationPostition.latitude" :longitude="locationPostition.longitude"></map>
    </div>
</template>

<script>
export default {
  data() {
    return {
      locationPostition: [],
      pointmark: [
        {
          latitude: "",
          longitude: "",
          iconPath: "",
          title: ""
        }
      ]
    };
  },
  created() {
    var self = this;
    wx.getLocation({
      type: "gcj02", // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        self.locationPostition = res;
        self.pointmark[0].latitude = res.latitude;
        self.pointmark[0].longitude = res.longitude;
        self.pointmark[0].iconPath = "http://mpvue.com/assets/favicon.ico";
        self.pointmark[0].title = "当前位置";
        console.log(self.pointmark);
      },
      fail: function() {
        console.log("error");
      }
    });
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 333px;
}
</style>
