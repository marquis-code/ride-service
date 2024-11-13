<template>
    <section class="py-12 max-w-7xl mx-auto sm:py-16 px-6 lg:px-0 lg:py-20 text-center">
      <!-- Title Section -->
      <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">How It Works</h2>
      <p class="mt-2 text-2xl font-semibold text-gray-800">Hire with following 3 working steps</p>
  
      <!-- Steps Grid -->
      <div class="mt-12 grid gap-8 sm:grid-cols-3">
        <!-- Step 1: Choose Location -->
        <div class="step-card border-[0.5px] border-gray-100">
          <div class="icon-container">
            <!-- Icon Placeholder -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-blue-500">
              <path d="M12 2a7 7 0 0 1 7 7c0 4.4-7 13-7 13S5 13.4 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">Choose location</h3>
          <p class="mt-2 text-gray-500">Choose your location and find your best vehicle.</p>
        </div>
  
        <!-- Step 2: Pick-up Date -->
        <div class="step-card border-[0.5px] border-gray-100">
          <div class="icon-container">
            <!-- Icon Placeholder -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-blue-500">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10h16v9Zm0-11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1ZM8 13h5v2H8v-2Z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">Pick-up date</h3>
          <p class="mt-2 text-gray-500">Select your pick up date and time to book your vehicle.</p>
        </div>
  
        <!-- Step 3: Book Vehicle -->
        <div class="step-card border-[0.5px] border-gray-100">
          <div class="icon-container">
            <!-- Icon Placeholder -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-blue-500">
              <path d="M17.3 5H18a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h.7l1.4-1.4A2 2 0 0 1 9.4 3h5.2a2 2 0 0 1 1.3.6L17.3 5ZM12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7 15.7A4.9 4.9 0 0 1 12 13a4.9 4.9 0 0 1 5 2.7v.3H7v-.3Z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">Book your vehicle</h3>
          <p class="mt-2 text-gray-500">Book your vehicle and we will deliver it directly to you.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  /* No additional logic needed as this is a static component */
  </script>
  
  <style scoped>
  /* Styling for step card */
  .step-card {
    @apply flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl;
  }
  
  .icon-container {
    @apply flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full;
  }
  </style>
  