<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <form @submit.prevent='loginUser({
      "email": email,
      "password": password
    })'>
      <div class="form-control">
        <input v-model="email" placeholder="Email Address" type="text"/>
      </div>
      <div class="form-control">
        <input v-model="password" placeholder="Password" type="password"/>
      </div>
      <div class="form-footer">
        <button type="submit" name="button">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
  name: 'login',
  computed: {
    ...mapGetters({

    }),
    ...mapState({
      user: state => state.auth.data.email
    })
  },
  methods: {
    ...mapActions([
      'loginUser'
    ]),
  },
  data () {
    return {
      msg: 'Login',
      email: '',
      password: ''
    }
  }
}
</script>

<style scoped>
  form {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 4px;
    border: 1px solid #D8DDE6;
    color: #16325c;
  }
  .form-control {
    margin-bottom: .6em;
  }
  .form-control input {
    width: 100%;
    border: 1px solid #D8DDE6;
    border-radius: 4px;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    background-color: #fff;
    font-family: SFS, Arial, sans-serif;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-size: 14px;
    transition: all 0.1s;
    padding: 12px;
  }
  .form-footer {

  }
  .form-footer button {
    background-color: #0070d2;
    color: white;
    transition: all 0.1s;
    border: 1px solid transparent;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    font-family: SFS, Arial, sans-serif;
    cursor: pointer;
    background-image: none !important;
    width: 100%;
  }
</style>
