<template>
  <div class="grid">
    <div class="grid-item">{{ now | moment('timezone', timezoneName, 'ddd Do MMM') }}<br>{{ now | moment('timezone', timezoneName, 'h:mm a') }}</div>
    <div class="grid-item">
      <a @click="PreviousCity()" class="arrow-left"></a>
      <img src="@/assets/images/sunny.png" alt="">
      <a @click="NextCity()" class="arrow-right"></a>
      </div>
    <div class="grid-item">{{ temp }}</div>
    <div class="grid-item">- <span class="country-name">{{ countryName }}</span> <br>{{ cityName }}</div>
    <div class="grid-item">
      {{ condition }} <br>
      {{ description }} <br>
    </div>
    <div class="grid-item">
       <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
</template>

<script>
import * as countrynames from '@/util/countrynames'
import * as ct from 'countries-and-timezones'

export default {
  name: 'City',
  data () {
    return {
      now: new Date(),
      cities: [
        'Vancouver',
        'Stockholm',
        'Hanoi',
        'Paris',
        'London',
        'Beijing'
      ],
      cityIndex: 0,
      cityName: '',
      countryName: '',
      temp: 0,
      condition: '',
      description: '',
      currentCity: this.$route.params.cityName,
      timezoneName: ''
    }
  },
  mounted () {
    this.GetWeatherInfo()
  },
  methods: {
    PreviousCity () {
      this.cityIndex = (this.cityIndex - 1) < 0 ? this.cities.length - 1 : this.cityIndex - 1
      this.GetWeatherInfo()
    },
    NextCity () {
      this.cityIndex = (this.cityIndex + 1) >= this.cities.length ? 0 : this.cityIndex + 1
      this.GetWeatherInfo()
    },
    async GetWeatherInfo () {
      let city = this.currentCity ? this.currentCity : this.cities[this.cityIndex]

      let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=dfe15a41201d660911d013203832e676`)
      let responseJson = await response.json()

      let weatherInfo = responseJson.list[0]

      if (weatherInfo) {
        this.countryName = countrynames.getCountryName(weatherInfo.sys.country).toLowerCase()
        this.cityName = weatherInfo.name

        this.timezoneName = ct.getTimezonesForCountry(weatherInfo.sys.country)[0].name

        this.countryName = this.cityName.toLowerCase() === 'vancouver' ? 'Canada' : this.countryName
        this.temp = parseInt(weatherInfo.main.temp)
        this.condition = weatherInfo.weather[0].main
        this.description = weatherInfo.weather[0].description
      }
    }
  },
  computed: {
  }
}
</script>

<style>
</style>
