<template>
  <v-container>
    <v-footer
      fluid
      class="text-center mb-100"
      height="100"
      id="pieddepage"
      color="white"
    >
      <!-- Réseaux sociaux -->
      <v-row align="center">
        <v-list class="mx-auto">
          <v-list-item class="unlisted">
            <a href="https://twitter.com/madeinfck">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </v-list-item>
          <v-list-item class="unlisted">
            <a href="https://github.com/MadeInFck/covid-vue-leafletmap">
              <i class="fab fa-github fa-2x"></i>
            </a>
          </v-list-item>
        </v-list>
      </v-row>
      <!-- pied de page du footer-->
      <v-col cols="12" class="mb-20">
        <p>
          <a href="#">Mentions légales</a> |
          <a href="#">Politique de confidentialité</a>
        </p>
        <p>
          <a href="https://www.madeinfck.com" target="_blank">MadeInFck.com</a>
          | Epidémie Covid-19 | Mars 2020
        </p>
      </v-col>
    </v-footer>
  </v-container>
</template>

<style scoped>
#pieddepage {
  padding-top: 30px;
  padding-bottom: 30px;
  margin: auto auto 0;
}

i {
  color: rgb(31, 29, 29);
  margin-left: 10px;
}

a {
  text-decoration: none !important;
}
a:hover,
i:hover {
  color: #87db65;
  text-decoration: none !important;
}

.unlisted {
  list-style: none;
  display: inline;
}

.theme--light.v-footer {
  background-color: #fff !important;
}
</style>
