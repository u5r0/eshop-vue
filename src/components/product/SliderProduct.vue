<template>
  <SplideSlide>
    <div class="px-2">
      <Product :id="props.id" />
    </div>
  </SplideSlide>
</template>

<script setup>
import { SplideSlide } from '@splidejs/vue-splide';
import Product from './Product.vue';

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})
</script>
