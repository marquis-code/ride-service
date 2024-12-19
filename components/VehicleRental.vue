<!-- pages/index.vue
<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-2">Hire A Vehicle</h1>
      <p class="text-gray-600 mb-8">Explore our diverse selection of vehicle categories</p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="vehicle in vehicles" 
             :key="vehicle.id" 
             class="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <img :src="vehicle.image" :alt="vehicle.name" class="w-full h-60 object- bg-gray-50 rounded-lg mb-4">
          
          <div class="flex justify-between items-start mb-2">
            <div>
              <h2 class="font-bold text-lg">{{ vehicle.name }}</h2>
              <p class="text-sm text-gray-600 line-clamp-2">{{ vehicle.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Starting from</p>
              <p class="text-green-600 font-semibold">₦{{ vehicle.price.toLocaleString() }}</p>
            </div>
          </div>
  
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <i class="fas fa-snowflake text-gray-600 mr-2"></i>
                <span class="text-sm">A/C</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-chair text-gray-600 mr-2"></i>
                <span class="text-sm">{{ vehicle.seats }} Seats</span>
              </div>
            </div>
            <div class="flex items-center">
              <span class="text-yellow-400">★</span>
              <span class="ml-1">{{ vehicle.rating }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import car1 from '@/assets/img/car14.jpg'
  interface Vehicle {
    id: number;
    name: string;
    description: string;
    price: number;
    seats: number;
    rating: number;
    image: string;
  }
  
  const vehicles = ref([
    {
      id: 1,
      name: 'Shuttlers Black',
      description: 'Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure.',
      price: 200000,
      seats: 14,
      rating: 5.0,
      image: car1
    },
    {
      id: 2,
      name: 'Coaster Bus',
      description: 'The roomy and comfortable Buses can fit 27 passengers, providing you with maximum comfort.',
      price: 80000,
      seats: 27,
      rating: 5.0,
      image: car1
    },

  ])
  </script>
   -->

   <!-- pages/index.vue -->
<template>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-2">Hire A Vehicle</h1>
      <p class="text-gray-600 mb-8">Explore our diverse selection of vehicle categories</p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Vehicle Cards -->
        <div v-for="vehicle in vehicles" 
             :key="vehicle.id" 
             class="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-100 cursor-pointer"
             @click="openModal(vehicle)">
          <img :src="vehicle.image" :alt="vehicle.name" class="w-full h-48 object-cover bg-gray-50 rounded-lg mb-4">
          
          <div class="flex justify-between items-start mb-2">
            <div>
              <h2 class="font-bold text-lg">{{ vehicle?.name }}</h2>
              <p class="text-sm text-gray-600 line-clamp-2">{{ vehicle.description }}</p>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-600">Starting from</p>
              <p class="text-green-600 font-semibold">₦{{ vehicle.price.toLocaleString() }}</p>
            </div>
          </div>
  
          <div class="flex items-center justify-between mt-4">
            <div class="flex items-center space-x-4">
              <div class="flex items-center">
                <img src="@/assets/img/ac.png" class="mr-2 h-6 w-6" />
                <span class="text-sm">A/C</span>
              </div>
              <div class="flex items-center">
                <img src="@/assets/img/seat.png" class="mr-2 h-6 w-6" />
                <span class="text-sm">{{ vehicle.seats }} Seats</span>
              </div>
            </div>
            <div class="flex items-center">
              <span class="text-yellow-400">★</span>
              <span class="ml-1">{{ vehicle.rating }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Vehicle Detail Modal -->
      <VehicleDetailModal 
        :is-open="isModalOpen"
        :vehicle="selectedVehicle"
        @close="closeModal"
      />
    </div>
  </template>
  
  <script setup lang="ts">
   import car1 from '@/assets/img/car14.jpg'
      import car2 from '@/assets/img/car1.jpg'
         import car3 from '@/assets/img/car2.jpg'
            import car4 from '@/assets/img/car3.jpg'
  import { ref } from 'vue';
  
  interface Vehicle {
    id: number;
    name: string;
    description: string;
    price: number;
    seats: number;
    rating: number;
    image: string;
  }
  
  const vehicles = ref([
    {
      id: 1,
      name: 'Nextride Black',
      description: 'Experience travel like never before with the Jet Moover. Equipped with WiFi connectivity, an array of games, and a captivating screen, it transforms every ride into an adventure.',
      price: 200000,
      seats: 14,
      rating: 5.0,
      image: car1
    },
    {
      id: 2,
      name: 'Coaster Bus',
      description: 'The roomy and comfortable Buses can fit 27 passengers, providing you with maximum comfort.',
      price: 80000,
      seats: 27,
      rating: 5.0,
      image: car2
    },
    {
      id: 3,
      name: 'Prado SUV',
      description: 'The roomy and comfortable Buses can fit 27 passengers, providing you with maximum comfort.',
      price: 80000,
      seats: 27,
      rating: 5.0,
      image: car3
    },
    {
      id: 4,
      name: 'Sedan',
      description: 'The roomy and comfortable Buses can fit 27 passengers, providing you with maximum comfort.',
      price: 80000,
      seats: 27,
      rating: 5.0,
      image: car4
    }
  ])
  
  // Modal state management
  const isModalOpen = ref(false);
  const selectedVehicle = ref<Vehicle | undefined>();
  
  const openModal = (vehicle: Vehicle) => {
    selectedVehicle.value = vehicle;
    isModalOpen.value = true;
  };
  
  const closeModal = () => {
    isModalOpen.value = false;
    selectedVehicle.value = undefined;
  };
  </script>
  