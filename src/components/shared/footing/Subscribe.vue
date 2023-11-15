<template>
    <div class="w-full">
      <p class="text-center mb-4">
        A at pellentesque et mattis porta enim elementum.
      </p>
      <Motion
        v-if="subscription"
        :initial="{ x: 20, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :transition="{ duration: 0.5 }"
        class="w-full text-center text-base font-titleFont font-semibold text-green-600"
      >
        <p>Subscribed Successfully !</p>
      </Motion>
      <div class="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
        <div class="flex flex-col w-full">
          <input
            type="text"
            :value="email"
            @input="email = $event.target.value"
            placeholder="Insert your email ...*"
            class="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
          />
            <p 
              v-if="errMsg"
              class="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2"
            >
              {{ errMsg }}
            </p>
        </div>
        <button
          @click="handleSubscription"
          class="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
        >
          Subscribe
        </button>
      </div>
      <img
        class="w-[80%] lg:w-[60%] mx-auto"
        :class="subscription ? 'mt-2' : 'mt-6'"
        :src="paymentCard"
      />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Motion } from 'motion/vue';

import { paymentCard } from "@/assets/images";

const errMsg = ref('')
const email = ref('')
const subscription = ref(false)

const handleSubscription = () => {
  if (email.value === "") {
    errMsg.value = "Please provide an Email !";
  } else if (!validateEmail(email.value)) {
    errMsg.value = "Please give a valid Email!";
  } else {
    errMsg.value = ''
    email.value = ''
    subscription.value = true
  }
};

const validateEmail = (email) => {
  return String(email)
    .toLocaleLowerCase()
    .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
};
</script>