<template>
  <div id="app">
      <b-navbar toggleble=true type="dark" variant="dark" fixed>
      <b-navbar-brand to="/">Nav</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" is-nav></b-navbar-toggle>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/Sandbox">SandBox</b-nav-item>
      </b-navbar-nav>

    </b-navbar>
    <img src="./assets/logo.png">
    <h1>Todo Management.</h1>
    <hr>

    <router-view>

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
