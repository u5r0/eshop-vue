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
          <HeroiconsSolidMenuAlt2 
            @click=" sidenavIsOpen = !sidenavIsOpen" 
            class="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
          />

          <div
            v-if="sidenavIsOpen"
            class="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50"
          >
            <Motion
              :initial="{ x: -300, opacity: 0 }"
              :animate="{ x: 0, opacity: 1 }"
              :transition="{ duration: 0.5 }"
            >
              <div class="relative w-[80%] bg-primeColor p-6">
                <div 
                  ref="sidenavIsOpen" 
                  class="overflow-scroll h-screen"
                >
                  <img class="w-28 mb-6" :src="logoLight" alt="logoLightImg">
                  <ul class="text-gray-200 flex flex-col gap-2">
                    <RouterLink
                      v-for="{ _id, title, link } in navBarList"
                      class="items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      @click="closeSideNav"
                      :key="_id"
                      :to="link"
                    >
                      <li>{{ title }}</li>
                    </RouterLink>
                  </ul>
                  <div class="mt-4">
                    <h1
                      @click="category = !category"
                      class="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Category
                      <span class="mr-1 text-lg">{{category ? "-" : "+"}}</span>
                    </h1>
                    <Motion
                      :initial="{ y: 15, opacity: 0 }"
                      :animate="{ y: 0, opacity: 1 }"
                      :transition="{ duration: 0.4 }"
                    >
                      <ul v-if="category" class="text-sm flex flex-col gap-1">
                        <li v-for="item in categoryList"
                          class="headerSedenavLi"
                          :key="item"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </Motion>
                  </div>
                  <div class="mt-4">
                    <h1
                      @click="brand = !brand"
                      class="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                    >
                      Shop by Brand
                      <span class="mr-1 text-lg">{{brand ? "-" : "+"}}</span>
                    </h1>
                    <Motion
                      :initial="{ y: 15, opacity: 0 }"
                      :animate="{ y: 0, opacity: 1 }"
                      :transition="{ duration: 0.4 }"
                    >
                      <ul v-if="brand" class="text-sm flex flex-col gap-1">
                        <li v-for="item in categoryList"
                          class="headerSedenavLi"
                          :key="item"
                        >
                          {{ item }}
                        </li>
                      </ul>
                    </Motion>
                  </div>
                </div>
                <span
                  @click="closeSideNav"
                  class="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                >
                  <MdiClose />
                </span>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Motion } from 'motion/vue'
import { onClickOutside, useEventListener } from '@vueuse/core';

import { HeroiconsSolidMenuAlt2, MdiClose } from '@/components/icons';
import { logo, logoLight } from "@/assets/images";
import { navBarList, categoryList } from "@/db"

const navbar = ref(true)
const sidenavIsOpen = ref(false)
const category = ref(false)
const brand = ref(false)

const closeSideNav = () => sidenavIsOpen.value = false
onClickOutside(sidenavIsOpen, closeSideNav)

useEventListener(window, 'resize', () => {
  closeSideNav()
  return window.innerWidth < 667 ? navbar.value = false : navbar.value = true
});

useEventListener(window, "orientationchange", closeSideNav)
</script>
