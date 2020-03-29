<template>
  <v-container fluid>
    <v-row dense align="center">
      <v-col cols="12" md="4">
        <v-card outlined elevation="10">
          <v-card-title>
            L'épidémie dans le monde
            <v-spacer></v-spacer>
            <v-icon large right color="green">fas fa-globe fa-2x</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-col>
            <v-card outlined class="mx-auto" elevation="20">
              <v-card-subtitle>
                Nombre de cas : {{ worldData.cases }}
              </v-card-subtitle>
              <v-card-subtitle>
                Décès : {{ worldData.deaths }}
              </v-card-subtitle>
              <v-card-subtitle>
                Guéris : {{ worldData.recovered }}
              </v-card-subtitle>
              <v-card-subtitle>
                Total contaminé : {{ worldData.updated }}
              </v-card-subtitle>
            </v-card>
            <v-card outlined class="mt-2" elevation="20">
              <v-card-title>
                <p>N'oubliez pas !</p>
              </v-card-title>
              <v-card-subtitle>
                <a
                  href="https://solidarites-sante.gouv.fr/IMG/pdf/covid19_fiche_patients-2.pdf"
                  target="_blank"
                  >Les bons gestes pour se protéger et protéger les autres</a
                >
                #RestezChezVous
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <v-card outlined class="mx-auto" elevation="10">
          <v-card-title>
            Bilan par pays
            <v-spacer></v-spacer>
            <v-icon large right color="green">fas fa-ambulance fa-2x</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-col cols="12" md="6" class="mt-9">
            <v-select
              autofocus
              light
              outlined
              append-icon="fas fa-search"
              :items="countries"
              label="Statistiques par pays"
              @change="displayCountryData"
            ></v-select>
          </v-col>
          <v-col>
            <v-card class="mt-1" outlined shaped loading elevation="20">
              <v-card-title>
                {{ country }}
              </v-card-title>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="6">
                  <v-card-subtitle>
                    Nombre de cas : {{ cases }}
                  </v-card-subtitle>
                  <v-card-subtitle> Décès : {{ deaths }} </v-card-subtitle>
                </v-col>
                <v-col cols="6">
                  <v-card-subtitle> Guéris : {{ recovered }} </v-card-subtitle>
                  <v-card-subtitle>
                    Décès du jour : {{ todayDeaths }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    Cas du jour : {{ todayCases }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Datacard",
  data() {
    return {
      country: null,
      deaths: null,
      recovered: null,
      cases: null,
      todayCases: null,
      todayDeaths: null
    };
  },
  computed: {
    ...mapState(["countries", "countriesData", "worldData"])
  },
  methods: {
    eachCountry() {
      const data = this.countriesData;
      const array = [];
      for (const item in this.countriesData) {
        array.push(data[item].country);
      }
      this.$store.dispatch("updateCountries", array);
      this.$forceUpdate();
    },
    displayCountryData(country) {
      this.getCountryData(country);
    },
    getCountryData(id) {
      for (const item in this.countriesData) {
        if (this.countriesData[item].country == id) {
          console.log(this.countriesData[item]);
          this.country = this.countriesData[item].country;
          this.deaths = this.countriesData[item].deaths;
          this.cases = this.countriesData[item].cases;
          this.todayCases = this.countriesData[item].todayCases;
          this.todayDeaths = this.countriesData[item].todayDeaths;
          this.recovered = this.countriesData[item].recovered;
          console.log(
            this.countriesData[item].countryInfo.lat,
            this.countriesData[item].countryInfo.long
          );
        }
      }
    }
  },
  beforeUpdate() {
    this.eachCountry();
  }
};
</script>
