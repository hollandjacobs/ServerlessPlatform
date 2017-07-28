<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>List of all purchases:</h2>

    <ul>
      <li v-for="p in purchases">
        <strong>{{ p.title }}</strong> - ${{ p.price }}
      </li>
    </ul>

    <button @click='addPurchases({
      "id": 4,
      "title": "Amazon Echo",
      "price": 179.99,
      "inventory": 15
    })'>Add Purchase To Purchases</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters({
    purchases: 'allPurchases'
  }),
  methods: mapActions([
    'addPurchases'
  ]),
  data () {
    return {
      msg: 'Welcome to the homepage'
    }
  },
  created () {
    this.$store.dispatch('getAllPurchases')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
