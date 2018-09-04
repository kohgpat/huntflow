<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <VacancyShort />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import VacancyShort from './components/VacancyShort.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    VacancyShort
  }
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  box-sizing: inherit;
  font-size: 16px;
}

#app {
  font-family: 'Raleway', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1rem;
}
</style>
