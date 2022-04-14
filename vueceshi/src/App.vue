<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <index1/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import index1 from './index1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    index1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
