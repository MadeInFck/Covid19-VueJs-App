<template>
  <v-container fluid class="mt-2">
    <l-map
      style="min-height: 400px"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      minZoom="1.8"
      maxZoom="6.5"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="countryData in countriesData"
        :key="countryData.countryInfo.iso3"
        :lat-lng="[countryData.countryInfo.lat, countryData.countryInfo.long]"
      >
        <l-icon class-name="markerClass" icon-anchor="[16,37]">
          <div class="headline">
            {{ countryData.cases }}
          </div>
        </l-icon>
        <l-popup>
          <div>
            <h3> {{ countryData.country }} </h3>
            <h5> Nombre de cas : {{ countryData.cases }} </h5>
            <h5> Décès : {{ countryData.deaths }} </h5>
            <h5> Guéris : {{ countryData.recovered }} </h5>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </v-container>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LPopup, LIcon, LMarker } from "vue2-leaflet";
import { mapState } from "vuex";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer,
    LPopup,
    LIcon,
    LMarker
  },
  data: () => ({
    zoom: 3,
    center: latLng(46.480881362452685, 0.8580741496577595),
    circle: {
      center: [46, 2]
    },
    mapOptions: {
      zoomSnap: 0.3
    },
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }),
  computed: {
    ...mapState(["countriesData"])
  },
  methods: {
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    }
  }
};
</script>

<style>
.markerClass {
  background-color: rgba(160, 68, 68, 0.603);
  color: rgba(161, 87, 87, 0.603);
  border: 0px solid red;
  text-align: center;
  border-radius: 60px;
  width: auto !important;
  height: auto !important;
  margin: 0 !important;
  padding: 10px;
}
</style>
