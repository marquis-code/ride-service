<template>
  <main class="max-w-6xl mx-auto mt-32">
    <div class="pl-5">
      <h3 data-aos="flip-left" class="text-3xl font-semibold">How will Shuttlers help you?</h3>
      <p data-aos="flip-left" class="text-lg">
        We‘ve got you covered for all your personal and group transportation
        needs.
      </p>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 min-h-screen p-20"
    >
      <Card
        v-for="(service, index) in services"
        :key="index"
        :service="service"
        :index="index + 1"
      />
    </div>
  </main>
</template>

<script lang="ts" setup>
import services1 from '@/assets/img/services6.jpg'
import services2 from '@/assets/img/services2.jpg'
import services9 from '@/assets/img/services9.jpg'
import services4 from '@/assets/img/services4.jpg'
import services5 from '@/assets/img/services5.jpg'
import service10 from '@/assets/img/service10.png'

import { ref } from "vue";

// Service data with YouTube video links
const services = ref([
  {
    title: "Employee Transport Services",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    imageUrl: services1,
  },
  {
    title: "Car Rental Services",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    imageUrl: services2,
  },
  {
    title: "School Transportation",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    imageUrl: services9,
  },
  {
    title: "Conference and Conventions",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
    imageUrl: services4,
  },
  {
    title: "Event Transportation",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
    imageUrl: services5,
  },
  {
    title: "Airport Transportation",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
    imageUrl: service10,
  },
]);
</script>

<style scoped>
/* Add any additional global styling here if needed */
</style>
