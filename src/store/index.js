import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    totalData: null
  },
  mutations: {
    setTotalData: (state, data) => {
      state.totalData = data;
    },
    setCountries: (state, data) => {
      state.countries = data;
    }
  },
  actions: {
    updateTotalData: ({ commit }, data) => {
      commit("setTotalData", data);
      console.log("total data updated!");
    },
    updateCountries: ({ commit }, data) => {
      commit("setCountries", data);
      console.log("countries data updated!");

    }
  },
  modules: {}
});
