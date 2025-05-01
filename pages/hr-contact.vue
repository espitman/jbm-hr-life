<template>
  <div class="container p-6">
    <JabamaLoading v-if="loading" />
    <div v-else>
      <PageHeaderCard 
        v-if="!error"
        title="ارتباط با اچ آر"
        :showDot="false"
      />
      
      <ErrorPage
        v-if="error"
        :title="'خطا در اتصال به سرور'"
        :message="error"
        :show-details="false"
        :error-code="errorCode"
        :error-message="errorMessage"
        @retry="handleRetry"
        @go-home="handleGoHome"
      />
      <div v-else>
        <!-- Contact Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="member in hrTeam" :key="member.id" class="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h3 class="text-xl font-bold mb-2">{{ member.full_name }}</h3>
            <p class="text-amber-500 font-medium mb-4">{{ member.role }}</p>
            <div class="space-y-2">
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a :href="'mailto:' + member.email" class="hover:text-amber-500 transition-colors">{{ member.email }}</a>
              </div>
              <div class="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span dir="ltr">{{ member.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import JabamaLoading from '~/components/ui/JabamaLoading.vue'
import ErrorPage from '~/components/ErrorPage.vue'

definePageMeta({
  layout: 'default'
})

const { $api } = useNuxtApp()
const hrTeam = ref([])
const loading = ref(true)
const error = ref(null)
const errorCode = ref(null)
const errorMessage = ref(null)

// Fetch HR team data
const fetchHRTeam = async () => {
  try {
    loading.value = true
    error.value = null
    errorCode.value = null
    errorMessage.value = null
    
    const response = await $api.get('/api/v1/hr-team')
    if (response.success) {
      hrTeam.value = response.data
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

const handleRetry = () => {
  fetchHRTeam()
}

const handleGoHome = () => {
  navigateTo('/')
}

// Fetch data when component is mounted
onMounted(() => {
  fetchHRTeam()
})
</script> 