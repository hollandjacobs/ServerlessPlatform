<template>
  <div id="app">
    <h1 v-if="isLoggedin">Welcome {{ email }}</h1>
    <h1 v-else>You need to log in</h1>
    <ul class="nav inline-list">
      <li><router-link :to="{ name: 'home', params: {} }">Home</router-link></li>
      <li><router-link :to="{ name: 'register', params: {} }">Register</router-link></li>
      <li><router-link :to="{ name: 'login', params: {} }">Login</router-link></li>
      <li><router-link :to="{ name: 'verify', params: {} }">Verify</router-link></li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapState({
      isLoggedin: state => state.auth.data.isLoggedin,
      email: state => state.auth.data.email
    })
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #F4F6F9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
}
.inline-list {
  list-style-type: none;
  padding: 0;
}
.inline-list li {
  display: inline-block;
  margin: 0 .6em;
}
</style>
