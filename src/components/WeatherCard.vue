<template>
  <div class="shadow h-auto mt-5">
    <div class="card-body d-flex">
      <div class="d-flex flex-column">
        <h2 class="card-title px-2">
          Het weer in {{ locationData.EnglishName }}
        </h2>
        <h5 class="card-text px-2">
          {{ locationData.AdministrativeArea.LocalizedName }},
          {{ locationData.Country.EnglishName }}
        </h5>
      </div>
      <div class="col-3">
      </div>
    </div>
    <div class="card-body d-flex">
      <div class="col-12 col-md-6 p-0">
        <div class="d-flex">
          <img :src="imgs.temp" class="mx-2 pb-3" />
          <p>Temperature: {{ weatherData.Temperature.Metric.Value }} °c</p>
        </div>
        <div class="d-flex">
          <img :src="imgs.wind" class="mx-2 pb-3" />
          <p>
            Wind speed: {{ weatherData.Wind.Speed.Metric.Value }}
            {{ weatherData.Wind.Direction.Localized }} ({{
              weatherData.Wind.Direction.Degrees
            }}°)
          </p>
        </div>
        <div class="d-flex">
          <img :src="imgs.arrow" class="mx-2 pb-3 arrow" />
          <p>Direction: {{ weatherData.Wind.Direction.Localized }}</p>
        </div>
        <div class="d-flex">
          <img :src="imgs.eye" class="mx-2 pb-3" />
          <p>Visibility: {{ weatherData.Visibility.Metric.Value }} km</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import temp from "../assets/svg/thermometer-half.svg";
import wind from "../assets/svg/wind.svg";
import eye from "../assets/svg/eye.svg";
import arrow from "../assets/svg/arrow-up-circle.svg";
import weatherIcons from "../data/weatherIcons";
export default {
  data() {
    return {
      time: new Date(),
      imgs: {
        temp: temp,
        wind: wind,
        eye: eye,
        arrow: arrow,
        weatherIcons: weatherIcons,
      },
    };
  },
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
    locationData: {
      type: Object,
      required: true,
    },
  },
  // computed: {
  //   cssProps() {
  //     return {
  //       '--rotation': this.weatherData.Wind.Direction
  //     }
  //   }
  // },
};
</script>
<style scoped>
.arrow {
  rotate: var(--rotation)
}
</style>
