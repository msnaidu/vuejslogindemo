import Vue from 'vue'
import Vuex from 'vuex'

//Vuex is used for stage management
Vue.use(Vuex)

export default new Vuex.Store({
  //Defining state, mutations and actions for the store
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
     //Here login verfication call can be made using backend service
      if(loginData.password == 'admin123'){
        commit('loginSuccessful', "Welcome to VUE JS Demo APP")
      }
      else{
        commit('loginFailed', "Password is incorrect")
      }
    }
  }
})
