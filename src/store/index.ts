import Vue from "vue";
import Vuex from "vuex";
import easy from "../words/easy.json";
import medium from "../words/medium.json";
import hard from "../words/hard.json";

Vue.use(Vuex);

interface State {
  drawer: null;
  items: any;
  name: string;
  radioGroup: string;
  words: String[];
  number: number;
}

export default new Vuex.Store<State>({
  state: {
    drawer: null,
    items: [
      { title: "Home", icon: "mdi-home", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
    name: "",
    radioGroup: "",
    words: easy,
    number: 0,
  },

  mutations: {
    definingwordslevel(state) {
      if (state.radioGroup == "Easy") {
        state.words = easy;
      } else if (state.radioGroup == "Medium") {
        state.words = medium;
      } else {
        state.words = hard;
      }

      let currentindex = state.words.length,
        randomindex;
      while (currentindex != 0) {
        randomindex = Math.floor(Math.random() * currentindex);
        currentindex--;

        [state.words[currentindex], state.words[randomindex]] = [
          state.words[randomindex],
          state.words[currentindex],
        ];
      }

      state.words.length = state.number;
    },
  },

  actions: {},
  modules: {},
  getters: {},
});
