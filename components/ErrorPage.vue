<template>
  <div class="min-h-[60vh] flex items-center justify-center p-4">
    <div class="text-center max-w-md w-full">
      <!-- Error Icon -->
      <div class="mb-6">
        <svg class="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>

      <!-- Error Message -->
      <h1 class="text-2xl font-bold text-gray-900 mb-4">{{ title || 'خطا در اتصال به سرور' }}</h1>
      <p class="text-gray-600 mb-6">{{ message || 'سرور در دسترس نیست. لطفا دوباره تلاش کنید.' }}</p>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          v-if="showRetry"
          @click="$emit('retry')"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          تلاش مجدد
        </button>
        <button
          v-if="showHome"
          @click="$emit('go-home')"
          class="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>

      <!-- Technical Details (Optional) -->
      <div v-if="showDetails && errorCode" class="mt-6 p-4 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-500">
          کد خطا: {{ errorCode }}
        </p>
        <p v-if="errorMessage" class="text-sm text-gray-500 mt-2">
          {{ errorMessage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'خطا در اتصال به سرور'
  },
  message: {
    type: String,
    default: 'سرور در دسترس نیست. لطفا دوباره تلاش کنید.'
  },
  errorCode: {
    type: String,
    default: ''
  },
  errorMessage: {
    type: String,
    default: ''
  },
  showDetails: {
    type: Boolean,
    default: false
  },
  showRetry: {
    type: Boolean,
    default: true
  },
  showHome: {
    type: Boolean,
    default: true
  }
})

defineEmits(['retry', 'go-home'])
</script> 