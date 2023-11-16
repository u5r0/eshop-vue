<template>
  <div class="max-w-container mx-auto px-4">
    <div v-if="cart.length > 0" class="pb-20">
      <div class="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
        <h2 class="col-span-2">Product</h2>
        <h2>Price</h2>
        <h2>Quantity</h2>
        <h2>Sub Total</h2>
      </div>
      <div class="mt-5">
        <div v-for="item in cart" :key="item._id">
          <CartItem :item="item" />
        </div>
      </div>

      <button
        @click="resetCart()"
        class="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
      >
        Reset cart
      </button>

      <div class="max-w-7xl gap-4 flex justify-end mt-4">
        <div class="w-96 flex flex-col gap-4">
          <h1 class="text-2xl font-semibold text-right">Cart totals</h1>
          <div>
            <p class="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Subtotal
              <span class="font-semibold tracking-wide font-titleFont">
                ${{ totalAmt }}
              </span>
            </p>
            <p class="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Shipping Charge
              <span class="font-semibold tracking-wide font-titleFont">
                ${{ shippingCharge }}
              </span>
            </p>
            <p class="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
              Total
              <span class="font-bold tracking-wide text-lg font-titleFont">
                ${{ totalAmt + shippingCharge }}
              </span>
            </p>
          </div>
          <div class="flex justify-end">
            <RouterLink to="/payment">
              <button class="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                Proceed to Checkout
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <Motion
      v-if="cart.length === 0"
      :initial="{ y: 30, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.4 }"
      class="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
    >
      <div>
        <img
          :src="emptyCart"
          alt="emptyCartImage"
          class="w-80 rounded-lg p-4 mx-auto"
        />
      </div>
      <div class="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
        <h1 class="font-titleFont text-xl font-bold uppercase">
          Your Cart feels lonely.
        </h1>
        <RouterLink to="/shop">
          <button class="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
            Continue Shopping
          </button>
        </RouterLink>
      </div>
    </Motion>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import { Motion } from 'motion/vue';

import CartItem from '@/components/CartItem.vue'
import { useCartStore } from '@/stores/cart.js'
import { emptyCart } from '@/assets/images'

const cartStore = useCartStore()
const { cart } = storeToRefs(cartStore)
const { resetCart } = cartStore

const totalAmt = ref(0)
const shippingCharge = ref(0)

watchEffect(() => {
  let totalPrice = 0
  cart.value.map(item => totalPrice += item.price * item.quantity)
  totalAmt.value = totalPrice
})

watchEffect(() => {
  if (totalAmt.value <= 200) shippingCharge.value = 30
  else if (totalAmt.value <= 400) shippingCharge.value = 25
  else if (totalAmt.value > 400) shippingCharge.value = 20
})
</script>
