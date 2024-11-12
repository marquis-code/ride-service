<template>
    <div class="relative flex min-h-screen flex-col bg-black pt-10">
      <div class="min-h-28">
        <div class="mx-auto py-4">
          <h2 class="font-black text-4xl text-white uppercase pl-6">
            Most popular vehicle hire deals
          </h2>
  
          <div class="gap-6 mt-8 mx-4 md:flex">
            <!-- First Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video1">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                  2021 Toyota Camry
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                  <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">the trail less taken</span>
            </div>
  
            <!-- Second Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video2">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                    2021 Toyota Coster
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                    <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">the world at large</span>
            </div>
          </div>
  
          <!-- Additional Videos -->
          <div class="gap-6 mt-8 mx-4 md:flex">
            <!-- Third Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video3">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/6363f65c00474db467bed81b_Screen%20Recording%202022-11-03%20at%2011018%20PM-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                    2022 Lexus
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                    <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">grandma cabbage</span>
            </div>
  
            <!-- Fourth Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video4">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/63c084f55da78823643adbc3_ThePerfectPants-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                    2022 Range Rover Velar
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                    <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">transportation the perfect pants</span>
            </div>
          </div>

          <div class="gap-6 mt-8 mx-4 md:flex">
            <!-- First Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video1">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/648b6bdb802c1efb403e5be5_ZOOM2-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                    2022 Toyota Hiace
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                    <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">the trail less taken</span>
            </div>
  
            <!-- Second Video Block -->
            <div class="md:w-1/2" @mouseover="playVideo($event)" @mouseleave="pauseVideo($event)">
              <div class="wrap-video">
                <video class="object-cover h-96 w-full bg-black" loop ref="video2">
                  <source
                    src="https://assets-global.website-files.com/62d57921074baa1ce7275405/640fe762f883d05b8f683c6d_HOKABODEGA-transcode.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span class="pt-4 grid grid-cols-6 gap-4">
                <span class="col-start-1 col-end-3 font-bold text-lg text-white uppercase font-mono">
                    2022 Rolls Royce Cullinan
                </span>
                <span class="col-end-7 col-span-2 text-sm text-slate-500 uppercase font-mono flex justify-end">
                    <span>#4000/Day</span>
                </span>
              </span>
              <span class="block text-slate-400 text-xs uppercase font-mono">the world at large</span>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  // Method to play video on hover
  const playVideo = (event: MouseEvent) => {
    const video = event.currentTarget.querySelector('video') as HTMLVideoElement
    if (video) video.play()
  }
  
  // Method to pause video on mouse leave
  const pauseVideo = (event: MouseEvent) => {
    const video = event.currentTarget.querySelector('video') as HTMLVideoElement
    if (video) video.pause()
  }
  </script>
  
  <style scoped>
  /* Add any specific styling here */
  </style>
  