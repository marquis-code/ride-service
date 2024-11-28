 <template>
      <main>

        <div class="flex justify-center items-center">
        <div class="2xl:mx-auto lg:max-w-7xl mx-auto 2xl:container px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <h1 class="text-center text-xl lg:text-base font-medium py-6">Most popular vehicle hire deals</h1>
          <div class="flex flex-col jusitfy-center items-center">
            <div class="flex flex-col justify-center items-center ">
              <!-- <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1> -->
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div class="relative group flex justify-center items-center h-full w-full">
                <img class="object-center object-cover h-full w-full rounded-lg" src="@/assets/img/car1.jpg" alt="girl-image" />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">Toyota Camry 2021</button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>

              <div class="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full rounded-lg" src="@/assets/img/car2.jpg" alt="shoe-image" />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">Toyota Coaster 2021</button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
                <div class="relative group flex justify-center items-center h-full w-full">
                  <img class="object-center object-cover h-full w-full rounded-lg" src="@/assets/img/car3.jpg" alt="watch-image" />
                  <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">2022 Lexus</button>
                  <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                </div>
              </div>

              <div class="relative group justify-center items-center h-full w-full hidden lg:flex">
                <img class="object-center object-cover h-full w-full rounded-lg" src="@/assets/img/car4.jpg" alt="girl-image" />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">2022 Range Rover Velar</button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
              <div class="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <img class="object-center object-cover h-full w-full rounded-lg hidden md:block" src="@/assets/img/car5.jpg" alt="girl-image" />
                <img class="object-center object-cover h-full w-full rounded-lg md:hidden" src="@/assets/img/car6.jpg" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">2022 Rolls Royce Cullian</button>
                <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
              </div>
            </div>
            <div class="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <img class="object-center object-cover h-full w-full rounded-lg hidden md:block" src="@/assets/img/car7.jpg" alt="girl-image" />
              <img class="object-center object-cover h-full w-full rounded-lg sm:hidden" src="@/assets/img/car8.jpg" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
              <button class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-44 text-xs bg-white">2022 Toyota Hiace</button>
              <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
      </main>
   </template>