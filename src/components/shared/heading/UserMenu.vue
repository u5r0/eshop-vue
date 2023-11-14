<template>
  <OnClickOutside @trigger="isOpen = false">
    <div 
      @click="isOpen = !isOpen"
      @mouseover="isOpen = true" 
      class="flex gap-1 p-1 mr-1 cursor-pointer"
    >
      <Fa6SolidUserLarge />
      <Fa6SolidCaretDown />
    </div>
    <Motion
      v-if="isOpen"
      @mouseleave="isOpen = false"
      :initial="{ y: 30, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.5 }"
      class="absolute top-10 -right-4 z-30 bg-primeColor text-[#767676] w-40 h-auto p-4"
    >
      <ul>
        <RouterLink 
          v-for="item in userOptions" 
          @click="isOpen = false"
          :key="item._id"
          :to="item.path"
        >
          <li class="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white cursor-pointer">
            {{ item.name }}
          </li>
        </RouterLink>
      </ul>
    </Motion>
  </OnClickOutside>
</template>

<script setup>
import { Motion } from 'motion/vue'
import { ref, watchEffect } from 'vue';
import { OnClickOutside } from '@vueuse/components'

import { Fa6SolidUserLarge, Fa6SolidCaretDown, } from '@/components/icons'
import { userOptions } from '@/db'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const isOpen = ref(props.isOpen)
watchEffect(() => isOpen.value = props.isOpen)
</script>