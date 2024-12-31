<template>
    <main class="max-w-6xl mx-auto -mt-20">
      <!-- <p data-aos="fade-up" class="mt-2 text-xl font-medium text-gray-900 font-semibold text-center">Book a ride with CoMiles</p> -->
    <div data-aos="fade-up" class="shadow-lg rounded-3xl my-6 border-[0.5px] border-gray-100 pt-3 bg-gray-25">
      <!-- Tabs for "One way" and "Return trip" -->
      <div class="flex items-center border-gray-200 px-3">
        <button
          :class="[
            'py-2 px-4 font- text-xs sm:text-base',
            activeTab === 'oneWay' ? 'text-gray-700 rounded-tl-lg bg-gray-50 border-gray-700' : 'text-gray-400 bg-white'
          ]"
          @click="setActiveTab('oneWay')"
        >
          One way
        </button>
        <button
          :class="[
            'py-2 px-4 font- text-xs sm:text-base',
            activeTab === 'returnTrip' ? 'text-gray-700 bg-gray-50 rounded-r-lg border-gray-700' : 'text-gray-400 bg-white'
          ]"
          @click="setActiveTab('returnTrip')"
        >
          Return trip
        </button>
      </div>
  
      <!-- Booking Form -->
      <div class="flex flex-col sm:flex-row divide-x-[0.5px] divide-gray-100 items-center border-gray-25 border-t-[0.5px] shadow-sm gap-4  mt-6 border-[0.5px] rounded-b-3xl bg-white m-3 p-3">
        <div class="flex-1">
          <label class="text-sm font-semibold text-gray-700 block mb-1">Pick up location</label>
          <div class="flex items-center gap-2 py-2">
            <span class="text-green-500">
              <img src="@/assets/icons/pickup-circle.svg" />
            </span>
<!--            <input-->
<!--              type="text"-->
<!--              placeholder="Enter address"-->
<!--              v-model="pickupLocation"-->
<!--              class="w-full outline-none text-gray-800 text-sm"-->
<!--            />-->
            <AutoComplete
                :modelValue="payloadObj"
                @update:modelValue="updateLocation"
            />
          </div>
        </div>
  
        <div class="flex-1 pl-4">
          <label class="text-sm font-semibold text-gray-700 block mb-1">Destination location</label>
          <div class="flex items-center gap-2 py-2">
            <span class="text-blue-500">
              <img src="@/assets/icons/dropoff-circle.svg" />
            </span>
<!--            <input-->
<!--              type="text"-->
<!--              placeholder="Enter address"-->
<!--              v-model="destinationLocation"-->
<!--              class="w-full outline-none text-gray-800 text-sm"-->
<!--            />-->
            <AutoComplete
                :modelValue="payloadObj"
                @update:modelValue="updateLocation"
            />
          </div>
        </div>
  
        <div class="flex-1 pl-4" v-if="activeTab === 'returnTrip' || activeTab === 'oneWay'">
          <label class="text-sm font-semibold text-gray-700 block mb-1">First trip</label>
          <div class="flex items-center gap-2 py-2">
            <span class="text-gray-500">📅</span>
            <input
              type="date"
              v-model="firstTripDate"
              class="w-full outline-none border-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <div class="flex-1 pl-3" v-if="activeTab === 'returnTrip'">
          <label class="text-sm font-medium text-gray-700 block mb-1">Return trip</label>
          <div class="flex items-center gap-2 py-2">
            <span class="text-gray-500">📅</span>
            <input
              type="date"
              v-model="returnTripDate"
              class="w-full outline-none border-none text-gray-800 text-sm"
            />
          </div>
        </div>
  
        <!-- Search Button -->
<!--        <button-->
<!--         -->
<!--          class="flex items-center justify-center bg-black text-white w-12 h-12 rounded-full hover:bg-gray-800 transition duration-200"-->
<!--        >-->
<!--         -->
<!--        </button>-->
        <button @click="searchTrips"
                class="bg-black text-white rounded-lg p-2 ml-4 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
               stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </div>
    </main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'

  const payloadObj = ref({
    address: '',
    latitude: 0,
    longitude: 0,
  });

  const updateLocation = (location: { address: string; latitude: any; longitude: any}) => {
    payloadObj.value.address = location.address;
    payloadObj.value.latitude = location.latitude;
    payloadObj.value.longitude = location.longitude;
  };

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
  