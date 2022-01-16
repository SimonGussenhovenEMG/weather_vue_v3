<template>
  <section class="d-flex flex-column vh-75">
    <Header />

    <div class="container my-auto h-100">
      <div>
        <Loading v-if="isLoading" />
        <WeatherCard
          v-else
          :weatherData="weatherData"
          :locationData="locationData"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import { getWeatherData, getLocationData } from "./shared/api.js";



export default {
  name: "App",
  components: {
    Header,
    // eslint-disable-next-line
    WeatherCard,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      weatherData: {},
      someProp: false,
      rotation: 0,
    };
  },
  async created() {
    this.weatherData = await getWeatherData()
    this.locationData = await getLocationData()
    this.isLoading = false
  },
};
</script>

