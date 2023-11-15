<template>
  <div class="w-full bg-[#F5F5F3] py-12">
    <div class="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
      <div class="col-span-2">
        <FooterListTitle title="More about vShop" />
        <div class="flex flex-col gap-6">
          <p class="text-base w-full xl:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
            ab ullam, numquam nesciunt in.
          </p>
          <ul class="flex items-center gap-2">
            <BrandIcon href="www.youtube.com">
              <Fa6BrandsYoutube />
            </BrandIcon>
            <BrandIcon href="github.com">
              <Fa6BrandsGithub />
            </BrandIcon>
            <BrandIcon href="www.facebook.com">
              <Fa6BrandsFacebook />
            </BrandIcon>
            <BrandIcon href="www.linkedin.com">
              <Fa6BrandsLinkedin />
            </BrandIcon>
          </ul>
        </div>
      </div>
      <div>
        <FooterListTitle title="Shop" />
        <ul 
          v-for="item in categoryList"
          class="flex flex-col gap-2"
          :key="item"
        >
          <li class="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
            {{ item }}
          </li>
        </ul>
      </div>
      <div>
        <FooterListTitle title="Your account" />
        <ul class="flex flex-col gap-2">
          <RouterLink
            v-for="option in accountOptions" 
            :key="option._id"
            :to="option.path"        
          >
            <li class="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              {{ option.name }}
            </li>
          </RouterLink>
        </ul>
      </div>
      <Subscribe />
    </div>
  </div>
  <Copyright />
</template>

<script setup>
import {
  Fa6BrandsFacebook,
  Fa6BrandsGithub,
  Fa6BrandsLinkedin,
  Fa6BrandsYoutube
} from '@/components/icons'
import Subscribe from "./Subscribe.vue"
import BrandIcon from './BrandIcon.vue';
import Copyright from './Copyright.vue';
import FooterListTitle from './FooterListTitle.vue';
import { categoryList, accountOptions } from '@/db'
</script>
