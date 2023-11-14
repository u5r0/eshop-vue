<template>
  <div class="relative w-full h-fit bg-[#F5F5F3]">
    <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 justify-around items-center w-full px-10 py-2 max-w-container mx-auto">
      <CategoryMenu :isOpen="categoryMenuIsOpen" />
      <SearchField />
      <div class="relative col-end-5 flex items-center pr-4">
        <UserMenu :isOpen="userMenuIsOpen" />
        <RouterLink 
          class="pl-2"
          to="/cart"
        >
          <div class="relative">
            <Fa6SolidCartShopping />
            <span class="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
              {{ numberOfCartItems }}
            </span>
          </div>
        </RouterLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/cart.js'
import { Fa6SolidCartShopping, } from '@/components/icons'

import CategoryMenu from './CategoryMenu.vue';
import SearchField from './SearchField.vue';
import UserMenu from './UserMenu.vue';

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)

const userMenuIsOpen = ref(false)
const categoryMenuIsOpen = ref(false)

const numberOfCartItems = computed(() => {
  return cart.length > 0 ? cart.length : 0
})
</script>