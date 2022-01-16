<template>
<section class="banner bg-dark d-flex">
    <img class="vue-logo m-3" :src="image"/>
    <h2 class="text-light mt-2">Vue Weather App V2</h2>
</section>
</template>

<script>
    import image from "../assets/logo.png"
    export default {
        data() {
            return {
                image: image
            }
        },

    }
</script>

<style scoped>
    .vue-logo {
        height: 30px;
    }
</style>