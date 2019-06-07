import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccessful: false,
    loginError: false
  },
  mutations: {
    loginSuccessful: (state, msg) => {
      state.loginSuccessful = msg;
      state.loginError = false
    },
    loginFailed: (state, errorMsg) => {
      state.loginError= errorMsg;
      state.loginSuccessful = false;
    }
  },
  actions: {
    doLogin({commit}, loginData){
     // let user = JSON.parse(localStorage.getItem('user'));
      if(loginData.password == 'admin123'){
        commit('loginSuccessful', "Welcome to VUE JS Demo APP")
      }
      else{
        commit('loginFailed', "Password is incorrect")
      }
    }
  }
})
