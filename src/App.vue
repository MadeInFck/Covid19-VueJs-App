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
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Map,
    Datacard,
    ChartData,
    Footer
  },
  data: () => ({}),
  computed: {
    ...mapState(["baseUrl"])
  },
  methods: {
    getWorldData() {
      fetch(this.baseUrl + `summary`)
        .then(response => response.json())
        .then(data => {
          this.$store.dispatch("updateWorldData", data);
        });
    }
  },
  created() {
    this.getWorldData();
  }
};
</script>
