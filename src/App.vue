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
    ...mapActions(["updateTotalData", "updateCountriesData"]),
    getCountries() {
      fetch(this.baseUrl + `countries`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.$store.dispatch("updateCountriesData", data);
        });
    },
    getTotalData() {
      fetch(this.baseUrl + `all`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateWorldData", data);
        });
    }
  },
  created() {
    this.getCountries();
    this.getTotalData();
  }
};
</script>
