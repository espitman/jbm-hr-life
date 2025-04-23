<template>
  <div>
    <div class="relative">
      <img :src="image.url" :alt="image.title" class="w-full object-cover rounded-lg transition-opacity duration-300" :style="{ height: image.height || 'auto' }">
      <div class="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: Object,
    required: true
  }
});
</script> 