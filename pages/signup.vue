<!-- components/TransportationForm.vue -->
<template>
    <div class="min-h-screen bg-gray-50 p-4 md:p-8">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="space-y-8">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              STRESS-FREE TRAVEL, WHEREVER YOU GO. BOOK YOUR RIDE WITH Shuttlers SIMPLY ENJOY THE JOURNEY.
            </h1>
            <p class="mt-6 text-gray-600 leading-relaxed">
              However you want to travel, the choice is yours - we have hundreds of vehicles and options for recurring transportation, micro-transit, or special days like weddings, sporting events, school trips and corporate events.
            </p>
          </div>
          
          <div class="bg-[#FFF9F0] p-6 rounded-lg space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-[#F5B544] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="font-medium">Easy booking</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-[#F5B544] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span class="font-medium">A real-time vehicle tracking system</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-[#F5B544] rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span class="font-medium">Simple payment process</span>
            </div>
          </div>
  
          <!-- <div>
            <h2 class="text-2xl font-semibold text-gray-400 mb-6">WE'RE TRUSTED BY</h2>
            <div class="grid grid-cols-3 md:grid-cols-5 gap-6 items-center">
              <img src="/placeholder-logo.png" alt="Partner logo" class="h-8 object-contain" />
              <img src="/placeholder-logo.png" alt="Partner logo" class="h-8 object-contain" />
              <img src="/placeholder-logo.png" alt="Partner logo" class="h-8 object-contain" />
              <img src="/placeholder-logo.png" alt="Partner logo" class="h-8 object-contain" />
              <img src="/placeholder-logo.png" alt="Partner logo" class="h-8 object-contain" />
            </div>
          </div> -->
        </div>
  
        <!-- Right Column - Form -->
        <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 class="text-2xl font-bold mb-2">Transportation Request</h2>
          <p class="text-gray-600 mb-6">Looking for transportation? We can help. Provide detailed information about your event, and our team will work with you to create a custom transportation service that is perfectly suited for your needs.</p>
  
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block mb-2 font-medium">
                When is your trip? <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="formData.tripDate"
                placeholder="Please use a range of dates for multiple days trip"
                class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 font-medium">
                  Total estimated passengers
                </label>
                <input 
                  type="number" 
                  v-model="formData.passengers"
                  class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div>
                <label class="block mb-2 font-medium">
                  What type of transportation?
                </label>
                <select 
                  v-model="formData.transportationType"
                  class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="school">School</option>
                  <option value="corporate">Corporate</option>
                  <option value="wedding">Wedding</option>
                  <option value="sports">Sports</option>
                </select>
              </div>
            </div>
  
            <div>
              <label class="block mb-2 font-medium">
                Describe the transportation you are looking for <span class="text-red-500">*</span>
              </label>
              <textarea 
                v-model="formData.description"
                rows="4"
                class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
  
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2 font-medium">
                  First name <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  v-model="formData.firstName"
                  class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
  
              <div>
                <label class="block mb-2 font-medium">
                  Last name <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  v-model="formData.lastName"
                  class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
  
            <div>
              <label class="block mb-2 font-medium">
                Phone number
              </label>
              <div class="flex">
                <select 
                  v-model="formData.countryCode"
                  class="w-24 px-4 py-3.5 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                </select>
                <input 
                  type="tel" 
                  v-model="formData.phone"
                  class="flex-1 px-4 py-3.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
  
            <div>
              <label class="block mb-2 font-medium">
                Email <span class="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                v-model="formData.email"
                class="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div class="text-sm text-gray-600">
              Treepz needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime.
            </div>
  
            <button 
              type="submit"
              class="w-full py-3 px-6 bg-[#F5B544] text-white font-medium rounded-lg hover:bg-[#e5a533] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const formData = ref({
    tripDate: '',
    passengers: 1,
    transportationType: 'school',
    description: '',
    firstName: '',
    lastName: '',
    countryCode: '+234',
    phone: '',
    email: '',
  });
  
  const handleSubmit = () => {
    // Handle form submission
    console.log(formData.value);
  };
  </script>