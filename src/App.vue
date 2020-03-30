<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-icon>fas fa-certificate</v-icon>
      <h1 class="text-left align-center">Epidémie Covid-19</h1>
    </v-app-bar>
    <v-content>
      <Map />
      <Datacard />
      <ChartData />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Map from "./components/Map";
import Datacard from "./components/Datacard";
import ChartData from "./components/Chart";
import Footer from "./views/Footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Map,
    Datacard,
    ChartData,
    Footer
  },
  data: () => ({
    baseUrl: "https://corona.lmao.ninja/"
  }),
  methods: {
    ...mapActions([
      "updateTotalData",
      "updateCountriesData",
      "updateHistoricalData"
    ]),
    getCountries() {
      fetch(this.baseUrl + `countries`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateCountriesData", data);
        });
    },
    getTotalData() {
      fetch(this.baseUrl + `all`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateWorldData", data);
        });
    },
    getHistoricalData() {
      fetch(this.baseUrl + `v2/historical`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateHistoricalData", data);
        });
    }
  },
  created() {
    this.getCountries();
    this.getTotalData();
    this.getHistoricalData();
  }
};
</script>
