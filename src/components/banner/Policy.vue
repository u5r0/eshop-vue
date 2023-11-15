<template>
  <div class="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
    <div class="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">

      <div class="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span class="font-bold font-titleFont w-6 text-center">2</span>
        <p class="text-lightText text-base">Two years warranty</p>
      </div>

      <div class="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span class="text-xl text-center w-6 ml-1">
          <LocalShippingRounded />
        </span>
        <p class="text-lightText text-base">Free shipping</p>
      </div>

      <div class="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
        <span class="text-2xl text-center w-6">
          <CiRedo />
        </span>
        <p class="text-lightText text-base">Return policy in 30 days</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { LocalShippingRounded, CiRedo } from '@/components/icons'
</script>
