<template>
  <div class="meteo-page">
    <h1 class="title">Weather {{ city }}</h1>
    <div class="container">
      <div class="card m-2 py-2 d-flex flex-column align-items-center" v-for="weather in weatherForecast" :key="weather.maxTemp">
        <h3>{{ weather.datetime }}</h3>
        <img :src="require(`../assets/iconsWeather/${weather.icon}.png`)" alt="test">
        <div class="d-flex gap-2">
          <p>Max: {{ weather.maxTemp }}</p>
          <p>Min: {{ weather.minTemp }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'weather-page',
  data() {
    return {
      latitude: null,
      longitude: null,
      weatherForecast: [],
      city: null,
      data: null,
    };
  },
  created() {
    navigator.geolocation.watchPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
    if (this.latitude === null) {
      this.latitude = 44.837789;
      this.longitude = -0.57918;
    }
  },
  async mounted() {
    await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=39dde015f458467e9d5e972b80242b68&lat=${this.latitude}&lon=${this.longitude}&lang=fr&days=5`).then((res) => {
      this.data = res.data;
    });
    this.city = this.data.city_name;
    JSON.parse(JSON.stringify(this.data.data)).forEach((element) => {
      this.weatherForecast.push({
        maxTemp: element.app_max_temp,
        minTemp: element.app_min_temp,
        datetime: element.datetime,
        icon: element.weather.icon,
      });
    });
  },
};
</script>
