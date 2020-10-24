<template>
  <div id="app">
    <img alt="Elias54 Logo" src="../assets/logo.png">
    <HelloWorld msg="Ceci est la seconde page de votre application"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Subpage',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
