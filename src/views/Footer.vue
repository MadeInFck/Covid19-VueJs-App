<template>
  <v-footer
    fluid
    class="text-center mb-100"
    height=100
    id="pieddepage"
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
          <a href="facebook.com">
            <i class="fab fa-facebook-f fa-2x"></i>
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
      <p>MadeInFck | Epidémie Covid-19 | Mars 2020</p>
    </v-col>
  </v-footer>
</template>

<style scoped>
#pieddepage {
  padding-top: 30px;
  padding-bottom: 30px;
  margin: auto auto 0;
}



i {
  color: #fff;
  margin-left: 10px;
}

a {
  color: rgb(118, 149, 235);
}

a:hover,
i:hover {
  color: #87DB65;
  text-decoration: none !important;
}

.unlisted {
    list-style: none;
    display: inline;
}
</style>
