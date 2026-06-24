<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  if (mapContainer.value) {

    const map = L.map(mapContainer.value).setView(
      [40.7128, -74.0060],
      13
    );

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; OpenStreetMap contributors'
      }
    ).addTo(map);


    L.marker([40.7128, -74.0060])
      .addTo(map)
      .bindPopup('We are here!')
      .openPopup();
  }
});
</script>

<template>
  <div ref="mapContainer" class="map-box"></div>
</template>

<style scoped>
.map-box {
  width: 100%;
  height: 400px;
}
</style>