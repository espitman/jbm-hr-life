<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          @go-home="navigateTo('/')"
        />
      </div>

      <div v-else class="space-y-6">
        <!-- Profile Header -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <div class="relative h-32 bg-gradient-to-r from-amber-400 to-amber-600">
            <div class="absolute -bottom-16 left-8">
              <div class="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
                <img
                  :src="userData?.avatar || 'https://placehold.co/128x128/teal/white?text=U'"
                  :alt="`${userData?.first_name} ${userData?.last_name}`"
                  class="h-full w-full object-cover"
                />
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
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import ErrorPage from '~/components/ErrorPage.vue'

definePageMeta({
  layout: 'default'
})

const { $api, $formatDateOnly } = useNuxtApp()
const userData = ref(null)
const loading = ref(true)
const error = ref(null)
const errorCode = ref(null)
const errorMessage = ref(null)

const fetchUserData = async () => {
  try {
    loading.value = true
    error.value = null
    errorCode.value = null
    errorMessage.value = null
    
    const response = await $api.get('/api/v1/users/me')
    if (response.success) {
      userData.value = response.data
    } else {
      throw new Error('خطا در دریافت اطلاعات')
    }
  } catch (err) {
    error.value = 'خطا در اتصال به سرور'
    errorCode.value = err.response?.status || 500
    errorMessage.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchUserData()
})
</script> 