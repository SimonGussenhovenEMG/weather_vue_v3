<template>
  <section class="d-flex flex-column vh-75">
    <Header />

      <div class="container my-auto h-100">
        <div>
          <Loading v-if="isLoading" />
          <WeatherCard
            v-else
            :weatherData="weatherData[0]"
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
import { weatherData, locationData } from "./data/index.js";


// import getCurrentWeather from './shared/api'
const hilversumKey = "249538";
const currentWeatherUrl =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const currentLocationUrl =
  "http://dataservice.accuweather.com/currentconditions/v1/";
const secretKey = "GX6Bwh4YFRyT2VOGbHbwbRiDp98uVCi5";

export default {
  name: "App",
  components: {
    Header,
    WeatherCard,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      weatherData: {},
      someProp: false,
    };
  },
  created() {
    this.weatherData = weatherData;
    this.locationData = locationData;
  },
  mounted() {
    // this.getCurrentWeather();
    this.isLoading = false;
  },
  methods: {
    async getCurrentWeather() {
      await fetch(`${currentWeatherUrl}${hilversumKey}?apikey=${secretKey}`)
        .then((response) => response.json())
        .then((data) => console.log(data.Version));
    },
    async getLocationData() {
      await fetch(`${currentLocationUrl}${hilversumKey}?apikey=${secretKey}`)
        .then((response) => response.json())
        .then((data) => console.log(data.Version));
    },
  },
};
</script>
