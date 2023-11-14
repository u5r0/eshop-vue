<template>
  <div class="font-bodyFont">
    <Navbar />
    <MainHeader />
    <NavWidgets />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import { Navbar, MainHeader } from '@/components/shared/heading';
import NavWidgets from '@/components/shared/NavWidgets.vue';
</script>
