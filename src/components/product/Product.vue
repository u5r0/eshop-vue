<template>
    <div class="w-full relative group">
      <div class="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <img class="w-full h-full" :src="product.img" />
        </div>
        <div class="absolute top-6 left-8">
          <div 
            v-if="product.badge"
            className="bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer"
          >
            New
          </div>
        </div>
        <div class="w-full h-28 absolute bg-slate-100 -bottom-[130px] group-hover:bottom-0 duration-700">
          <ul class="w-full h-full flex flex-col items-end justify-center font-titleFont px-2 border-l border-r">
            <li
              @click="addToCart({ _id: props.id, quantity: 1 })"
              class="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer py-4 duration-300 w-full"
            >
              Add to Cart
              <span>
                <Fa6SolidCartShopping />
              </span>
            </li>
            <li
              @click="() => viewProduct(product.productName)"
              class="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer py-4 duration-300 w-full"
            >
              View Details
              <span class="text-lg">
                <IcRoundLabelImportant />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div class="flex items-center justify-between font-titleFont">
          <h2 class="text-lg text-primeColor font-bold">
            {{ product.productName }}
          </h2>
          <p class="text-[#767676] text-[14px]">${{ product.price }}</p>
        </div>
        <div>
          <p class="text-[#767676] text-[14px]">{{ product.color }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia'

import { useCartStore } from '@/stores/cart.js'
import { useProductsStore } from '@/stores/products.js'
import { Fa6SolidCartShopping, IcRoundLabelImportant } from '@/components/icons'
import { viewProduct } from '@/utils'

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const productsStore = useProductsStore()
const { getProductById } = storeToRefs(productsStore)
const product = computed(() => getProductById.value(props.id))

const cartStore = useCartStore()
const { addToCart } = cartStore
</script>
