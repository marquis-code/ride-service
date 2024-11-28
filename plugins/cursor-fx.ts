// plugins/cursor-fx.ts
import { defineNuxtPlugin } from '#app';
import CursorFx from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('cursor-fx', CursorFx);
});
