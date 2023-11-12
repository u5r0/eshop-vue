<template>
  <div class="relative w-full h-fit bg-[#F5F5F3]">
    <div class="grid grid-cols-3 grid-rows-2 lg:grid-rows-1 justify-around items-center w-full px-10 py-2 max-w-container mx-auto">
      
      <div
        @click="categoryMenu = !categoryMenu"
        class="flex col-start-1 h-14 cursor-pointer items-center gap-2 text-primeColor"
      >
        <HeroiconsBars220Solid class="w-5 h-5" />
        <p class="text-[14px] font-normal">Shop by Category</p>
      </div>
      <Motion
        v-if="categoryMenu"
        :initial="{ y: 30, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :transition="{ duration: 0.5 }"
        class="absolute top-16 z-20 bg-primeColor w-fit text-[#767676] h-auto p-4 pb-6"
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
      
      <div class="place-self-center  col-span-3 row-start-2 w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
        <input
          type="text"
          :value="searchQuery"
          @input="searchQuery = $event.target.value"
          placeholder="Looking for a product?"
          class="flex-1 h-full outline-none placeholder:text-[#dadada] placeholder:text-[14px]"
        />
        <Fa6SolidMagnifyingGlass class="w-5 h-5" />
        <div
          v-if="searchQuery && filteredProducts.length"
          class="w-auto mx-auto h-96 bg-white absolute top-32 z-30 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer"
        >
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
      </div>

      <div class="relative flex col-end-5 gap-4 items-center pr-6">
        <div 
          @click="profileMenu = !profileMenu" 
          class="flex gap-1 cursor-pointer"
        >
          <Fa6SolidUserLarge />
          <Fa6SolidCaretDown />
        </div>
        <Motion
          v-if="profileMenu"
          :initial="{ y: 30, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.5 }"
          class="absolute top-9 z-20 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
        >
          <ul>
            <RouterLink 
              v-for="item in profileOptions" 
              @click="profileMenu = false"
              class="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
              :key="item._id"
              :to="item.path"
            >
              <li>{{ item.name }}</li>
            </RouterLink>
          </ul>
        </Motion>
        
        <RouterLink to="/cart">
          <div class="relative">
            <Fa6SolidCartShopping />
            <span class="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
              {{ numberOfCartItems }}
            </span>
          </div>
        </RouterLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { Motion } from 'motion/vue'
import { storeToRefs } from 'pinia'

import { 
  categoryList, 
  paginationItems, 
  profileOptions 
} from '@/db'
import {
  HeroiconsBars220Solid,
  Fa6SolidUserLarge,
  Fa6SolidCaretDown,
  Fa6SolidCartShopping,
  Fa6SolidMagnifyingGlass,
} from '@/components/icons'
import { useCartStore } from '@/stores/cart.js'

const router = useRouter()

const cartStore = useCartStore()
const { cartProducts } = storeToRefs(cartStore)

const categoryMenu = ref(false)
const profileMenu = ref(false)
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
  searchQuery.value = true;
}
const numberOfCartItems = computed(() => {
  return cartProducts.length > 0 ? cartProducts.length : 0
})
</script>