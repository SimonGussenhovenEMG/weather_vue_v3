<template>
  <div class="d-flex flex-column vh-75">
    <nav>
       <Header />
      <span class="sr-only">Loading...</span>
    </nav>
    <main>
      <section class="container my-auto h-100 justify-content-center d-flex">
        <div>
          <Loading v-if="isLoading" />
          <div v-else class="d-flex flex-column mt-5">
            <SearchBar
              :cityName="cityName"
              v-on:update-city-name="updateCityName"
            />
            <WeatherCard
              class="col-12"
              :weatherData="weatherData"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import { getWeatherData } from "./shared/api.js";
import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    Header,
    // eslint-disable-next-line
    WeatherCard,
    Loading,
    // eslint-disable-next-line
    SearchBar,
  },
  data() {
    return {
      isLoading: true,
      weatherData: {},
      someProp: false,
      rotation: 0,
      cityName: 'Dordrecht'
    };
  },
  async created() {
    //when the app is created, call the apis
    document.cookie != '' ? this.cityName = document.cookie.split('=')[1] : null
    this.weatherData = await getWeatherData(this.cityName);
    this.isLoading = false;
  },
  methods: {
    //update the city when the searchbar emits 'update-city-name'
    updateCityName(name) {
      this.cityName = name;
    },
  },
  //watch for the city key to change and call the apis again
  watch: {
    async cityName() {
      this.isLoading = true;
      this.weatherData = await getWeatherData(this.cityName);
      this.isLoading = false;
    },
  },
};
</script>

