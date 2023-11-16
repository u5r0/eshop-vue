<template>
  <div class="w-full pb-16 relative">
    <div className="text-3xl font-semibold pb-6">New Arrivals</div>
    <Splide :options="splideOptions">
      <SliderProduct :id="1032" />
      <SliderProduct :id="1033" />
      <SliderProduct :id="1034" />
      <SliderProduct :id="1035" />
      <SliderProduct :id="1036" />
      <SliderProduct :id="1037" />
    </Splide>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import SliderProduct from './SliderProduct.vue';

import { Splide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const splideOptions = ref({
  type: 'loop',
  arrows: true,
  perPage: 4,
  perMove: 1,
  drag: 'free',
  snap: true,
  pagination: false,
  breakpoints: {
    1024: {
      perPage: 3,
    },
		720: {
			perPage: 2,
		},
    480: {
			perPage: 1,
		},
  },
})
</script>
