<template>
  <div class="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
    <div class="w-full md:w-2/3 lg:w-1/2 h-full">
      <RouterLink to="/shop">
        <img class="h-full w-full object-cover" :src="saleImgOne" alt="" />
      </RouterLink>
    </div>
    <div class="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
      <div class="h-1/2 w-full">
        <RouterLink to="/shop">
          <img class="h-full w-full object-cover" :src="saleImgTwo" alt="" />
        </RouterLink>
      </div>
      <div class="h-1/2 w-full">
        <RouterLink to="/shop">
          <img class="h-full w-full object-cover" :src="saleImgThree" alt="" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "@/assets/images";
</script>
