<template>
  <div class="container mx-auto px-3 py-6">
    <div class="grid grid-cols-12 gap-6">
      <div
        v-for="(image, idx) in images"
        :key="idx"
        :class="getGridClass(idx)"
        class="relative overflow-hidden group"
      >
        <div class="w-full h-96 overflow-hidden relative">
          <!-- Animated black box on hover -->
          <div
            class="absolute top-0 left-0 h-full w-16 bg-black opacity-0 group-hover:opacity-80 group-hover:translate-x-0 -translate-x-full transition-all duration-300 z-10 flex items-center justify-center"
          >
            <span class="absolute text-white text-xs font-bold text-center whitespace-pre-line transform rotate-[270deg] w-96 block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{{ image.title || 'عنوان عکس' }}</span>
          </div>
          <img
            :src="image.url"
            :alt="image.title || 'Album photo'"
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
          :alt="images[lightboxIndex].title || 'Album photo'"
          class="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          loading="lazy"
          @click.stop
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-3 px-4 text-white text-lg font-bold text-center rounded-b-lg"
          style="backdrop-filter: blur(2px);"
        >
          {{ images[lightboxIndex].title || 'عنوان عکس' }}
        </div>
      </div>
      <button
        class="absolute right-8 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full w-12 h-12 flex items-center justify-center p-0 z-50 hover:bg-black/80 transition"
        :disabled="lightboxIndex === images.length - 1"
        :class="{ 'opacity-50 cursor-not-allowed': lightboxIndex === images.length - 1 }"
        @click.stop="lightboxIndex < images.length - 1 && nextImage()"
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

const images = [
  { url: 'https://picsum.photos/id/0/5000/3333', title: 'عنوان عکس 1' },
  { url: 'https://picsum.photos/id/1/5000/3333', title: 'عنوان عکس 2' },
  { url: 'https://picsum.photos/id/2/5000/3333', title: 'عنوان عکس 3' },
  { url: 'https://picsum.photos/id/3/5000/3333', title: 'عنوان عکس 4' },
  { url: 'https://picsum.photos/id/4/5000/3333', title: 'عنوان عکس 5' },
  { url: 'https://picsum.photos/id/5/5000/3334', title: 'عنوان عکس 6' },
  { url: 'https://picsum.photos/id/6/5000/3333', title: 'عنوان عکس 7' },
  { url: 'https://picsum.photos/id/7/4728/3168', title: 'عنوان عکس 8' },
  { url: 'https://picsum.photos/id/8/5000/3333', title: 'عنوان عکس 9' },
  { url: 'https://picsum.photos/id/9/5000/3269', title: 'عنوان عکس 10' },
  { url: 'https://picsum.photos/id/10/2500/1667', title: 'عنوان عکس 11' },
  { url: 'https://picsum.photos/id/11/2500/1667', title: 'عنوان عکس 12' },
  { url: 'https://picsum.photos/id/12/2500/1667', title: 'عنوان عکس 13' },
  { url: 'https://picsum.photos/id/13/2500/1667', title: 'عنوان عکس 14' },
  { url: 'https://picsum.photos/id/14/2500/1667', title: 'عنوان عکس 15' },
  { url: 'https://picsum.photos/id/15/2500/1667', title: 'عنوان عکس 16' },
  { url: 'https://picsum.photos/id/16/2500/1667', title: 'عنوان عکس 17' },
  { url: 'https://picsum.photos/id/17/2500/1667', title: 'عنوان عکس 18' },
  { url: 'https://picsum.photos/id/18/2500/1667', title: 'عنوان عکس 19' },
  { url: 'https://picsum.photos/id/19/2500/1667', title: 'عنوان عکس 20' },
  { url: 'https://picsum.photos/id/20/3670/2462', title: 'عنوان عکس 21' },
  { url: 'https://picsum.photos/id/21/3008/2008', title: 'عنوان عکس 22' },
  { url: 'https://picsum.photos/id/22/4434/3729', title: 'عنوان عکس 23' },
  { url: 'https://picsum.photos/id/23/3887/4899', title: 'عنوان عکس 24' },
  { url: 'https://picsum.photos/id/24/4855/1803', title: 'عنوان عکس 25' },
  { url: 'https://picsum.photos/id/25/5000/3333', title: 'عنوان عکس 26' },
  { url: 'https://picsum.photos/id/26/4209/2769', title: 'عنوان عکس 27' },
  { url: 'https://picsum.photos/id/27/3264/1836', title: 'عنوان عکس 28' },
  { url: 'https://picsum.photos/id/28/4928/3264', title: 'عنوان عکس 29' },
  { url: 'https://picsum.photos/id/29/4000/2670', title: 'عنوان عکس 30' }
]

const showLightbox = ref(false)
const lightboxIndex = ref(0)

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
  if (lightboxIndex.value < images.length - 1) {
    lightboxIndex.value++
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