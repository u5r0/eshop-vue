import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const cartProducts = ref([])

  const getProductById = computed((productId) => 
    cartProducts.value.find((p) => p._id === productId)
  )

  function addToCart(product) {
    const productExists = getProductById.value(product._id)
    if (productExists) {
      productExists.quantity += product.quantity;
    } else {
      cartProducts.value.push(product);
    }
  }

  function increaseQuantity(product) {
    const productExists = getProductById.value(product._id)
    if (productExists) {
      productExists.quantity++
    }
  }

  function decreaseQuantity(product) {
    const productExists = getProductById.value(product._id)
    if (productExists.quantity === 1) {
      return
    } else {
      productExists.quantity--
    }
  }

  function deleteItem(productId) {
    cartProducts.value = cartProducts.value.filter((p) => p._id !== productId)
  }

  function resetCart() {
    cartProducts.value = []
  }

  return {
    cartProducts,
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