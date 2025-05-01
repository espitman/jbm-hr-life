import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { navigateTo } from '#app'

// Define interfaces for API responses
interface ApiResponse<T> {
  data: T
  message?: string
  status: number
  success: boolean
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  // Get the auth token from cookie
  const token = useCookie('auth_token').value
  
  // If token exists, add it to the Authorization header
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
})

// Add response interceptor for error handling
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      // Clear auth token and user data
      const authToken = useCookie('auth_token')
      authToken.value = null
      
      if (process.client) {
        localStorage.removeItem('user')
        // Redirect to login page
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }

    if (error.response?.data) {
      // If the server responded with an error message, throw it
      const errorData = error.response.data as { success: boolean; message: string }
      throw new Error(errorData.message || 'خطا در اتصال به سرور')
    }
    throw new Error('خطا در اتصال به سرور')
  }
)

// API methods
export const apiService = {
  // Generic request methods
  get: async <T>(url: string, params?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.get<ApiResponse<T>>(url, { params })
      return response.data
    } catch (error) {
      throw error
    }
  },
  
  post: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.post<ApiResponse<T>>(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  },
  
  put: async <T>(url: string, data?: any): Promise<ApiResponse<T>> => {
    try {
      const response = await api.put<ApiResponse<T>>(url, data)
      return response.data
    } catch (error) {
      throw error
    }
  },
  
  delete: async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
      const response = await api.delete<ApiResponse<T>>(url)
      return response.data
    } catch (error) {
      throw error
    }
  },
  
  // File upload method
  upload: async <T>(url: string, file: File): Promise<ApiResponse<T>> => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await api.post<ApiResponse<T>>(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      throw error
    }
  },
  
  // Auth related methods
  auth: {
    requestOTP: async (email: string): Promise<ApiResponse<{ message: string }>> => {
      try {
        const response = await api.post<ApiResponse<{ message: string }>>('/api/v1/users/request-otp', { email })
        if (!response.data.success) {
          throw new Error(response.data.message || 'خطا در ارسال کد تایید')
        }
        return response.data
      } catch (error) {
        throw error
      }
    },
    
    verifyOTP: async (email: string, otp: string): Promise<ApiResponse<any>> => {
      try {
        const response = await api.post<ApiResponse<any>>('/api/v1/users/verify-otp', { email, otp })
        if (!response.data.success) {
          throw new Error(response.data.message || 'خطا در تایید کد')
        }
        return response.data
      } catch (error) {
        throw error
      }
    }
  }
}

// Plugin installation
export default defineNuxtPlugin(() => {
  return {
    provide: {
      api: apiService
    }
  }
}) 