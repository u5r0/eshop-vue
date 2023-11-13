<template>
  <HeroiconsSolidMenuAlt2 
    @click="isOpen = !isOpen" 
    class="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
  />

  <div
    v-if="isOpen"
    class="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50"
  >
    <Motion
      :initial="{ x: -300, opacity: 0 }"
      :animate="{ x: 0, opacity: 1 }"
      :transition="{ duration: 0.5 }"
    >
      <div class="relative w-[80%] bg-primeColor p-6">
        <div 
          ref="isOpen" 
          class="overflow-auto h-screen"
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
</template>

<script setup>
import { Motion } from 'motion/vue'
import { ref, watchEffect } from 'vue';
import { onClickOutside, useEventListener } from '@vueuse/core';

import { HeroiconsSolidMenuAlt2, MdiClose } from '@/components/icons';
import { categoryList, navBarList } from "@/db"
import { logoLight } from "@/assets/images";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const category = ref(false)
const brand = ref(false)

const isOpen = ref(props.isOpen)
watchEffect(() => isOpen.value = props.isOpen);

const closeSideNav = () => isOpen.value = false

onClickOutside(isOpen, closeSideNav)
useEventListener(window, "resize", closeSideNav)
useEventListener(window, "orientationchange", closeSideNav)
</script>
