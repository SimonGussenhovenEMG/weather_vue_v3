<template>
    <select @change="updateCityKey" selected="cityKey">
        <option value="251526">Dordrecht</option>
        <option value="249538">Hilversum</option>
        <option value="248345">Groningen</option>
        <option value="250545">Baarn</option>
    </select>
</template>
<script>
    export default {
        props: {
            cityKey: {
                type: String,
                required: true
            }
        },
        methods: {
            updateCityKey(event) {
                console.log(event.target.value)
                    this.$emit('update-city-key', event.target.value)
            }
        }
    }
</script>