<template>
  <div v-if="isVisible" class="fixed w-full md:w-[calc(100vw-16rem)] top-[92px] left-0 md:right-64 z-[9999] bg-amber-500 shadow-md transition-all duration-500">
    <div class="px-4 py-3 flex items-center justify-between">
      <div class="flex items-center">
        <!-- Page Icon -->
        <div class="mr-4">
          <PageIcon size="sm" />
        </div>
        
        <!-- Page Title -->
        <h2 class="text-xl font-bold text-white">{{ title }}</h2>
      </div>
      
      <!-- Page Name -->
      <div class="text-white/80">
        {{ pageName }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import PageIcon from './PageIcon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const route = useRoute()
const isVisible = ref(false)
const headerCardRef = ref(null)

// Get pageName from URL path
const pageName = computed(() => {
  const path = route.path
  // Remove leading slash and convert to English format
  return path.replace(/^\//, '').split('/').join('-') || ''
})

// Check if the header card is in viewport
const checkVisibility = () => {
  if (!headerCardRef.value) return
  
  const rect = headerCardRef.value.getBoundingClientRect()
  // Show sticky header when the header card is completely out of view
  isVisible.value = rect.bottom < 0
  
  // For debugging
  console.log('Header card bottom:', rect.bottom, 'Is visible:', isVisible.value)
}

// Set up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', checkVisibility)
  // Initial check
  setTimeout(checkVisibility, 100) // Small delay to ensure DOM is ready
})

// Clean up event listener
onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility)
})

// Expose the headerCardRef to be set by the parent component
defineExpose({
  headerCardRef
})
</script> 