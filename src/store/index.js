import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [],
    worldData: {},
    countriesData: [],
    historicalData: []
  },
  mutations: {
    setWorldData: (state, data) => {
      state.worldData = data;
    },
    setCountries: (state, data) => {
      state.countries = data;
    },
    setCountriesData: (state, data) => {
      state.countriesData = data;
    },
    setHistoricalData: (state, data) => {
      state.historicalData = data;
    }
  },
  actions: {
    updateWorldData: ({ commit }, data) => {
      commit("setWorldData", data);
    },
    updateCountries: ({ commit }, data) => {
      commit("setCountries", data);
    },
    updateCountriesData: ({ commit }, data) => {
      commit("setCountriesData", data);
    },
    updateHistoricalData: ({ commit }, data) => {
      commit("setHistoricalData", data);
    }
  },
  modules: {}
});
