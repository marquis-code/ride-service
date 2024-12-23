<template>
  <div class="p-6 lg:p-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="(service, index) in services"
        :key="index"
        :service="service"
        :index="index + 1"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
  import servicesImage from '@/assets/img/weight1.jpg'

interface Service {
  title: string
  imageUrl: string
}

const services = ref<Service[]>([
  {
    title: 'Employee Transport Services',
    imageUrl: servicesImage
  },
  {
    title: 'Car Rental Services',
    imageUrl:servicesImage
  },
  {
    title: 'School Transportation',
    imageUrl: servicesImage
  },
  {
    title: 'Conference and Conventions',
    imageUrl: servicesImage
  },
  {
    title: 'Event Transportation',
    imageUrl: servicesImage
  },
  {
    title: 'Airport Transportation',
    imageUrl: servicesImage
  },
])
</script>

<style scoped>
/* Optional: Global styles if needed */
</style>
