<template>
  <div>
    <h1>天气</h1>
    <h2>城市：{{ city }}</h2>
    <h3>温度：{{ temp }}</h3>
    <h3>风向：{{ windDir }}</h3>
    <router-link to="/">返回首页</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      city: null,
      temp: null,
      windDir: null,
    };
  },
  async beforeMount() {
    let key = "9cf432378eee447eba75d0994a65e792";
    let cityUrl = `https://geoapi.heweather.net/v2/city/lookup?location=${this.$route.params.city}&key=${key}`;
    let locationres = await axios.get(cityUrl);
    console.log(locationres);
    let cityid = locationres.data.location[0].id;

    let httpUrl = `https://devapi.heweather.net/v7/weather/now?location=${cityid}&key=${key}`;
    let res = await axios.get(httpUrl);
    console.log(res);
    let data = res.data;
    this.city = locationres.data.location[0].name + " " + data.now.text;
    this.temp = data.now.temp + "°C";
    this.windDir = data.now.windDir;
  },
};
</script>

<style>
</style>