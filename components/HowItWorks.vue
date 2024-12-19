<template>
    <section class="py-12 max-w-6xl mx-auto sm:py-16 px-6 lg:px-0 lg:py-20 text-center">
      <!-- Title Section -->
      <h2 class="text-lg font-bold text-gray-900 uppercase tracking-wider">Why choose us ?</h2>
      <p class="mt-2 text-lg font-medium text-gray-700">We offer the best experience with our hire deals</p>
  

      <div class="mt-12">
        <OffersBusinessCard />
        <!-- <div v-for="(item, idx) in chooseUsReasons" :key="idx" class="step-card border-[0.5px] border-gray-100">
          <div class="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10 text-blue-500">
              <path d="M12 2a7 7 0 0 1 7 7c0 4.4-7 13-7 13S5 13.4 5 9a7 7 0 0 1 7-7Zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-gray-800">{{ item.title }}</h3>
          <p class="mt-2 text-gray-900 font-light">{{ item.desc }}</p>
        </div> -->
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  // const chooseUsReasons = ref([
  //   {
  //     title: 'Seamless commuting',
  //     desc: 'We guarantee the availability of our vehicles when you need them. Our luxurious vehicles are always ready to ensure your journey is effortless.'
  //   },  
  //   {
  //     title: 'Affordable Pricing',
  //     desc: 'Our commitment to affordability is unwavering, ensuring cost-effective solutions that exceed expectations while maintaining high standards of service and product excellence.'
  //   },
  //   {
  //     title: 'Smart Drivers',
  //     desc: 'Our drivers are smart, proactive, and ready to take you to your destination.'
  //   },
  //   {
  //     title: 'Choice of Vehicle',
  //     desc: 'At Nextride, we value your choices. You have the freedom to select any vehicle that suits your preferences.'
  //   },
  //   {
  //     title: '24/7 Customer Service',
  //     desc: 'We are dedicated to improving our service for you, and we greatly value our clients. Our customer experience agents are always available for your assistance.'
  //   },
  //   {
  //     title: 'Safety',
  //     desc: 'At Nextride, one of our top priorities is your safety. To ensure your peace of mind during your ride, we provide a police escort to watch over you.'
  //   }
  // ])
  /* No additional logic needed as this is a static component */
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
  