<script setup>
import Banner from '@/components/banner/Banner.vue';
import Sale from '@/components/product/Sale.vue';
import NewArrivals from '@/components/product/NewArrivals.vue';
import ProductOfYear from '@/components/product/ProductOfYear.vue';
</script>

<template>
  <main>
    <Banner />
    <div className="max-w-container mx-auto px-8">
      <Sale />
      <NewArrivals />
      <!-- <BestSellers /> -->
      <ProductOfYear />
      <!-- <SpecialOffers /> -->
    </div>
  </main>
</template>
