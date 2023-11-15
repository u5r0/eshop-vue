<template>
  <a :href="`https://${href}/vshop`" target="_blank" rel="noreferrer">
    <li class="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
      <slot></slot>
    </li>
  </a>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  href: {
    type: String,
    required: true
  }
})

const href = ref(props.href)
watchEffect(() => href.value = props.href)
</script>
