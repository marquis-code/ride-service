<template>
    <div @click="router.push('/signup')" class="relative cursor-pointer w-full h-96 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
      <!-- Background Image -->
      <img :src="service.imageUrl" alt="Service Image" class="w-full h-full object-cover" />
  
      <!-- Overlay for Number and Title -->
      <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
        <!-- Circle with Number -->
     <div class="flex justify-start space-y-2 items-start flex-col">
      <div class="bg-white text-black font-bold text-lg  rounded-full w-10 h-10 flex items-center justify-center">
          {{ index }}
        </div>
        <!-- Title Text -->
        <h3 class="text-white font-bold text-xl w-44 pb-10">{{ service.title }}</h3>
     </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue'
  const router = useRouter()
  interface Service {
    title: string
    imageUrl: string
  }
  
  const props = defineProps<{
    service: Service
    index: number
  }>()
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  