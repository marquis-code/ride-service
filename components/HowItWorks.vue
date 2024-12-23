<template>
    <section class="py-12 max-w-6xl mx-auto sm:py-16 px-6 lg:px-0 lg:py-20 text-center">
      <!-- Title Section -->
      <h2 data-aos="fade-up" class="text-lg font-bold text-gray-900 uppercase tracking-wider">Why choose us ?</h2>
      <p data-aos="fade-up" class="mt-2 text-lg font-medium text-gray-700">We offer the best experience with our hire deals</p>
  

      <div class="mt-12">
        <OffersBusinessCard />
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  /* Styling for step card */
  .step-card {
    @apply flex flex-col items-center text-center p-6 bg-white rounded-xl  transition-transform transform hover:-translate-y-2;
  }
  
  .icon-container {
    @apply flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full;
  }
  </style>
  