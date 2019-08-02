<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hr>
    <div id="nav">
      <b-nav tabs justfied>
        <b-nav-item class="active" to="/HelloWorld">Home</b-nav-item>
        <b-nav-item to="/Todo">Todo</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
img {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
}

</style>
