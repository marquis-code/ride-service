<template>
    <div class="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
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
      <div class="max-w-7xl pl-3 lg:pl-8 mx-auto mt-20">
        <h1 class="text-xl font-bold text-gray-800 mb-4">
          Privacy Policy
        </h1>
        <p class="text-gray-600 mb-4">
          Welcome to our Privacy Policy page. Your privacy is of utmost importance to us, and this document outlines how we collect, use, and protect your information.
        </p>
        
        <section class="mb-6">
          <h2 class="text- font-semibold text-gray-800 mb-2">1. Information We Collect</h2>
          <ul class="list-disc pl-6 text-gray-600">
            <li>Personal information such as name, email, phone number, and address.</li>
            <li>Ride-related information including pickup and drop-off locations.</li>
            <li>Payment details for processing transactions.</li>
            <li>Device and usage data to improve our service.</li>
          </ul>
        </section>
  
        <section class="mb-6">
          <h2 class="text- font-semibold text-gray-800 mb-2">2. How We Use Your Information</h2>
          <p class="text-gray-600">
            We use your information to provide, enhance, and secure our services, including:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mt-2">
            <li>Facilitating ride requests and managing bookings.</li>
            <li>Communicating with you about your rides or account.</li>
            <li>Improving the overall user experience through analytics.</li>
            <li>Ensuring compliance with legal obligations.</li>
          </ul>
        </section>
  
        <section class="mb-6">
          <h2 class="text- font-semibold text-gray-800 mb-2">3. Data Sharing and Security</h2>
          <p class="text-gray-600">
            Your data is shared only with trusted third parties such as:
          </p>
          <ul class="list-disc pl-6 text-gray-600 mt-2">
            <li>Drivers to fulfill your ride requests.</li>
            <li>Payment processors for handling transactions.</li>
            <li>Regulatory bodies, if required by law.</li>
          </ul>
          <p class="text-gray-600 mt-2">
            We implement robust security measures to safeguard your data.
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text- font-semibold text-gray-800 mb-2">4. Your Rights</h2>
          <p class="text-gray-600">
            You have the right to access, update, or delete your personal data at any time. Please contact our support team for assistance.
          </p>
        </section>
  
        <section class="mb-6">
          <h2 class="text- font-semibold text-gray-800 mb-2">5. Updates to this Privacy Policy</h2>
          <p class="text-gray-600">
            We may update this policy periodically to reflect changes in our services or legal requirements. Please review it regularly.
          </p>
        </section>
  
        <section class="text-gray-600">
          <p>If you have any questions or concerns, feel free to contact us at <a href="mailto:support@ridehailing.com" class="text-blue-500 hover:underline">support@ridehailing.com</a>.</p>
        </section>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    title: 'Privacy Policy',
    description: 'Read our Privacy Policy to understand how we handle your data at our ride-hailing service.',
  });
  </script>
  