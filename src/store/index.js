import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    totalData: null,
    countriesData: []
  },
  mutations: {
    setTotalData: (state, data) => {
      state.totalData = data;
    },
    setCountries: (state, data) => {
      state.countries = data;
    },
    setCountriesData: (state, data) => {
      state.countriesData = data;
    }
  },
  actions: {
    updateTotalData: ({ commit }, data) => {
      commit("setTotalData", data);
    },
    updateCountries: ({ commit }, data) => {
      commit("setCountries", data);
    },
    updateCountriesData: ({ commit }, data) => {
      commit("setCountriesData", data);
    }
  },
  modules: {}
});
