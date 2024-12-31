<!-- <template>
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 data-aos="fade-up" class="text-center text-xl font-semibold text-gray-900">CoMiles in the press</h2>
    <h2 data-aos="fade-up" class="text-center text-lg/8 font- text-gray-900">Read all about CoMiles and what we have been doing.</h2>
    <div data-aos="fade-up" class="mx-auto mt-10 grid max-w-lg divide-x-4 divide-gray-500 grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48">
      <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48">
      <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48">
    </div>
  </div>
</div>

</template> -->

<!-- components/PressSection.vue -->
<template>
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 data-aos="fade-up" class="text-3xl lg:text-4xl font-bold text-center mb-2">CoMiles in the press</h2>
      <p data-aos="fade-up" class="text-gray-600 text-center mb-12">
        Read all about CoMiles and what we have been doing.
      </p>
      
      <div data-aos="fade-up" class="flex flex-wrap justify-center divide-x divide-solid divide-gray-200 items-center gap-12 md:gap-20">
        <!-- Forbes -->
        <img 
          src="@/assets/icons/forbes-logo.svg" 
          alt="Forbes" 
          class="h-8 md:h-10 object-contain"
        />
        
        <!-- Techpoint -->
        <img 
          src="@/assets/icons/techpoint-logo.svg" 
          alt="Techpoint Africa" 
          class="h-8 md:h-10 object-contain pl-20"
        />
        
        <!-- WEF -->
        <img 
          src="@/assets/icons/wef-logo.svg" 
          alt="World Economic Forum" 
          class="h-12 md:h-14 object-contain pl-20"
        />
        
        <!-- TechCrunch -->
        <img 
          src="@/assets/icons/tc-logo.svg" 
          alt="TechCrunch" 
          class="h-8 md:h-10 object-contain pl-20"
        />
        
        <!-- GOV.UK -->
        <img 
          src="@/assets/icons/govuk.svg" 
          alt="GOV.UK" 
          class="h-10 md:h-12 object-contain pl-20"
        />
      </div>
    </div>
  </section>
</template>