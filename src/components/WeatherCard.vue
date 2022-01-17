<template>
  <div class="shadow h-auto">
    <div class="card-body d-flex">
      <div class="d-flex flex-column">
        <h2 class="card-title px-2 pt-2">The weather in {{ name }}</h2>
        <h5 class="card-text px-2">
          {{ country }}
        </h5>
      </div>
      <div class="col-3 text-center ml-auto mr-0">
        <img :src="icon" class="p-0" />
        <span class="text-center">{{ text }}</span>
      </div>
    </div>
    <div class="card-body d-flex w-100 pb-5">
      <div class="col-12 p-0">
        <div class="d-flex">
          <img :src="imgs.temp" class="mx-3 pb-3" />
          <p>Temperature: {{ temp }}°c</p>
        </div>
        <div class="d-flex">
          <img :src="imgs.wind" class="mx-3 pb-3" />
          <p>Wind speed: {{ wind }} km/h</p>
        </div>
        <div class="d-flex">
          <img :src="imgs.arrow" class="mx-3 pb-3 arrow" />
          <p>Direction: {{ dir }} ({{ deg }}°)</p>
        </div>
        <div class="d-flex">
          <img :src="imgs.meter" class="mx-3 pt-1" />
          Pressure: {{ bar }} milibar
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
import meter from "../assets/svg/speedometer2.svg";

export default {
  data() {
    return {
      weather: {
        temp: 0,
        icon: "",
        name: "",
        country: "",
        wind: "",
        dir: "",
        deg: "",
        pressure: "",
      },
      imgs: {
        temp: temp,
        wind: wind,
        eye: eye,
        arrow: arrow,
        meter: meter,
      },
    };
  },
  beforeCreate() {
    const location = this.weatherData.location;
    const current = this.weatherData.current;
    this.temp = current.temp_c;
    this.name = location.name;
    this.country = location.country;
    this.icon = current.condition.icon;
    this.text = current.condition.text;
    this.wind = current.wind_kph;
    this.dir = current.wind_dir;
    this.deg = current.wind_degree;
    this.bar = current.pressure_mb;
  },
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
};
</script>
