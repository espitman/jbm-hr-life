<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]" @click="emit('close')">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4" @click.stop>
      <div class="space-y-6">
        <!-- Welcome Message -->
        <div class="text-center space-y-2">
          <h3 class="text-xl font-bold text-gray-900">همکار عزیزم</h3>
          <p class="text-gray-600 leading-relaxed">
            سلام<br>
            خوشحالیم که در این روزهای قشنگ زندگیت کنارت هستیم.<br>
            برای دریافت هدیه ات میتونی درخواستت رو ثبت کنی.
          </p>
        </div>

        <!-- Benefit Type Selection -->
        <div class="space-y-4">
          <h4 class="text-lg font-medium text-gray-900">میخوای کدام هدیه رو دریافت کنی؟</h4>
          
          <div class="space-y-3">
            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedBenefit" 
                type="radio" 
                name="benefit" 
                value="marriage" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">هدیه ازدواج</span>
            </label>

            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedBenefit" 
                type="radio" 
                name="benefit" 
                value="childbirth" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">تولد فرزند</span>
            </label>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-3">
          <button 
            @click="$emit('close')" 
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            انصراف
          </button>
          <button 
            @click="handleSubmit" 
            :disabled="!selectedBenefit || isSubmitting"
            class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            ثبت درخواست
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import { useToast } from 'vue-toastification'
import { useAuth } from '~/composables/useAuth'

const nuxtApp = useNuxtApp()
const $api = nuxtApp.$api
const toast = useToast()

const selectedBenefit = ref('')
const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const { data: userData } = await $api.get('/api/v1/users/me')
    
    const { data } = await $api.post('/api/v1/requests', {
      full_name: `${userData.first_name} ${userData.last_name}`,
      kind: selectedBenefit.value === 'marriage' ? 'marriage_gift' : 'childbirth_gift'
    })

    toast.success('درخواست شما با موفقیت ثبت شد')
    emit('close')
  } catch (error) {
    console.error('Error submitting request:', error)
    toast.error(error.message || 'خطا در ثبت درخواست')
  } finally {
    isSubmitting.value = false
  }
}

const emit = defineEmits(['close', 'submit'])
</script> 