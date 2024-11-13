<template>
    <div class="bg-white shadow-lg rounded-lg p-4 sm:p-8 my-6 border-[0.5px] border-gray-100 border lg:p-10 max-w-7xl mx-auto">
      <!-- Tabs for "One way" and "Return trip" -->
      <div class="flex items-center border-b border-gray-200">
        <button
          :class="[
            'py-2 px-4 font-semibold text-sm sm:text-base',
            activeTab === 'oneWay' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400'
          ]"
          @click="setActiveTab('oneWay')"
        >
          One way
        </button>
        <button
          :class="[
            'py-2 px-4 font-semibold text-sm sm:text-base',
            activeTab === 'returnTrip' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-400'
          ]"
          @click="setActiveTab('returnTrip')"
        >
          Return trip
        </button>
      </div>
  
      <!-- Booking Form -->
      <div class="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <div class="flex-1">
          <label class="text-sm font-medium text-gray-700 block mb-1">Pick up location</label>
          <div class="flex items-center gap-2 border rounded-lg px-3 py-2">
            <span class="text-green-500">📍</span>
            <input
              type="text"
              placeholder="Enter address"
              v-model="pickupLocation"
              class="w-full outline-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <div class="flex-1">
          <label class="text-sm font-medium text-gray-700 block mb-1">Destination location</label>
          <div class="flex items-center gap-2 border rounded-lg px-3 py-2">
            <span class="text-blue-500">📍</span>
            <input
              type="text"
              placeholder="Enter address"
              v-model="destinationLocation"
              class="w-full outline-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <div class="flex-1" v-if="activeTab === 'returnTrip' || activeTab === 'oneWay'">
          <label class="text-sm font-medium text-gray-700 block mb-1">First trip</label>
          <div class="flex items-center gap-2 border rounded-lg px-3 py-2">
            <span class="text-gray-500">📅</span>
            <input
              type="date"
              v-model="firstTripDate"
              class="w-full outline-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <div class="flex-1" v-if="activeTab === 'returnTrip'">
          <label class="text-sm font-medium text-gray-700 block mb-1">Return trip</label>
          <div class="flex items-center gap-2 border rounded-lg px-3 py-2">
            <span class="text-gray-500">📅</span>
            <input
              type="date"
              v-model="returnTripDate"
              class="w-full outline-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <!-- Search Button -->
        <button
          @click="searchTrips"
          class="flex items-center justify-center bg-black text-white w-12 h-12 rounded-full hover:bg-gray-800 transition duration-200"
        >
          🔍
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  

  const activeTab = ref<'oneWay' | 'returnTrip'>('oneWay')
  
  // Form inputs
  const pickupLocation = ref<string>('')
  const destinationLocation = ref<string>('')
  const firstTripDate = ref<string>('')
  const returnTripDate = ref<string>('')
  

  function setActiveTab(tab: 'oneWay' | 'returnTrip') {
    activeTab.value = tab
    if (tab === 'oneWay') returnTripDate.value = ''
  }
  
  // Function to handle search action
  function searchTrips() {
    const searchData = {
      tripType: activeTab.value,
      pickupLocation: pickupLocation.value,
      destinationLocation: destinationLocation.value,
      firstTripDate: firstTripDate.value,
      returnTripDate: activeTab.value === 'returnTrip' ? returnTripDate.value : null,
    }
    console.log('Searching trips with data:', searchData)
    alert(JSON.stringify(searchData, null, 2)) // Placeholder for search logic
  }
  </script>
  
  <style scoped>
  /* For mobile responsiveness and spacing */
  </style>
  