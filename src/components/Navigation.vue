<template>
  <nav>
    <ul>
      <li v-for="(city, index) in cities" :key="index"><router-link :to="{ name: 'City', params: { cityName: city } }">{{city}}</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      cities: this.$myConfig.cities
    }
  }
}
</script>

<style>
</style>
