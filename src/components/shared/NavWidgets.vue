<template>
  <div class="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2">
    <RouterLink to="/profile">
      <div class="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
        <div class="flex justify-center items-center">
          <MdiAccountBox class="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <MdiAccountBox class="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p class="text-xs font-semibold font-titleFont">Profile</p>
      </div>
    </RouterLink>
    <RouterLink to="/cart">
      <div class="bg-white w-16 h-[70px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
        <div class="flex justify-center items-center">
          <ShoppingCartRounded class="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
          <ShoppingCartRounded class="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
        </div>
        <p class="text-xs font-semibold font-titleFont">Buy Now</p>
          <p 
            v-if="cart.length > 0"
            class="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold"
          >
            {{ cart.length }}
          </p>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { MdiAccountBox, ShoppingCartRounded } from '@/components/icons'
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
</script>
