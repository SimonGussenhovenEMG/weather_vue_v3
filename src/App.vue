<template>
  <div class="d-flex flex-column vh-75">
    <nav>
      <Header />
    </nav>
    <main>
      <section class="container my-auto h-100 justify-content-center d-flex">
        <div>
          <Loading v-if="isLoading" />
          <div v-else class="d-flex flex-column mt-5">
            <SearchBar :cityKey="cityKey" v-on:update-city-key="updateCityKey"/>
            <WeatherCard class="col-12"
              :weatherData="weatherData"
              :locationData="locationData"
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
import { getWeatherData, getLocationData } from "./shared/api.js";
import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    Header,
    WeatherCard,
    Loading,
    SearchBar,
  },
  data() {
    return {
      isLoading: true,
      weatherData: {},
      someProp: false,
      rotation: 0,
      cityKey: ''
    };
  },
  async created() {
    //when the app is created, call the apis
    this.weatherData = await getWeatherData(this.cityKey);
    this.locationData = await getLocationData(this.cityKey);
    this.isLoading = false;
  },
  methods: {
    //update the city when the searchbar emits 'update-city-key'
    updateCityKey (key) {
      this.cityKey = key
    }
  },
  //watch for the city key to change and call the apis again
  watch: {
    async cityKey () {
      this.isLoading = true;
      this.weatherData = await getWeatherData(this.cityKey);
      this.locationData = await getLocationData(this.cityKey);
      this.isLoading = false;
    }
  }
};
</script>

