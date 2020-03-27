<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex block" justify="center">
        <v-img
          alt="MadeInFck Logo"
          class="mr-5"
          src="/src/assets/logo.png"
          width="256"
          contain
          eager
        />
      </div>

      <h1 class="text-center">Epidémie Covid-19</h1>
    </v-app-bar>
    <v-content>
      <Map />

      <Datacard />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Map from "./components/Map";
import Datacard from "./components/Datacard";
import Footer from "./views/Footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Map,
    Datacard,
    Footer
  },
  data: () => ({
    baseUrl: "https://corona.lmao.ninja/"
  }),
  methods: {
    ...mapActions([
      "updateTotalData",
      "updateCountriesData",
      "updateCountries"
    ]),
    getAllCountriesData() {
      fetch(this.baseUrl + `countries`)
        .then(response => response.json())
        .then(countriesData => {
          this.$store.dispatch("updateCountriesData", countriesData);
        });
    },
    getTotalData() {
      fetch(this.baseUrl + `all`)
        .then(response => response.json())
        .then(totalData => {
          this.$store.dispatch("updateTotalData", totalData);
        });
    }
  },
  created() {
    this.getAllCountriesData();
    this.getTotalData();
  }
};
</script>
