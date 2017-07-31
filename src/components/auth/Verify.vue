<template>
  <div class="register">
    <h1>{{ msg }}</h1>

    <h3 v-if="user">Welcome, {{ user }}</h3>
    <h3 v-else>Please Verify Your Account</h3>

    <form @submit.prevent='verifyUser({
      "email": email,
      "code": code
    })'>
      <div class="form-control">
        <input v-model="email" :value="email" placeholder="Email Address" type="text"/>
      </div>
      <div class="form-control">
        <input v-model="code" :value="code" placeholder="Verification Code" type="text"/>
      </div>
      <div class="form-footer">
        <button type="submit">Verify My Account</button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapState} from 'vuex'
export default {
  name: 'verify',
  computed: {
    ...mapGetters({

    }),
    ...mapState({
      user: state => state.auth.data.email
    })
  },
  methods: {
    ...mapActions([
      'verifyUser'
    ]),
  },
  data () {
    return {
      msg: 'Verify Account',
      email: '',
      code: ''
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
