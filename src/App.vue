<template>
  <div class="font-bodyFont">
    <NavbarHeader />
    <MainHeader />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import {
  NavbarHeader,
  MainHeader,
} from '@/components';
</script>
