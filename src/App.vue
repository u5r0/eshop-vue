<template>
  <div class="font-bodyFont">
    <Navbar />
    <Main />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import {
  Navbar,
  Main,
} from '@/components/shared/heading';
</script>
