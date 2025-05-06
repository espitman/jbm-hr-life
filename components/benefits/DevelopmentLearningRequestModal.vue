<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
      <div class="space-y-6">
        <!-- Welcome Message -->
        <div class="text-center space-y-2">
          <h3 class="text-xl font-bold text-gray-900">همکار عزیزم</h3>
          <p class="text-gray-600 leading-relaxed">
            سلام<br>
            از اینکه برای رشد و یادگیری خودت سرمایه گذاری می‌کنی مفتخریم. برای دریافت کمک هزینه آموزشی می‌تونی درخواستت رو ثبت کنی.
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="flex justify-between items-center mb-6">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="flex items-center"
          >
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
            <div 
              v-if="index < steps.length - 1"
              class="w-12 h-1"
              :class="currentStep > index ? 'bg-amber-500' : 'bg-gray-200'"
            ></div>
          </div>
        </div>

        <!-- Current Step Content -->
        <div class="space-y-4">
          <div class="flex items-center mb-4">
            <h4 class="text-base font-medium text-gray-900">{{ steps[currentStep].title }}</h4>
          </div>
          <template v-if="currentStep === 0">
            <ImageUpload 
              :dir="steps[0].dir" 
              @uploaded="handleFileUpload(steps[0].key, $event)"
              :initial-image="uploadedFiles[steps[0].key]"
            />
          </template>
          <template v-else-if="currentStep === 1">
            <ImageUpload 
              :dir="steps[1].dir" 
              @uploaded="handleFileUpload(steps[1].key, $event)"
              :initial-image="uploadedFiles[steps[1].key]"
            />
          </template>
          <template v-else-if="currentStep === 2">
            <ImageUpload 
              :dir="steps[2].dir" 
              @uploaded="handleFileUpload(steps[2].key, $event)"
              :initial-image="uploadedFiles[steps[2].key]"
            />
          </template>
          <template v-else-if="currentStep === 3">
            <ImageUpload 
              :dir="steps[3].dir" 
              @uploaded="handleFileUpload(steps[3].key, $event)"
              :initial-image="uploadedFiles[steps[3].key]"
            />
          </template>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-between space-x-3">
          <button 
            v-if="currentStep > 0"
            @click="handlePrev" 
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            مرحله قبل
          </button>
          <div v-else></div>

          <button 
            v-if="currentStep < steps.length - 1"
            @click="handleNext" 
            :disabled="!uploadedFiles[steps[currentStep].key]"
            class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            مرحله بعد
          </button>
          <button 
            v-else
            @click="handleSubmit" 
            :disabled="!isFormComplete || isSubmitting"
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
import ImageUpload from '~/components/ImageUpload.vue'
import { useNuxtApp } from 'nuxt/app'
import { useToast } from 'vue-toastification'

const nuxtApp = useNuxtApp()
const $api = nuxtApp.$api
const toast = useToast()

const currentStep = ref(0)
const showImage = ref(false)

const steps = [
  {
    title: 'تصویر تایید مکتوب مدیر واحد در ایمیل سازمانی خود را بارگذاری کنید',
    key: 'manager_approval',
    dir: 'development-learning/manager-approval'
  },
  {
    title: 'تصویر تایید مکتوب HRBP در ایمیل سازمانی خود را بارگذاری کنید',
    key: 'hrbp_approval',
    dir: 'development-learning/hrbp-approval'
  },
  {
    title: 'فاکتور دوره آموزشی را بارگذاری کنید',
    key: 'course_invoice',
    dir: 'development-learning/course-invoice'
  },
  {
    title: 'رسید پرداختی خود را بارگذاری کنید',
    key: 'payment_receipt',
    dir: 'development-learning/payment-receipt'
  }
]

const uploadedFiles = ref({
  manager_approval: null,
  hrbp_approval: null,
  course_invoice: null,
  payment_receipt: null
})

const isFormComplete = computed(() => {
  return Object.values(uploadedFiles.value).every(file => file !== null)
})

const isSubmitting = ref(false)

const handleFileUpload = (type, url) => {
  uploadedFiles.value[type] = url
}

const handleNext = () => {
  showImage.value = false
  setTimeout(() => {
    currentStep.value++
    showImage.value = true
  }, 0)
}

const handlePrev = () => {
  showImage.value = false
  setTimeout(() => {
    currentStep.value--
    showImage.value = true
  }, 0)
}

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const { data } = await $api.post('/api/v1/requests', {
      full_name: 'full name',
      kind: 'development_learning',
      meta: [
        { key: 'manager_approval', value: uploadedFiles.value.manager_approval },
        { key: 'hrbp_approval', value: uploadedFiles.value.hrbp_approval },
        { key: 'course_invoice', value: uploadedFiles.value.course_invoice },
        { key: 'payment_receipt', value: uploadedFiles.value.payment_receipt }
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