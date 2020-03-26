<template>
  <v-container fluid>
    <v-row dense align="start">
      <v-col cols="4">
        <v-card outlined>
          <v-card-title>
            L'épidémie dans le monde
            <v-spacer></v-spacer>
            <v-icon large right color="green">fas fa-viruses fa-2x</v-icon>
          </v-card-title>
          <v-divider></v-divider>
          <v-col cols="12">
            <v-card outlined class="mx-auto">
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
            <v-card outlined class="mt-2">
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

      <v-col cols="8">
        <v-card outlined class="mx-auto">
          <v-card-title>
            Bilan par pays
          </v-card-title>
          <v-divider></v-divider>
          <v-col cols="4" class="mt-9">
            <v-select
              autofocus
              light
              outlined
              append-outer-icon="fas fa-search"
              :items="dropdown_items"
              label="Statistiques par pays"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-card class="mt-1" outlined shaped loading>
              <v-card-title>
                Chine
              </v-card-title>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="6">
                  <v-card-subtitle>
                    Nombre de cas : {{ worldData.cases }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    Décès : {{ worldData.deaths }}
                  </v-card-subtitle>
                </v-col>
                <v-col cols="6">
                  <v-card-subtitle>
                    Guéris : {{ worldData.recovered }}
                  </v-card-subtitle>
                  <v-card-subtitle>
                    Total contaminé : {{ worldData.updated }}
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
export default {
  name: "Datacard",
  data() {
    return {
      dropdown_items: ["essai", "essai"]
    };
  },
  computed: {
    data: {
      get() {
        return this.$store.state.countries;
      }
    },
    worldData: {
      get() {
        return this.$store.state.totalData;
      }
    }
  }
};
</script>

<style></style>
