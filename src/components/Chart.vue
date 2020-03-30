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
    Highcharts: Highcharts,
    options: {
      title: {
        text: "Historique des données de l'épidémie Covid-19"
      },

      subtitle: {
        text: "Source: https://www.worldometers.info/coronavirus/"
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
    ...mapState(["countries", "historicalData"])
  },
  methods: {
    displayCountryData(data) {
      if (data.length == 0) {
        this.options.legend.title.text = ""
      } else {
        this.options.legend.title.text = "Sélectionnez les données :"
      }

      this.options.series = [];
      for (const country in data) {
        for (const historical in this.historicalData) {
          if (
            data[country] ==
              this.historicalData[historical].country ||
            data[country].toLowerCase() ==
              this.historicalData[historical].province
          ) {
            console.log(
              this.historicalData[historical].country,
              this.historicalData[historical].province,
              data[country]
            );

            const values = Object.values(
              this.historicalData[historical].timeline.cases
            );
            const province = this.historicalData[historical].province;
            let name = data[country];
            if (
              province != null 
            ) {
              name += " " + province;
            }
            this.options.series.push({ name: name, data: values });
          }
        }
      }
    }
  }
};
</script>
<style></style>
