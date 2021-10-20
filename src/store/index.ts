import Vue from 'vue'
import Vuex from 'vuex'
import easy from '../words/easy.json';
import medium from '../words/medium.json';
import hard from '../words/hard.json';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: null ,
      items: [
          { title: 'Home', icon: 'mdi-home', to:"/"},
          { title: 'About', icon: 'mdi-help-box', to:"/about" },
        ],
        name:'' ,
        radioGroup: '',
        words:easy,

  },

  mutations: {
    
    definingwordslevel(state){
      if(state.radioGroup == 'Easy'){
        state.words = easy
      }
      else if(state.radioGroup == 'Medium'){
        state.words = medium
      }
      else{
       state.words = hard
      }
    }
  },

  actions: {
  },
  modules: {
  },
  getters: {
  }
  })
