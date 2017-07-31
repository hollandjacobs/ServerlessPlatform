import auth from '../../api/auth'
import * as types from '../mutation-types'

const state = {
  data: {
    isLoggedin: false,
    isVerified: false,
    email: '',
    profile: {}
  }
}

const getters = {
  userData: state => state.data
}

const actions = {
  createUser (context, data) {
    return auth.register(data, function(err, response) {
      if (err) {
        console.log('createUser Action', err)
      } else {
        console.log('createUser Action', response)
        context.commit('REGISTER_USER', response)
      }
    })
  },
  verifyUser(context, data) {
    return auth.verify(data, function(err, response) {
      if (err) {
        console.log('verifyUser Action', err)
      } else {
        console.log('verifyUser Action', response)
        context.commit('VERIFY_USER', response)
      }
    })
  },
  loginUser (context, data) {
    return auth.login(data, function(err, response) {
      if (err) {
        console.log('loginUser Action', err)
      } else {
        console.log('loginUser Action', response)
        context.commit('LOGIN_USER', response)
      }
    })
  },
}

const mutations = {
  [types.REGISTER_USER] (state, response) {
    state.data.email = response.user.username
  },
  [types.VERIFY_USER] (state, response) {
    state.data.isVerified = true
  },
  [types.LOGIN_USER] (state, response) {
    state.data.isLoggedin = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
