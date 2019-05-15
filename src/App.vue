<template>
  <div id="app">
    <h1>Nile Instance Map</h1>
    <p>This map shows all Nile instances all over the world.</p>
    <p>Current instances: 0</p>
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map.vue'

export default {
  name: 'app',
  components: {
    Map
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 1080px;
  margin: 0 auto;
}
</style>
