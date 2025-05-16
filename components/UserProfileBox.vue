<template>
  <div class="mt-auto bg-amber-100 border-t border-amber-200 md:border-t-0 md:border-b border-amber-200 sticky bottom-0">
    <div class="p-4">
      <button @click="openProfileModal" class="flex items-center transition-colors duration-200 rounded-lg">
        <div class="flex-shrink-0 relative">
          <img
            v-if="!loading && userData"
            class="h-12 w-12 rounded-full object-cover ring-2 ring-amber-500"
            :src="userData?.avatar || `https://ui-avatars.com/api/?name=${userData?.first_name}+${userData?.last_name}&background=amber-500&color=fff`"
            :alt="`${userData?.first_name} ${userData?.last_name}`"
          />
          <div v-else class="h-12 w-12 rounded-full bg-amber-200 flex items-center justify-center">
            <svg class="animate-spin h-6 w-6 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <!-- Confirmation Notification -->
          <div 
            v-if="!loading && userData && !userData.confirmed"
            class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full ring-2 ring-white flex items-center justify-center animate-heartbeat"
            title="لطفا اطلاعات خود را تایید کنید"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="mr-3 flex-1">
          <p v-if="!loading && userData" class="text-base font-medium text-gray-900">{{ userData?.first_name }} {{ userData?.last_name }}</p>
          <p v-else class="text-base font-medium text-gray-500">در حال بارگذاری...</p>
          <NuxtLink
            v-if="!loading && userData"
            to="/logout"
            class="text-sm text-amber-600 hover:text-amber-700 flex items-center mt-1"
            @click.stop
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            خروج از سیستم
          </NuxtLink>
        </div>
      </button>
    </div>
  </div>

  <!-- Profile Modal -->
  <ProfileModal
    :is-open="isProfileModalOpen"
    :user-data="userData"
    :loading="loading"
    :error="error"
    @close="closeProfileModal"
    @update="handleProfileUpdate"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { useUserData } from '~/composables/useUserData'
import ProfileModal from './ui/ProfileModal.vue'

const { isAuthenticated } = useAuth()
const { userData, loading, fetchUserData, error } = useUserData()
const isProfileModalOpen = ref(false)

const openProfileModal = () => {
  isProfileModalOpen.value = true
}

const closeProfileModal = () => {
  isProfileModalOpen.value = false
}

const handleProfileUpdate = (updatedUserData) => {
  if (updatedUserData) {
    userData.value = updatedUserData
  } else {
    fetchUserData()
  }
}

onMounted(async () => {
  if (isAuthenticated.value) {
    await fetchUserData()
  }
})
</script>

<style scoped>
@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.animate-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}
</style> 