<!-- components/VehicleDetailModal.vue -->
<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4">
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-black opacity-30" @click="close"></div>
        
        <!-- Modal -->
        <div class="relative bg-white rounded-lg w-full max-w-2xl p-6">
          <!-- Close button -->
          <button @click="close" class="absolute right-4 top-4 border bg-white rounded-full h-10 w-10 text-gray-400 hover:text-gray-600">
            <span class="text-2xl">×</span>
          </button>
  
          <div class="grid grid-cols-1 gap-6">
            <img :src="vehicle?.image" :alt="vehicle?.name" class="w-full h-64 object-cover bg-gray-50 rounded-lg">
            
            <div>
              <div class="flex justify-between items-start mb-4">
                <h2 class="text-xl font-bold">{{ vehicle?.name }}</h2>
                <div>
                  <p class="text-sm text-gray-600">Starting from</p>
                  <p class="text-green-600 font-semibold">₦{{ vehicle?.price.toLocaleString() }}</p>
                </div>
              </div>
  
              <div class="flex items-center mb-4">
                <span class="text-yellow-400">★</span>
                <span class="ml-1">{{ vehicle?.rating }} Ratings</span>
              </div>
  
              <p class="text-gray-600 mb-6">{{ vehicle?.description }}</p>
  
              <div class="space-y-6">
                <div>
                  <h3 class="font-bold mb-3">Amenities</h3>
                  <div class="flex space-x-6">
                    <div class="flex items-center">
                        <img src="@/assets/img/ac.png" class="mr-2 h-6 w-6" />
                      <span>A/C</span>
                    </div>
                    <div class="flex items-center">
                        <img src="@/assets/img/seat.png" class="mr-2 h-6 w-6" />
                      <span>{{ vehicle?.seats }} Seats</span>
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 class="font-bold mb-3">Things to know</h3>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4"><use xlink:href="https://my.NextRide.co/_nuxt/sprite.a3bbdf6e.svg#pet"></use></svg>
                      <span class="text-sm">Pets are not allowed inside vehicle</span>
                    </li>
                    <li class="flex items-center">
                        <svg viewBox="0 0 24 24" class="w-4"><use xlink:href="https://my.NextRide.co/_nuxt/sprite.a3bbdf6e.svg#smoking"></use></svg>
                      <span class="text-sm">No smoking</span>
                    </li>
                  </ul>
                </div>
  
                <div>
                  <h3 class="font-bold mb-3">Number of Vehicles</h3>
                  <div class="flex items-center space-x-4">
                    <button class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">-</button>
                    <span>1</span>
                    <button class="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">+</button>
                  </div>
                </div>
  
                <button class="w-full bg-blue-600 text-white py-3.5 rounded-lg hover:bg-green-500 transition-colors">
                  Add to charter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Props {
    isOpen: boolean;
    vehicle?: Vehicle;
  }
  
  const props = defineProps<Props>();
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>