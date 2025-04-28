<template>
  <div class="grid grid-cols-1 gap-6">
    <div
      v-for="(image, idx) in images"
      :key="image.id"
      class="relative overflow-hidden group"
    >
      <div class="w-full h-64 overflow-hidden relative">
        <!-- Animated black box on hover -->
        <div
          class="absolute top-0 left-0 h-full w-16 bg-black opacity-0 group-hover:opacity-80 group-hover:translate-x-0 -translate-x-full transition-all duration-300 z-10 flex items-center justify-center"
        >
          <span class="absolute text-white text-xs font-bold text-center whitespace-pre-line transform rotate-[270deg] w-96 block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{{ image.caption || 'عنوان عکس' }}</span>
        </div>
        <img
          :src="image.url"
          :alt="image.caption || 'Album photo'"
          class="w-full h-64 object-cover scale-110 transition-transform duration-300 group-hover:translate-x-4 cursor-pointer"
          loading="lazy"
          @click="$emit('open-lightbox', idx)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true
  }
})

defineEmits(['open-lightbox'])
</script> 