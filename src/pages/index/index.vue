<template>
    <div>
        Weather
        <div>Location : {{weather.location.path}}</div>
        <ul v-for="item in weather.daily" :key="item">
            <li class="item">
                <div>{{item.date}} :</div>
                <div>最高温度:{{item.high}}℃ , 最低温度:{{item.low}}℃ ,</div>
                <div>白天天气现象:{{item.text_day}} , 晚间天气现象:{{item.text_night}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      weather: {
        location: {},
        daily: [],
        last_update: ""
      }
    };
  },
  methods: {
    setWeather(data) {
      this.weather = data;
    }
  },
  mounted() {
    var self = this;
    wx.getLocation({
      success(data) {
        console.log("location", data);
        let { latitude, longitude } = data;
        let location = `${latitude}:${longitude}`;
        wx.request({
          url: `https://api.seniverse.com/v3/weather/daily.json?key=5iywjmhfoyqt4rba&location=${location}&language=zh-Hans&unit=c&start=0&days=5`,
          success(res) {
            console.log("weather", res);
            let { location, daily, last_update } = res.data.results[0];
            self.setWeather({ location, daily, last_update });
          }
        });
      }
    });
  }
};
</script>

<style scoped>
.item{
    margin-top: 20px;
    font-size: 16px;
}
</style>