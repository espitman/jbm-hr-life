<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]" @click="emit('close')">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4" @click.stop>
      <div class="space-y-6">
        <!-- Welcome Message (always visible) -->
        <div class="text-center space-y-2">
          <h3 class="text-xl font-bold text-gray-900">همکار عزیزم</h3>
          <p class="text-gray-600 leading-relaxed">
            سلام<br>
            برای استفاده از تسهیلات سفر، درخواست خود را ثبت کنید.
          </p>
        </div>

        <!-- Step Progress Indicator -->
        <div class="flex justify-between items-center mb-6">
          <div v-for="(step, index) in steps" :key="index" class="flex items-center">
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
              :class="[
                currentStep > index ? 'bg-amber-500 text-white' : 
                currentStep === index ? 'bg-amber-100 text-amber-500 border-2 border-amber-500' :
                'bg-gray-100 text-gray-400'
              ]"
            >
              {{ index + 1 }}
            </div>
            <div v-if="index < steps.length - 1" class="w-12 h-1" :class="currentStep > index ? 'bg-amber-500' : 'bg-gray-200'"></div>
          </div>
        </div>

        <!-- Step Content -->
        <div v-if="currentStep === 0" class="space-y-4">
          <h4 class="text-lg font-medium text-gray-900">قصد استفاده از کدام گزینه رو دارید؟</h4>
          <p class="text-sm text-gray-600">اگر بیش از یک گزینه رو میخواستید باید هرکدام رو به صورت جداگانه درخواست بدید.</p>
          <div class="space-y-3">
            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedProvider" 
                type="radio" 
                name="provider" 
                value="jabama" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">جاباما</span>
            </label>
            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedProvider" 
                type="radio" 
                name="provider" 
                value="alibaba" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">علی بابا</span>
            </label>
          </div>
        </div>
        <div v-else-if="currentStep === 1" class="space-y-4">
          <h4 class="text-lg font-medium text-gray-900">میزان اعتبار درخواستی خود را اعلام کنید.</h4>
          <p class="text-sm text-gray-600">لطفا میزان اعتبار درخواستی خود را با جدول بودجه مزایا چک کنید.</p>
          <div class="overflow-x-auto mt-2">
            <table class="min-w-full text-center border border-amber-400 rounded-lg">
              <thead>
                <tr class="bg-amber-400 text-white">
                  <th class="py-2 px-4">مدت همکاری (تمام)</th>
                  <th class="py-2 px-4">سقف اعتبار</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-amber-100">
                  <td class="py-2 px-4">سه ماه</td>
                  <td class="py-2 px-4">۲۵درصد حقوق خالص</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">شش ماه</td>
                  <td class="py-2 px-4">۵۰درصد حقوق خالص</td>
                </tr>
                <tr class="bg-amber-100">
                  <td class="py-2 px-4">نه ماه</td>
                  <td class="py-2 px-4">۷۵درصد حقوق خالص</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">یک سال</td>
                  <td class="py-2 px-4">یک حقوق خالص کامل</td>
                </tr>
                <tr class="bg-amber-100">
                  <td class="py-2 px-4">دو سال</td>
                  <td class="py-2 px-4">دو حقوق خالص کامل</td>
                </tr>
                <tr>
                  <td class="py-2 px-4">سه سال</td>
                  <td class="py-2 px-4">سه حقوق خالص کامل</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="relative mt-4">
            <input 
              v-model="creditAmount"
              type="number"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500"
              placeholder="میزان اعتبار به تومان"
            />
            <span class="absolute left-3 top-2 text-gray-500">تومان</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-between space-x-3">
          <button 
            v-if="currentStep > 0"
            @click="currentStep--" 
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            مرحله قبل
          </button>
          <div v-else></div>

          <button 
            v-if="currentStep < steps.length - 1"
            @click="currentStep++" 
            :disabled="!canGoNext"
            class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            مرحله بعد
          </button>
          <button 
            v-else
            @click="handleSubmit" 
            :disabled="!isFormValid || isSubmitting"
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
import { ref, computed } from 'vue'
import { useNuxtApp } from 'nuxt/app'
import { useToast } from 'vue-toastification'

const nuxtApp = useNuxtApp()
const $api = nuxtApp.$api
const toast = useToast()

const steps = [
  { title: 'انتخاب سرویس‌دهنده' },
  { title: 'میزان اعتبار درخواستی' }
]
const currentStep = ref(0)

const selectedProvider = ref('')
const creditAmount = ref('')
const isSubmitting = ref(false)

const canGoNext = computed(() => {
  if (currentStep.value === 0) {
    return !!selectedProvider.value
  }
  return true
})

const isFormValid = computed(() => {
  return selectedProvider.value && creditAmount.value && Number(creditAmount.value) > 0
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const { data: userData } = await $api.get('/api/v1/users/me')
    
    const { data } = await $api.post('/api/v1/requests', {
      full_name: `${userData.first_name} ${userData.last_name}`,
      kind: 'travel',
      meta: [
        { key: 'provider', value: selectedProvider.value },
        { key: 'credit_amount', value: creditAmount.value }
      ]
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

const emit = defineEmits(['close'])
</script> 