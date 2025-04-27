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

// Global state that persists across component instances
const globalUserData = ref<UserData | null>(null)
const globalLoading = ref(false)
const globalError = ref<Error | null>(null)
const globalDataFetched = ref(false)
let fetchPromise: Promise<UserData | null> | null = null

export const useUserData = () => {
  const nuxtApp = useNuxtApp()

  const fetchUserData = async (force = false) => {
    // If data is already fetched and not forcing refresh, return
    if (globalDataFetched.value && !force) {
      return globalUserData.value
    }

    // If already loading, return the existing promise
    if (globalLoading.value && fetchPromise) {
      return fetchPromise
    }

    // Create a new promise for this fetch
    fetchPromise = (async () => {
      globalLoading.value = true
      globalError.value = null

      try {
        // @ts-ignore - We know $api exists on nuxtApp
        const response = await nuxtApp.$api.get<ApiResponse<UserData>>('/api/v1/users/me')
        if (response && response.data) {
          globalUserData.value = response.data
          globalDataFetched.value = true
          return globalUserData.value
        }
      } catch (err) {
        console.error('Error fetching user data:', err)
        globalError.value = err instanceof Error ? err : new Error('Unknown error')
      } finally {
        globalLoading.value = false
        fetchPromise = null
      }

      return null
    })()

    return fetchPromise
  }

  const clearUserData = () => {
    globalUserData.value = null
    globalDataFetched.value = false
    globalError.value = null
    fetchPromise = null
  }

  return {
    userData: globalUserData,
    loading: globalLoading,
    error: globalError,
    fetchUserData,
    clearUserData
  }
} 