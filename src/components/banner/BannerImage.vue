<template>
  <SplideSlide>
    <RouterLink to="/offer">
      <div>
        <img :src="src" alt="BannerImg">
      </div>
    </RouterLink>
  </SplideSlide>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { SplideSlide } from '@splidejs/vue-splide';


const props = defineProps({
  src: {
    type: String,
    required: true
  },
})

const src = ref(props.src)
watchEffect(() => src.value = props.src)
</script>
