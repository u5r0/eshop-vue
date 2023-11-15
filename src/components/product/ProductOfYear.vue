<template>
  <RouterLink to="/shop">
    <div class="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
      <img
        class="w-full h-full object-cover hidden md:inline-block"
        :src="productOfTheYear"
        alt=""
      />
      <div class="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
        <h1 class="text-3xl font-semibold text-primeColor">
          Product of The year
        </h1>
        <p class="text-base font-normal text-primeColor max-w-[600px] mr-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          cupiditate modi amet! Facilis, aperiam quaerat.
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { productOfTheYear } from "@/assets/images";
</script>
