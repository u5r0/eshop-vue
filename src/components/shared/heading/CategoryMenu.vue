<template>
  <div
    @click="isOpen = !isOpen"
    @mouseover="isOpen = true" 
    class="col-end-1 flex items-center gap-2 h-12 cursor-pointer text-primeColor"
  >
    <HeroiconsBars220Solid class="w-5 h-5" />
    <p class="hidden md:block text-[14px] font-normal">Shop by Category</p>
  </div>
  <Motion
    ref="isOpen"
    v-if="isOpen"
    @mouseleave="isOpen = false"
    :initial="{ y: 30, opacity: 0 }"
    :animate="{ y: 0, opacity: 1 }"
    :transition="{ duration: 0.5 }"
    class="absolute top-16 z-30 bg-primeColor w-fit text-[#767676] h-auto p-4 pb-6"
  >
    <ul>
      <li 
        v-for="item in categoryList"
        class="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </Motion>
</template>

<script setup>
import { Motion } from 'motion/vue';
import { ref, watchEffect } from 'vue';
import { onClickOutside } from '@vueuse/core';

import { HeroiconsBars220Solid } from '@/components/icons'
import { categoryList } from '@/db'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const isOpen = ref(props.isOpen)
watchEffect(() => isOpen.value = props.isOpen)

onClickOutside(isOpen, () => isOpen.value = false)
</script>