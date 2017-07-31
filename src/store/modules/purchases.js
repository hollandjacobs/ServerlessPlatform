import iterable from '../../api/purchases'
import * as types from '../mutation-types'

const state = {
  all: []
}

const getters = {
  allPurchases: state => state.all
}

const actions = {
  getAllPurchases ({ commit }) {
    iterable.getPurchases(purchases => {
      commit(types.RECIEVE_PURCHASES, { purchases })
    })
  }
}

const mutations = {
  [types.RECIEVE_PURCHASES] (state, { purchases }) {
    state.all = purchases
  },
  [types.ADD_PURCHASES] (state, purchase) {
    state.all.push(purchase)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
