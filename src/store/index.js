import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import * as getters from './getters'
import purchases from './modules/purchases';
import auth from './modules/auth';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    purchases,
    auth
  },
  strict: debug
})
