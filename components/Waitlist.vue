<template>
    <div class="bg-white py-16 sm:py-24">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="relative isolate overflow-hidden bg-[#1d4449] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
      <h2 class="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get notified when we’re launching</h2>
      <p class="mx-auto mt-6 max-w-lg text-center text-lg text-gray-300">Are you ready to exprience transport service in another dimension ? Join our waitlist today.</p>
      <form @submit.prevent="joinWaitlist" class="mx-auto mt-10 flex max-w-md gap-x-4">
        <label for="email-address" class="sr-only">Email address</label>
        <input id="email-address" name="email" v-model="payload.email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6" placeholder="Enter your email">
        <button :disabled="loading" type="submit" class="flex-none rounded-md disabled:cursor-not-allowed disabled:opacity-25 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">{{ loading ? 'processing...' : 'Notify me' }}</button>
      </form>
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useJoinWaitlist } from '@/composables/modules/waitlist/useJoinWaitlist'
const { loading, joinWaitlist, payload } = useJoinWaitlist()
</script>