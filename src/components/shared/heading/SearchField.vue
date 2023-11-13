<template>
  <div class="place-self-center col-span-5 row-start-2 flex items-center gap-2 justify-between w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white px-6 rounded-xl">
    <input
      type="  text"
      :value="searchQuery"
      @input="searchQuery = $event.target.value"
      placeholder="Looking for a product?"
      class="flex-1 h-full outline-none placeholder:text-[#dadada] placeholder:text-[14px]"
    />
    <Fa6SolidMagnifyingGlass class="w-5 h-5" />
    <OnClickOutside 
      @trigger="searchQuery = ''"
      class="absolute top-24 z-30 -mx-6 my-2 h-96 bg-white rounded-md overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer"
    >
      <div v-if="searchQuery && filteredProducts.length">
        <div
          v-for="product in filteredProducts"
          @click="handleNavigation(product.productName)"
          class="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
          :key="product._id"
        >
          <img class="w-24" :src="product.img" alt="productImg" />
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-lg">
              {{ product.productName }}
            </p>
            <p class="text-xs">{{ product.desc }}</p>
            <p class="text-sm">
              Price:
              <span class="text-primeColor font-semibold">
                {{ product.price }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </OnClickOutside>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { OnClickOutside } from '@vueuse/components'

import { paginationItems } from '@/db'
import { Fa6SolidMagnifyingGlass } from '@/components/icons'

const router = useRouter()

const searchQuery = ref("")
const filteredProducts = ref([])

watch(searchQuery, (newQuery) => {
  filteredProducts.value = paginationItems.filter(item =>
    item.productName.toLowerCase()?.includes(newQuery.toLowerCase())
  );
})

const handleNavigation = (item) => {
  const formatedroute = item.toLowerCase().split(" ").join("-");
  
  router.push(`/product/${formatedroute}`);
  searchQuery.value = "";
}
</script>
