<template>
  <div id="app">
    <b-navbar>
      <template slot="end">
        <b-navbar-item tag="router-link" to="/">
        Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="HowtoTodo">
          HowtoTodo
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="Todo">
          Todo
        </b-navbar-item>
      </template>
    </b-navbar>
    <section>
      <router-view></router-view>
    </section>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
