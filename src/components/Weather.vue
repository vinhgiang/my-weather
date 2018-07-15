<template>
  <div class="grid">
    <div class="grid-item">{{ now | moment('ddd Do MMM') }}<br>{{ now | moment('h:mm a') }}</div>
    <div class="grid-item">
      <a @click="PreviousCity()" class="arrow-left"></a>
      <img src="@/assets/images/sunny.png" alt="">
      <a @click="NextCity()" class="arrow-right"></a>
      </div>
    <div class="grid-item">{{ temp }}</div>
    <div class="grid-item">- {{ countryName }} <br>{{ cityName }}</div>
    <div class="grid-item">
      {{ condition }} <br>
      {{ description }} <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Weather',
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
      description: ''
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
      let city = this.cities[this.cityIndex]

      let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=dfe15a41201d660911d013203832e676`)
      let responseJson = await response.json()

      let weatherInfo = responseJson.list[0]

      if (weatherInfo) {
        this.cityName = weatherInfo.name
        this.temp = parseInt(weatherInfo.main.temp)
        this.condition = weatherInfo.weather[0].main
        this.description = weatherInfo.weather[0].description
      }
    }
  }
}
</script>

<style>
</style>
