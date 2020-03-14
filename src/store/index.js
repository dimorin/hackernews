import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[],
    asks:[],
    jobs:[],
    users:{},
    items:{},
    list:[],
  },
  getters:{
    fetchedAsk(state){
      return state.asks;
    },
    fetchedItem(state){
      return state.items;
    }
  },
  mutations,
  actions,
  modules: {
  }
})
