import { ref } from 'vue'
import { useNuxtApp } from '#app'

interface UserData {
  id: number
  email: string
  first_name: string
  last_name: string
  [key: string]: any
}

interface ApiResponse<T> {
  success: boolean
  message?: string
  data?: T
}

export const useUserData = () => {
  const nuxtApp = useNuxtApp()
  const userData = ref<UserData | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)
  const dataFetched = ref(false)

  const fetchUserData = async (force = false) => {
    // If data is already fetched and not forcing refresh, return
    if (dataFetched.value && !force) {
      return userData.value
    }

    // If already loading, don't start another request
    if (loading.value) {
      return null
    }

    loading.value = true
    error.value = null

    try {
      // @ts-ignore - We know $api exists on nuxtApp
      const response = await nuxtApp.$api.get<ApiResponse<UserData>>('/api/v1/users/me')
      if (response && response.data) {
        userData.value = response.data
        dataFetched.value = true
        return userData.value
      }
    } catch (err) {
      console.error('Error fetching user data:', err)
      error.value = err instanceof Error ? err : new Error('Unknown error')
    } finally {
      loading.value = false
    }

    return null
  }

  const clearUserData = () => {
    userData.value = null
    dataFetched.value = false
    error.value = null
  }

  return {
    userData,
    loading,
    error,
    fetchUserData,
    clearUserData
  }
} 