<template>
  <v-container fluid class="mt-2">
    <l-map
      style="min-height: 400px"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map>
  </v-container>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "Map",
  components: {
    LMap,
    LTileLayer
  },
  data: () => ({
    zoom: 3,
    center: latLng(46.480881362452685, 0.8580741496577595),

    mapOptions: {
      zoomSnap: 0.3
    },
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }),
  methods: {
    zoomUpdate(zoom) {
      this.zoom = zoom;
    },
    centerUpdate(center) {
      this.center = center;
    }
  },
  async created() {}
};
</script>
<style></style>
