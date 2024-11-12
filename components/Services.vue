<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 min-h-screen p-20">
      <Card
        v-for="(service, index) in services"
        :key="index"
        :service="service"
        :index="index + 1"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  // Service data with YouTube video links
  const services = ref([
    {
      title: 'Employee Shuttle Services',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
      imageUrl: 'image_url_1.jpg',
    },
    {
      title: 'Car Rental Services',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
      imageUrl: 'image_url_2.jpg',
    },
    {
      title: 'School Transportation',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
      imageUrl: 'image_url_3.jpg',
    },
    {
      title: 'Conference and Conventions',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4',
      imageUrl: 'image_url_4.jpg',
    },
    {
      title: 'Event Transportation',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5',
      imageUrl: 'image_url_5.jpg',
    },
    {
      title: 'Airport Transportation',
      videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6',
      imageUrl: 'image_url_6.jpg',
    },
  ])
  </script>
  
  <style scoped>
  /* Add any additional global styling here if needed */
  </style>
  