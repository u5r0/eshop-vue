<template>
  <div class="w-full bg-white">
    <Splide :options="splideOptions">
      <BannerImage :src="bannerImgOne" />
      <BannerImage :src="bannerImgTwo" />
      <BannerImage :src="bannerImgThree" />
    </Splide>
  </div>
  <Policy />
</template>
<script setup>
import { ref } from 'vue';
import { Splide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import BannerImage from "./BannerImage.vue";
import Policy from "./Policy.vue";

const splideOptions = ref({
  type: 'loop',
  arrows: false,
  autoplay: true,
  interval: 3000,
  speed: 1500,
})
</script>
