<template>
  <div class="container mx-auto px-3 py-6">
    <div v-if="loading" class="text-center py-12 text-gray-500">در حال بارگذاری...</div>
    <div v-else-if="error" class="text-center py-12 text-red-500">{{ error }}</div>
    <div v-else class="grid grid-cols-12 gap-6">
      <div
        v-for="(image, idx) in images"
        :key="image.id"
        :class="getGridClass(idx)"
        class="relative overflow-hidden group"
      >
        <div class="w-full h-96 overflow-hidden relative">
          <!-- Animated black box on hover -->
          <div
            class="absolute top-0 left-0 h-full w-16 bg-black opacity-0 group-hover:opacity-80 group-hover:translate-x-0 -translate-x-full transition-all duration-300 z-10 flex items-center justify-center"
          >
            <span class="absolute text-white text-xs font-bold text-center whitespace-pre-line transform rotate-[270deg] w-96 block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{{ image.caption || 'عنوان عکس' }}</span>
          </div>
          <img
            :src="image.url"
            :alt="image.caption || 'Album photo'"
            class="w-full h-96 object-cover scale-110 transition-transform duration-300 group-hover:translate-x-4 cursor-pointer"
            loading="lazy"
            @click="openLightbox(idx)"
          />
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="showLightbox"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      @click="closeLightbox"
      @keydown.left.prevent="prevImage"
      @keydown.right.prevent="nextImage"
      tabindex="0"
    >
      <button
        class="absolute left-8 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center p-0 z-50 hover:bg-black/80 transition"
        :disabled="lightboxIndex === 0"
        :class="{ 'opacity-50 cursor-not-allowed': lightboxIndex === 0 }"
        @click.stop="lightboxIndex > 0 && prevImage()"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="flex flex-col items-center relative">
        <img
          :src="images[lightboxIndex].url"
          :alt="images[lightboxIndex].caption || 'Album photo'"
          class="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          loading="lazy"
          @click.stop
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-3 px-4 text-white text-lg font-bold text-center rounded-b-lg"
          style="backdrop-filter: blur(2px);"
        >
          {{ images[lightboxIndex].caption || 'عنوان عکس' }}
        </div>
      </div>
      <button
        class="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center p-0 z-50 hover:bg-black/80 transition"
        :disabled="lightboxIndex === images.length - 1"
        :class="{ 'opacity-50 cursor-not-allowed': lightboxIndex === images.length - 1 }"
        @click.stop="nextImage()"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        class="absolute top-8 right-8 text-white text-3xl font-bold"
        @click="closeLightbox"
        aria-label="Close lightbox"
      >×</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'

const images = ref([])
const loading = ref(true)
const error = ref(null)
const nuxtApp = useNuxtApp()

const showLightbox = ref(false)
const lightboxIndex = ref(0)

onMounted(async () => {
  try {
    loading.value = true
    const res = await nuxtApp.$api.get('/api/v1/albums')
    
    // Check if the response has the expected structure
    if (res && res.data && Array.isArray(res.data)) {
      images.value = res.data
    } else {
      throw new Error('Invalid response format')
    }
  } catch (err) {
    error.value = err.message || 'خطا در بارگذاری آلبوم‌ها'
  } finally {
    loading.value = false
  }
})

function handleKeydown(e) {
  if (e.key === 'Escape') {
    closeLightbox()
  }
}

function openLightbox(idx) {
  lightboxIndex.value = idx
  showLightbox.value = true
  setTimeout(() => {
    // Focus the modal for keyboard navigation
    const modal = document.querySelector('.fixed.inset-0')
    if (modal) modal.focus()
  }, 0)
  window.addEventListener('keydown', handleKeydown)
}

function closeLightbox() {
  showLightbox.value = false
  window.removeEventListener('keydown', handleKeydown)
}

function prevImage() {
  if (lightboxIndex.value > 0) {
    lightboxIndex.value--
  }
}

function nextImage() {
  console.log('Next button clicked')
  console.log('Current index:', lightboxIndex.value)
  console.log('Images length:', images.value.length)
  
  if (lightboxIndex.value < images.value.length - 1) {
    lightboxIndex.value++
    console.log('New index:', lightboxIndex.value)
  } else {
    console.log('Already at the last image')
  }
}

function getGridClass(idx) {
  // 3 columns per row
  const pos = idx % 3
  const row = Math.floor(idx / 3) % 3
  // Row 1: 25% | 50% | 25%
  if (row === 0) {
    if (pos === 0) return 'col-span-3'
    if (pos === 1) return 'col-span-6'
    if (pos === 2) return 'col-span-3'
  }
  // Row 2: 50% | 25% | 25%
  if (row === 1) {
    if (pos === 0) return 'col-span-6'
    if (pos === 1) return 'col-span-3'
    if (pos === 2) return 'col-span-3'
  }
  // Row 3: 25% | 25% | 50%
  if (row === 2) {
    if (pos === 0) return 'col-span-3'
    if (pos === 1) return 'col-span-3'
    if (pos === 2) return 'col-span-6'
  }
  return 'col-span-4'
}

// Clean up in case of unmount
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script> 