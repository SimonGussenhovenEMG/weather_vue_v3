<template>
  <div class="form-group">
    <select class="p-2 bg-light rounded w-100" :value="cityName" @change="updateCityName">
      <option value="Dordrecht">Dordrecht</option>
      <option value="Hilversum">Hilversum</option>
      <option value="Groningen">Groningen</option>
      <option value="Baarn">Baarn</option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    cityName: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateCityName(event) {
      console.log(event.target.value);
      this.$emit("update-city-name", event.target.value);
    },
  },
};
</script>
