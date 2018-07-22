<template>
  <div class="grid"></div>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
    }
  },
  mounted () {
    var firstCity = this.$myConfig.cities[0].toLowerCase()
    location.href = `city/${firstCity}`
  }
}
</script>

<style>
</style>
