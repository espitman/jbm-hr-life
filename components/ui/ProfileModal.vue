<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 z-50">
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        @click="close"
      ></div>

      <!-- Modal -->
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
          <!-- Close button -->
          <button
            @click="close"
            class="absolute top-4 left-4 text-gray-400 hover:text-gray-500 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Content -->
          <div class="p-0">
            <div v-if="loading" class="flex justify-center items-center min-h-[400px]">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
            </div>

            <div v-else-if="error" class="bg-white rounded-lg shadow p-6">
              <ErrorPage
                :title="'خطا در دریافت اطلاعات'"
                :message="error"
                :error-code="errorCode"
                :error-message="errorMessage"
                @retry="fetchUserData"
                @go-home="close"
              />
            </div>

            <div v-else class="space-y-6">
              <!-- Profile Header -->
              <div class="bg-white rounded-lg shadow overflow-hidden">
                <div class="relative h-32 bg-gradient-to-r from-amber-400 to-amber-600">
                  <div class="absolute -bottom-16 left-8">
                    <div 
                      class="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white cursor-pointer group relative"
                      @click="showImageUpload = true"
                    >
                      <img
                        :src="userData?.avatar || `https://ui-avatars.com/api/?name=${userData?.first_name}+${userData?.last_name}&background=amber-500&color=fff`"
                        :alt="`${userData?.first_name} ${userData?.last_name}`"
                        class="h-full w-full object-cover"
                      />
                      <!-- Upload Icon Overlay -->
                      <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-20 pb-6 px-8">
                  <h1 class="text-2xl font-bold text-gray-900">
                    {{ userData?.first_name }} {{ userData?.last_name }}
                  </h1>
                  <p class="text-gray-600">{{ userData?.email }}</p>
                </div>
              </div>

              <!-- Image Upload Modal -->
              <div v-if="showImageUpload" class="fixed inset-0 z-[60] flex items-center justify-center">
                <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="showImageUpload = false"></div>
                <div class="relative bg-white rounded-lg p-6 w-full max-w-md mx-4">
                  <button
                    @click="showImageUpload = false"
                    class="absolute top-4 left-4 text-gray-400 hover:text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="black">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <h3 class="text-lg font-medium text-gray-900 mb-4">تغییر تصویر پروفایل</h3>
                  <ImageUpload 
                    dir="avatars"
                    :initial-image="userData?.avatar"
                    @uploaded="handleAvatarUpload"
                  />
                </div>
              </div>

              <!-- Profile Information -->
              <div class="bg-white rounded-lg shadow divide-y divide-gray-200">
                <div class="p-6">
                  <h2 class="text-lg font-medium text-gray-900 mb-4">اطلاعات شخصی</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">شماره موبایل</label>
                      <p class="text-sm text-gray-900">{{ userData?.phone }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">کد ملی</label>
                      <p class="text-sm text-gray-900">{{ userData?.national_code }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">تاریخ تولد</label>
                      <p class="text-sm text-gray-900">{{ $formatDateOnly(userData?.birthdate) }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">شماره پرسنلی</label>
                      <p class="text-sm text-gray-900">{{ userData?.personnel_number }}</p>
                    </div>
                  </div>
                </div>

                <div class="p-6">
                  <h2 class="text-lg font-medium text-gray-900 mb-4">اطلاعات سازمانی</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">دپارتمان</label>
                      <div class="flex items-center space-x-2 space-x-reverse">
                        <img
                          :src="userData?.department?.icon"
                          :alt="userData?.department?.title"
                          class="h-8 w-8 rounded"
                        />
                        <p class="text-sm text-gray-900">{{ userData?.department?.title }}</p>
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">تاریخ شروع همکاری</label>
                      <p class="text-sm text-gray-900">{{ $formatDateOnly(userData?.cooperation_start_date) }}</p>
                    </div>
                    <div>
                      <label class="block text-sm font-bold text-gray-500 mb-2">نقش</label>
                      <p class="text-sm text-gray-900">{{ userData?.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import ErrorPage from '~/components/ErrorPage.vue'
import ImageUpload from '~/components/ImageUpload.vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  userData: {
    type: Object,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
  error: {
    type: [String, null],
    default: null
  }
})

const emit = defineEmits(['close', 'update'])
const showImageUpload = ref(false)
const { $formatDateOnly, $api } = useNuxtApp()

const close = () => {
  emit('close')
}

const handleAvatarUpload = async (url) => {
  try {
    await $api.put('/api/v1/users/avatar', {
      avatar: url
    })
    
    // Fetch latest user data
    const { data: updatedUserData } = await $api.get('/api/v1/users/me')
    
    // Emit update with new user data
    emit('update', updatedUserData)
    showImageUpload.value = false
  } catch (error) {
    console.error('Error updating avatar:', error)
  }
}
</script> 