<template>
    <main class="grid p-6 lg:p-0 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
          src="@/assets/img/business-ride.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">Seamless commuting</h3>
          </div>
          <p class="text-sm leading-6 text-start">
            We guarantee the availability of our vehicles when you need them. Our luxurious vehicles are always ready to ensure your journey is effortless.
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">Seamless commuting</h3>
          <p class="text-sm text-gray-500 text-start">
            We guarantee the availability of our vehicles when you need them. Our luxurious vehicles are always ready to ensure your journey is effortless.
          </p>
        </div>
      </div>
      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
           src="@/assets/img/services5.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">Affordable Pricing
          </h3>
          </div>
          <p class="text-sm leading-6 text-start">
            Our commitment to affordability is unwavering, ensuring cost-effective solutions that exceed expectations while maintaining high standards of service and product excellence
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">Smart Drivers</h3>
          <p class="text-sm text-gray-500 text-start">
            Our drivers are smart, proactive, and ready to take you to your destination
          </p>
        </div>
      </div>
      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
           src="@/assets/img/weight1.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">Smart Drivers</h3>
          </div>
          <p class="text-sm leading-6 text-start">
            Our drivers are smart, proactive, and ready to take you to your destination
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">Nextride for schools</h3>
          <p class="text-sm text-gray-500 text-start">
            Help employees get to work safely, comfortably, and on time. Here's an employee pe...
          </p>
        </div>
      </div>
  
      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
           src="@/assets/img/services3.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">Choice of Vehicle</h3>
          </div>
          <p class="text-sm leading-6 text-start">
            At Nextride, we value your choices. You have the freedom to select any vehicle that suits your preferences.
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">Choice of Vehicle</h3>
          <p class="text-sm text-gray-500 text-start">
            At Nextride, we value your choices. You have the freedom to select any vehicle that suits your preferences.
          </p>
        </div>
      </div>



      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
           src="@/assets/img/services3.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">24/7 Customer Service</h3>
          </div>
          <p class="text-sm leading-6 text-start">
            We are dedicated to improving our service for you, and we greatly value our clients. Our customer experience agents are always available for your assistance
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">24/7 Customer Service</h3>
          <p class="text-sm text-gray-500 text-start">
            We are dedicated to improving our service for you, and we greatly value our clients. Our customer experience agents are always available for your assistance
          </p>
        </div>
      </div>




      <div class="relative w-full overflow-hidden rounded-2xl shadow-lg group">
        <!-- Background Image -->
        <img
           src="@/assets/img/services3.jpg"
          alt="Shuttlers for Business"
          class="w-full h-96 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
        />
    
        <!-- Hover Overlay (Covers Entire Card) -->
        <div
          class="absolute inset-0 flex flex-col justify-center bg-blue-600 text-white p-6 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div class="flex flex-col items-start space-x-2 mb-4">
            <div class="bg-blue-700 p-2 rounded-full">
              <!-- Icon placeholder -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6">
                <path d="M16 2a3 3 0 0 1 3 3v4h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h4Zm-5 12H8v5h3v-5Zm6 0h-3v5h3v-5ZM15 4h-4a1 1 0 0 0-1 1v4h6V5a1 1 0 0 0-1-1Z" />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-start">Safety</h3>
          </div>
          <p class="text-sm leading-6 text-start">
            At Nextride, one of our top priorities is your safety. To ensure your peace of mind during your ride, we provide a police escort to watch over you.
          </p>
          <div class="flex justify-start items-start">
            <button class="mt-4 px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
    
        <!-- Card Content (Visible initially) -->
        <div class="absolute bottom-0 left-0 w-full bg-white p-4 py-6 rounded-b-2xl group-hover:opacity-0 transition-opacity duration-300">
          <h3 class="text-lg font-semibold text-gray-900 text-start">Safety</h3>
          <p class="text-sm text-gray-500 text-start">
            At Nextride, one of our top priorities is your safety. To ensure your peace of mind during your ride, we provide a police escort to watch over you.
          </p>
        </div>
      </div>
    </main>
    </template>
    
    <script lang="ts" setup>
    const imageSrc = 'https://via.placeholder.com/400x300' // Replace with actual image source
    </script>
    
    <style scoped>
    /* Group styling for hover effects to target child elements */
    </style>
    