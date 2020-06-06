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
        v-for="data in mapData"
        :key="data.Country"
        :lat-lng="[data.Lat, data.Lon]"
      >
        <l-icon class-name="markerClass" icon-anchor="[16,37]">
          <div class="headline">
            {{ data.Active }}
          </div>
        </l-icon>
        <l-popup>
          <div>
            <h3>{{ data.Country }}</h3>
            <h5>Nombre de cas confirmés : {{ data.Confirmed }}</h5>
            <h5>Décès : {{ data.Deaths }}</h5>
            <h5>Guéris : {{ data.Recovered }}</h5>
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
    mapData: [],
    zoom: 2,
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
    ...mapState(["mapSlugs", "baseUrl"])
  },
  methods: {
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    },
    getCoords(code) {
      fetch(this.baseUrl + `dayone/country/` + code)
        .then(response => response.json())
        .then(data => {
          this.mapData.push(data.splice(-1)[0]);
          console.log(this.mapData);
        });
    }
  },
  watch: {
    "$store.state.mapSlugs": function(slugs) {
      this.mapData = [];
      for (let slug in slugs) {
        this.getCoords(slugs[slug]);
      }
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
