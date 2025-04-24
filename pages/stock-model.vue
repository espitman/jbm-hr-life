<template>
  <div class="container mx-auto p-6">
    <!-- Main Content -->
    <div class="p-8 md:p-12">
      <div class="flex flex-col items-center">
        <!-- Illustration -->
        <div class="w-48 h-48 mb-8 relative">
          <div class="absolute inset-0 bg-amber-100 rounded-full animate-pulse"></div>
          <div class="absolute inset-4 bg-amber-200 rounded-full animate-ping"></div>
          <div class="absolute inset-8 bg-amber-300 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>

        <!-- Text Content -->
        <div class="text-center space-y-6">
          <h2 class="text-2xl font-bold text-gray-800">به زودی</h2>
          <p class="text-gray-600 text-lg leading-relaxed max-w-2xl">
            ما در حال طراحی و توسعه مدل سهام داری جاباما هستیم. این بخش به زودی با جزئیات کامل در دسترس شما قرار خواهد گرفت.
          </p>
          
          <!-- Progress Bar -->
          <div class="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2.5 mt-8">
            <div class="bg-amber-500 h-2.5 rounded-full w-3/4 animate-pulse"></div>
          </div>

          <!-- Additional Info -->
          <div class="mt-8 p-4 bg-amber-50 rounded-lg">
            <p class="text-amber-800 text-sm">
              برای دریافت اطلاعات بیشتر، لطفاً با تیم منابع انسانی در ارتباط باشید.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style> 