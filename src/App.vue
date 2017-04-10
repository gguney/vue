<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        message: 'Vue Starter'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  color: #42b983;

}

</style>
