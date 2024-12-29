<!-- <template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div
        class="relative w-80 h-80 border-4 border-dashed border-gray-400 rounded-lg flex items-center justify-center overflow-hidden"
        @click="injectImage"
      >
        <img
          v-if="imageUrl"
          :src="imageUrl"
          alt="Injected"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div
          v-if="imageUrl"
          class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4"
        >
          <h2 class="text-lg font-bold">All of our routes displayed at a glance</h2>
          <p class="text-sm mt-2">
            We are bringing all our routes to you. Simply search for a route along your way and book a ride.
          </p>
        </div>
        <span v-else class="text-gray-500">Click to inject image</span>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import imageUrl from '@/assets/img/hero-bg.jpeg'
  import { ref } from 'vue';
  
//   // State to manage the image URL
//   const imageUrl = ref<string | null>(null);
  
//   // Function to inject an image
//   const injectImage = () => {
//     imageUrl.value =
//       'https://via.placeholder.com/300'; // Replace with your desired image URL
//   };
  </script>
  
  <style scoped>
  /* Additional styles, if needed */
  </style>
   -->


   <template>
    <main class="space-y-6 bg-white py-16 p-4 lg:p-0">
      <div class="flex justify-center items-center font-semibold">
        <h2 data-aos="fade-up" class="text-center max-w-sm max-auto  text-3xl">Experience a simpler, better way to commute</h2>
      </div>
       <div data-aos="fade-up" class="bg-[url('@/assets/img/hero-bg.jpeg')] h-72 max-w-5xl mx-auto rounded-xl">
       <div class="flex justify-center items-center flex-col h-full">
        <h2 class="text-3xl font-bold text-center text-white max-w-xs mx-auto">All of our routes displayed at a glance</h2>
          <p data-aos="fade-up" class="text-sm mt-2 text-center text-white max-w-xs mx-auto">
            We are bringing all our routes to you. Simply search for a route along your way and book a ride.
          </p>
         <div data-aos="fade-up" class="flex justify-center items-center bg-gray-25 rounded-xl text-xs p-3 mt-4">
            <button>View all routes</button>
         </div>
       </div>
   </div>
    </main>
     </template>
     
     <script lang="ts" setup>
     import imageUrl from '@/assets/img/hero-bg.jpeg'
     import { ref } from 'vue';
     
     </script>
     
     <style scoped>
     /* Additional styles, if needed */
     </style>
     