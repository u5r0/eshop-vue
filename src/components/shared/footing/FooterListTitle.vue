<template>
  <h3 className="text-xl font-bodyFont font-semibold mb-6">
    {{ title }}
  </h3>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
