<template>
  <div id="app">
    <VacancyShort />

    <portal-target name="overlay"></portal-target>
  </div>
</template>

<script>
import VacancyShort from "./components/VacancyShort/VacancyShort.vue";

export default {
  name: "app",
  components: {
    VacancyShort
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: inherit;
  font-size: 16px;
}

#app {
  font-family: "Raleway", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1rem;
}
</style>
