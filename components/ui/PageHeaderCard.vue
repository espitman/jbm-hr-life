<template>
  <div class="relative bg-amber-500 rounded-3xl p-16 mb-16">
    <h1 class="text-4xl md:text-5xl font-bold text-center">{{ title }}</h1>
    
    <!-- Website URL with smiley -->
    <div class="absolute bottom-6 left-0 right-0 text-center">
      <div class="inline-flex items-center">
        <span class="text-lg font-medium">{{ websiteUrl }}</span>
      </div>
    </div>
    
    <!-- Dotted line from card to circle -->
    <svg v-if="showDot" class="absolute -bottom-32 right-8 w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180,10 Q190,100 100,180" stroke="#000" stroke-width="2" stroke-dasharray="5,5" fill="none" />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  websiteUrl: {
    type: String,
    default: 'Jabama.com'
  },
  showDot: {
    type: Boolean,
    default: true
  }
})
</script> 