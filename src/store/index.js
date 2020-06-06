import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: "https://api.covid19api.com/",
    countries: null,
    slugs: null,
    worldData: null,
    mapSlugs: null
  },
  mutations: {
    setWorldData: (state, data) => {
      state.worldData = data.Global;
      let array = [];
      let arraySlug = [];
      for (let item in data.Countries) {
        array.push(data.Countries[item].Country);
        arraySlug.push(data.Countries[item].Slug);
      }
      state.countries = array;
      state.slugs = arraySlug;
    },
    setMapSlugs: (state, data) => {
      state.mapSlugs = data;
    }
  },
  actions: {
    updateWorldData: ({ commit }, data) => {
      commit("setWorldData", data);
    },
    updateMapSlugs: ({ commit }, data) => {
      commit("setMapSlugs", data);
    }
  },
  modules: {}
});
