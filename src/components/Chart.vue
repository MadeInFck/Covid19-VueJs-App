<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card outlined class="mx-auto" elevation="10">
          <v-card-title cols="4">
            Données graphiques par pays
          </v-card-title>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6" class="mt-2">
            <v-select
              autofocus
              light
              multiple
              outlined
              append-icon="fas fa-search"
              :items="countries"
              label="Statistiques par pays"
              @change="displayCountryData"
            ></v-select>
          </v-col>
          <chart :options="options" :highcharts="Highcharts" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Highcharts from "highcharts";
import { Chart } from "highcharts-vue";
import { mapState } from "vuex";

export default {
  name: "ChartData",
  components: {
    Chart
  },
  data: () => ({
    mapSlugs: [],
    Highcharts: Highcharts,
    options: {
      title: {
        text: "Historique des cas actifs de l'épidémie Covid-19"
      },

      subtitle: {
        text: "Source: https://api.covid19api.com"
      },

      yAxis: {
        title: {
          text: "Nombre de personnes contaminées"
        }
      },

      xAxis: {
        title: {
          text: "Données par jour"
        },
        accessibility: {
          rangeDescription: "Depuis le 22/01/2020"
        },
        type: "datetime",
        labels: {
          format: "{value:%e-%b}",
          align: "center",
          rotation: 90
        },
        tickWidth: 0,
        tickPosition: "inside",
        gridLineWidth: 1
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle",
        title: {
          text: ""
        }
      },

      plotOptions: {
        series: {
          pointStart: Date.UTC(2020, 0, 22),
          pointInterval: 24 * 3600 * 1000
        }
      },
      series: []
    }
  }),
  computed: {
    ...mapState(["countries", "slugs", "baseUrl"])
  },
  methods: {
    displayCountryData(country) {
      this.options.series = [];
      this.mapSlugs = [];
      for (let item in country) {
        this.addData(country[item]);
      }
      this.$store.dispatch("updateMapSlugs", this.mapSlugs);
    },
    getSlug(country) {
      let index = null;
      for (let item in this.countries) {
        if (this.countries[item] == country) {
          index = item;
        }
      }
      return this.slugs[index];
    },
    addData(country) {
      const slug = this.getSlug(country);
      this.mapSlugs.push(slug);
      fetch(this.baseUrl + `total/country/` + slug)
        .then(response => response.json())
        .then(data => {
          let values = [];
          for (const day in data) {
            values.push(data[day].Active);
          }
          this.options.series.push({ name: country, data: values });
        });
    }
  }
};
</script>
<style></style>
