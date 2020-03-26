import Vue from "vue";
import Vuetify from "vuetify/lib";
import fr from "vuetify/es5/locale/fr";
import '@fortawesome/fontawesome-free/css/all.css';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#87DB65",
        secondary: "#B5DFA3",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { fr },
    current: "fr"
  },
  icons: {
    iconfont: "fa"
  }
});
