import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

import { productList } from '@/db'

export const useProductsStore = defineStore('products', () => {
  const products = ref([...productList])

  const getProductById = computed(() => {
    return (productId) => products.value.find((p) => p._id === productId)
  })

  return {
    products,
    getProductById,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsStore, import.meta.hot))
}