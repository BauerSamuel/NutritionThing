import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router.js';

var api = Axios.create({
  baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
  timeout: 3000,
  headers: {
    'x-app-key': "8120134b8a361912934e53e415fffd2c",
    "x-app-id": "814a7db9"
  }
})
var _sandbox = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/sam/logs',
  timeout: 3000,
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logs: [],
    foods: [],
    activeLog: {}
  },
  mutations: {
    setLogs(state, data) {
      state.logs = data
    },
    setFoods(state, data) {
      state.foods = data
    },
    setActiveLog(state, data) {
      state.activeLog = data
    },
    addLog(state, data) {
      state.logs.push(data)
    }
  },
  actions: {
    initialize({ commit }) {
      _sandbox.get('')
        .then(res => {
          commit('setLogs', res.data.data)
        })
    },
    setActiveLog({ commit }, payload) {
      commit('setActiveLog', payload)
    },
    searchForFood({ }, payload) {
      //payload should be: {
      // query: banana
      // }
      api.post('', payload)
    },
    createLog({ commit, dispatch }, payload) {
      _sandbox.post('', payload)
        .then(res => {
          commit('addLog', res.data.data)
          router.push({ name: 'details', params: { logId: res.data.data._id } })
        })

    }
  }
})


// var now = new Date;
// var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
// now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
