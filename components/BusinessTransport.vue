<template>
    <main class="max-w-7xl mx-auto mt-32">
      <div class="pl-5">
        <h3 class="text-3xl font-semibold">GROUND TRANSPORTATION SOLUTIONS</h3>
        <p class="text-lg">
            Our transportation services expand far and wide for any need. Whether you‘re a planner, need support getting to school or work, or transporting to an appointment, Nextride has you covered.
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
  import services1 from '@/assets/img/airline.png'
  import services2 from '@/assets/img/corporate.png'
  import services3 from '@/assets/img/school.png'
  import services4 from '@/assets/img/private.png'
  import services5 from '@/assets/img/university.png'
  import service6 from '@/assets/img/production.png'
  import service7 from '@/assets/img/weddings.png'
  import service8 from '@/assets/img/government.png'
  
  import { ref } from "vue";
  
  // Service data with YouTube video links
  const services = ref([
    {
      title: "Airline",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
      imageUrl: services1,
    },
    {
      title: "Corporate events",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
      imageUrl: services2,
    },
    {
      title: "School trips",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
      imageUrl: services3,
    },
    {
      title: "Private events",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
      imageUrl: services4,
    },
    {
      title: "University",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
      imageUrl: services5,
    },
    {
      title: "Production crews",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
      imageUrl: service6,
    },
    {
      title: "Weddings",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
      imageUrl: service7,
    },
    {
      title: "Goverment",
      videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_6",
      imageUrl: service8,
    },
  ]);
  </script>
  
  <style scoped>
  /* Add any additional global styling here if needed */
  </style>
  