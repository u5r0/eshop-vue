<template>
  <div class="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
    <nav class="h-full px-4 max-w-container mx-auto relative">
      <div class="flex items-center justify-between h-full">
        <RouterLink to="/">
          <div>
            <img class="w-20 object-cover" :src="logo" alt="LogoImg">
          </div>
        </RouterLink>
        <div>
          <Motion 
            v-if="navbar"
            :initial="{ y: 30, opacity: 0 }"
            :animate="{ y: 0, opacity: 1 }"
            :transition="{ duration: 0.5 }"
          >
            <ul class="hidden md:flex items-center w-auto z-50 p-0 gap-2">
              <RouterLink 
                v-for="{ _id, title, link } in navBarList"
                class="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                :key="_id"
                :to="link"
              >
                <li>{{ title }}</li>
              </RouterLink>
            </ul>
          </Motion>
          <SideNav :isOpen="sidenavIsOpen" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Motion } from 'motion/vue'
import { useEventListener } from '@vueuse/core';

import SideNav from './SideNav.vue';

import { logo } from "@/assets/images";
import { navBarList } from "@/db"

const navbar = ref(true)
const sidenavIsOpen = ref(false)

useEventListener(window, 'resize', () => {
  return window.innerWidth < 667 ? navbar.value = false : navbar.value = true
});
</script>
