import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

import { useProductsStore } from './products'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])
  
  const getProductInCart = computed(() => {
    return (productId) => cart.value.find((p) => p._id === productId)
  })

  function addToCart(productQuantity) {
    const productInCart = getProductInCart.value(productQuantity._id)
    if (productInCart) {
      productInCart.quantity++;
    } else {
      const productsStore = useProductsStore()
      const product = productsStore.getProductById(productQuantity._id)
      cart.value.push({...productQuantity, ...product});
    }
  }

  function increaseQuantity(product) {
    const productInCart = getProductInCart.value(product._id)
    if (productInCart) {
      productInCart.quantity++
    }
  }

  function decreaseQuantity(product) {
    const productInCart = getProductInCart.value(product._id)
    if (productInCart.quantity === 1) {
      return
    } else {
      productInCart.quantity--
    }
  }

  function deleteItem(productId) {
    cart.value = cart.value.filter((p) => p._id !== productId)
  }

  function resetCart() {
    cart.value = []
  }

  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    resetCart,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}