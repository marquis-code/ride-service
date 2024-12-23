// plugins/cursor-fx.client.ts
import { defineNuxtPlugin } from '#app'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'

export default defineNuxtPlugin((nuxtApp) => {
  // Only register on client-side
  if (process.client) {
    nuxtApp.vueApp.component('CursorFx', CursorFx)
  }
})
