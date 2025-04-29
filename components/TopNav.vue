<template>
  <div class="fixed top-0 right-0 md:right-64 left-0 z-50 bg-white shadow-md h-[92px]">
    <div class="flex flex-row items-center p-4 h-full rtl-container">
      <!-- Logo (right side in RTL) -->
      <NuxtLink to="/" class="flex items-center">
        <img src="/images/jabama.svg" alt="Jabama Logo" class="h-[32px]">
      </NuxtLink>

      <!-- Navigation items (left side in RTL) -->
      <div class="hidden md:flex items-center space-x-reverse space-x-8 mr-auto">
        <NuxtLink 
          to="/" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/', 'text-gray-600 hover:text-gray-900': $route.path !== '/' }"
        >
          صفحه اصلی
        </NuxtLink>
        <NuxtLink 
          to="/album" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/album', 'text-gray-600 hover:text-gray-900': $route.path !== '/album' }"
        >
          آلبوم
        </NuxtLink>
        <button 
          @click="openModal"
          class="text-gray-600 hover:text-gray-900"
        >
          ارتباط با جاباما
        </button>
      </div>
    </div>
  </div>
  <!-- Add a spacer to prevent content from being hidden under the fixed navbar -->
  <div class="h-[92px]"></div>

  <!-- Contact Modal -->
  <ContactModal 
    :is-open="isContactModalOpen" 
    @close="closeModal" 
  />
</template>

<script setup>
import { ref } from 'vue'
import ContactModal from '~/components/ui/ContactModal.vue'

const isContactModalOpen = ref(false)

const openModal = () => {
  console.log('Opening modal')
  isContactModalOpen.value = true
  console.log('Modal state:', isContactModalOpen.value)
}

const closeModal = () => {
  console.log('Closing modal')
  isContactModalOpen.value = false
  console.log('Modal state:', isContactModalOpen.value)
}
</script> 