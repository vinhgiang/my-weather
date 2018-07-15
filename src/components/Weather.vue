<template>
  <div class="grid">
    <div class="grid-item">{{ now | moment('ddd Do MMM') }}<br>{{ now | moment('h:mm a') }}</div>
    <div class="grid-item"><img src="@/assets/images/sunny.png" alt=""></div>
    <div class="grid-item">{{ temp }}</div>
    <div class="grid-item">- Sweden <br>{{ citiName }}</div>
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
      citiName: '',
      temp: 0,
      condition: '',
      description: ''
    }
  },
  async mounted () {
    let city = 'Stockholm'

    let response = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=dfe15a41201d660911d013203832e676`)
    let responseJson = await response.json()

    let weatherInfo = responseJson.list[0]

    if (weatherInfo) {
      this.citiName = weatherInfo.name
      this.temp = parseInt(weatherInfo.main.temp)
      this.condition = weatherInfo.weather[0].main
      this.description = weatherInfo.weather[0].description
    }
  }
}
</script>

<style>

</style>
