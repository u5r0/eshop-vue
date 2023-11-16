<template>
  <div class="w-full grid grid-cols-5 mb-4 border py-2">
    <div class="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
      <FluentEmojiCrossMark
        @click="deleteItem(props.item._id)"
        class="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
      />
      <img class="w-32 h-32" :src="props.item.img" alt="productImage" />
      <h1 class="font-titleFont font-semibold">{{ props.item.productName }}</h1>
    </div>
    <div class="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
      <div class="flex w-1/3 items-center text-lg font-semibold">
        ${{ props.item.price }}
      </div>

      <div class="w-1/3 flex items-center gap-6 text-lg">
        <span
          @click="decreaseQuantity({ _id: props.item._id })"
          class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
        >
          -
        </span>
        <p>{{ props.item.quantity }}</p>
        <span
          @click="increaseQuantity({ _id: props.item._id })"
          class="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
        >
          +
        </span>
      </div>
      
      <div class="w-1/3 flex items-center font-titleFont font-bold text-lg">
        <p>${{ props.item.quantity * props.item.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.js'
import { FluentEmojiCrossMark } from '@/components/icons'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const { deleteItem, increaseQuantity, decreaseQuantity } = cartStore
</script>
