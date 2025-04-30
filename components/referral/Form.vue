<template>
  <div class="bg-white rounded-lg p-6">
    <form class="space-y-6" @submit.prevent="handleSubmit">
      <!-- Table Layout for Form Fields -->
      <div class="grid gap-4">
        <!-- Second Row: 3 columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input 
              v-model="formData.name"
              type="text" 
              placeholder="نام فرد معرفی شده" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>
          <div>
            <input 
              v-model="formData.phone"
              type="text" 
              placeholder="شماره موبایل فرد" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              :class="{ 'border-red-500': errors.phone }"
            />
            <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
          </div>
          <div>
            <input 
              v-model="formData.position"
              type="text" 
              placeholder="موقعیت شغلی" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              :class="{ 'border-red-500': errors.position }"
            />
            <p v-if="errors.position" class="text-red-500 text-sm mt-1">{{ errors.position }}</p>
          </div>
        </div>
      </div>

      <!-- Redesigned Resume Upload Section -->
      <div class="mt-6">
        <div 
          class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-amber-400 transition-colors duration-300"
          :class="{ 'border-amber-400': isDragging, 'border-red-500': errors.file }"
          @dragenter.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-amber-500 hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-400">
                <span>آپلود فایل رزومه</span>
                <input 
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  class="sr-only" 
                  accept=".pdf,.doc,.docx"
                  @change="handleFileSelect"
                >
              </label>
              <p class="pr-1">فایل را اینجا رها کنید</p>
            </div>
            <p class="text-xs text-gray-500">
              PDF، DOC یا DOCX تا سقف 10MB
            </p>
            <p v-if="selectedFile" class="text-sm text-amber-500">
              فایل انتخاب شده: {{ selectedFile.name }}
            </p>
            <p v-if="errors.file" class="text-red-500 text-sm mt-1">{{ errors.file }}</p>
          </div>
        </div>
      </div>
      
      <div>
        <button 
          type="submit" 
          class="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition duration-300"
          :disabled="isUploading"
        >
          {{ isUploading ? 'در حال آپلود...' : 'ارسال' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nuxtApp = useNuxtApp()
const formData = ref({
  name: '',
  phone: '',
  position: ''
})

const selectedFile = ref(null)
const isDragging = ref(false)
const isUploading = ref(false)
const errors = ref({
  name: '',
  phone: '',
  position: '',
  file: ''
})

const validateForm = () => {
  let isValid = true
  errors.value = {
    name: '',
    phone: '',
    position: '',
    file: ''
  }

  if (!formData.value.name.trim()) {
    errors.value.name = 'نام فرد معرفی شده الزامی است'
    isValid = false
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = 'شماره موبایل فرد الزامی است'
    isValid = false
  }

  if (!formData.value.position.trim()) {
    errors.value.position = 'موقعیت شغلی الزامی است'
    isValid = false
  }

  if (!selectedFile.value) {
    errors.value.file = 'فایل رزومه الزامی است'
    isValid = false
  }

  return isValid
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    validateAndSetFile(file)
  }
}

const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files[0]
  if (file) {
    validateAndSetFile(file)
  }
}

const validateAndSetFile = (file) => {
  const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
  const maxSize = 10 * 1024 * 1024 // 10MB

  if (!validTypes.includes(file.type)) {
    errors.value.file = 'لطفا فایل با فرمت PDF، DOC یا DOCX انتخاب کنید'
    return
  }

  if (file.size > maxSize) {
    errors.value.file = 'حجم فایل نباید بیشتر از 10MB باشد'
    return
  }

  selectedFile.value = file
  errors.value.file = ''
}

const handleSubmit = async () => {
  if (!validateForm()) {
    return
  }

  isUploading.value = true

  try {
    // First upload the file
    const uploadResponse = await nuxtApp.$api.upload('/api/v1/upload/document', selectedFile.value)
    
    if (!uploadResponse || !uploadResponse.data) {
      throw new Error('خطا در آپلود فایل')
    }

    // Then submit the resume data
    const resumeData = {
      file: uploadResponse.data.key,
      introduced_name: formData.value.name,
      introduced_phone: formData.value.phone,
      position: formData.value.position
    }

    const resumeResponse = await nuxtApp.$api.post('/api/v1/resumes', resumeData)

    if (!resumeResponse) {
      throw new Error('خطا در ثبت اطلاعات رزومه')
    }

    alert('اطلاعات با موفقیت ثبت شد')
    // Reset form
    selectedFile.value = null
    formData.value = {
      name: '',
      phone: '',
      position: ''
    }
  } catch (error) {
    alert(error.message)
  } finally {
    isUploading.value = false
  }
}
</script> 