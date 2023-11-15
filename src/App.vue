<template>
  <div class="font-bodyFont">
    <Navbar />
    <Header />
    <NavWidgets />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import { Navbar, Header } from '@/components/shared/heading';
import NavWidgets from '@/components/shared/NavWidgets.vue';
import Footer from '@/components/shared/footing/Footer.vue';
</script>
