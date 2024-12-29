<template>
    <div class="min-h-screen">
        <header class="absolute inset-x-0 top-0 z-50">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="@/assets/icons/nav-logo.svg" alt="">
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <!-- <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Solutions</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Products</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Opportunity</a>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Resources</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 items-center gap-x-4 lg:justify-end">
        <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in</a>
        <button class="bg-green-500 text-white px-4 text-sm py-2.5 rounded-lg">Create account</button>
      </div>
    </nav>
  </header>
      <div class="max-w-7xl mx-auto max-w-7xl pl-6 lg:pl-8 p-4 sm:p-8 mt-16">
        <h1 class="text-xl font-bold text-gray-800 mb-6">Terms of Use</h1>
  
        <p class="text-gray-700 mb-4">
          Welcome to our ride-hailing service! By using our app or services, you agree to the following terms and conditions.
        </p>
  
        <h2 class="text- font-semibold text-gray-800 mt-6 mb-2">1. Acceptance of Terms</h2>
        <p class="text-gray-700 mb-4">
          By accessing and using our services, you accept and agree to be bound by these terms of use and our privacy policy.
        </p>
  
        <h2 class="text- font-semibold text-gray-800 mt-6 mb-2">2. User Obligations</h2>
        <ul class="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>Users must be at least 18 years old to register and use the service.</li>
          <li>You agree to provide accurate and up-to-date information during registration.</li>
          <li>You must comply with all applicable laws and regulations while using the service.</li>
        </ul>
  
        <h2 class="text- font-semibold text-gray-800 mt-6 mb-2">3. Ride Booking and Cancellation</h2>
        <p class="text-gray-700 mb-4">
          Rides can be booked through the app, and cancellations are subject to the cancellation policy detailed in the app.
        </p>
  
        <h2 class="text- font-semibold text-gray-800 mt-6 mb-2">4. Limitation of Liability</h2>
        <p class="text-gray-700 mb-4">
          We are not liable for any indirect, incidental, or consequential damages resulting from the use of our service.
        </p>
  
        <h2 class="text- font-semibold text-gray-800 mt-6 mb-2">5. Changes to Terms</h2>
        <p class="text-gray-700 mb-4">
          We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes your acceptance of the new terms.
        </p>
  
        <p class="text-gray-700 mt-6">
          If you have any questions about these terms, please contact us at <a href="mailto:support@ridehailing.com" class="text-blue-500 hover:underline">support@ridehailing.com</a>.
        </p>
  
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goBack = () => {
    router.push('/')
  }

  definePageMeta({
    title: 'Terms of use',
    description: 'Read our Terms of user to understand how to user our ride-hailing service.',
  });
  </script>
  
  <style scoped>
  /* Custom styles for mobile responsiveness are handled by Tailwind CSS */
  </style>
  