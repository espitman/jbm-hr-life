<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header with Logo -->
      <div class="text-center">
        <div class="flex justify-center">
          <div class="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
          ورود به سیستم
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          برای دسترسی به اطلاعات خود وارد شوید
        </p>
      </div>

      <!-- Form Steps -->
      <div class="mt-8 bg-white py-8 px-4 shadow-xl rounded-xl sm:px-10 transform transition-all duration-300 hover:shadow-2xl">
        <!-- Step 1: Email Form -->
        <form v-if="step === 1" @submit.prevent="handleEmailSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              ایمیل سازمانی
            </label>
            <div class="mt-1 relative rounded-md shadow-sm">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                dir="ltr"
                class="appearance-none block w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm text-left"
                placeholder="example@jabama.com"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              دریافت کد تایید
            </button>
          </div>
        </form>

        <!-- Step 2: OTP Form -->
        <form v-if="step === 2" @submit.prevent="handleOTPSubmit" class="space-y-6">
          <div class="text-center text-sm text-gray-600 mb-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
            <div class="flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-500 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="font-medium">کد تایید ارسال شد</p>
            </div>
            <p>کد شش رقمی به ایمیل سازمانی شما ارسال شد.</p>
            <p>شما ۳ دقیقه فرصت دارید تا با استفاده از آن وارد شوید.</p>
            <div class="mt-2 text-amber-600 font-medium" dir="ltr">
              {{ email }}
            </div>
          </div>

          <div>
            <label for="otp" class="block text-sm font-medium text-gray-700">
              کد تایید
            </label>
            <div class="mt-1 flex justify-center gap-2 flex-row-reverse">
              <input
                v-for="i in 6"
                :key="i"
                v-model="otpDigits[i-1]"
                type="text"
                maxlength="1"
                pattern="[0-9]*"
                inputmode="numeric"
                dir="ltr"
                class="w-12 h-12 text-center text-xl font-bold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                @input="(e) => handleOtpInput(e, i-1)"
                @keydown="(e) => handleOtpKeydown(e, i-1)"
              />
            </div>
            <input
              type="hidden"
              v-model="otp"
              name="otp"
              required
            />
          </div>

          <div class="flex items-center justify-between">
            <button
              type="button"
              @click="step = 1"
              class="text-sm text-amber-600 hover:text-amber-500 flex items-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              تغییر ایمیل
            </button>
            <button
              type="button"
              @click="resendOTP"
              class="text-sm text-amber-600 hover:text-amber-500 flex items-center transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              ارسال مجدد کد
            </button>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useAuth } from '~/composables/useAuth'
import { navigateTo } from '#app'

const step = ref(1)
const email = ref('')
const otp = ref('')
const otpDigits = ref(['', '', '', '', '', ''])
const loading = ref(false)
const { login } = useAuth()

// Watch for step changes to auto-focus first OTP input
watch(step, (newStep) => {
  if (newStep === 2) {
    // Small delay to ensure the DOM is updated
    setTimeout(() => {
      const inputs = document.querySelectorAll('input[type="text"]')
      if (inputs.length > 0) {
        inputs[0].focus()
      }
    }, 0)
  }
})

// Computed property to join OTP digits
const otpValue = computed(() => {
  return otpDigits.value.join('')
})

// Watch for changes in OTP digits and update the hidden input
watch(otpValue, (newValue) => {
  otp.value = newValue
})

// Handle OTP input
const handleOtpInput = (event, index) => {
  const value = event.target.value
  
  // Ensure only numbers
  if (!/^\d*$/.test(value)) {
    otpDigits.value[index] = ''
    return
  }
  
  otpDigits.value[index] = value
  
  // Move to next input if value is entered
  if (value && index < 5) {
    // Small delay to ensure the value is set before focusing
    setTimeout(() => {
      const nextInput = event.target.parentElement.children[index + 1]
      if (nextInput) {
        nextInput.focus()
      }
    }, 0)
  }
  
  // If this is the last digit and it's filled, auto-submit the form
  if (index === 5 && value) {
    // Small delay to ensure the value is set before submitting
    setTimeout(() => {
      handleOTPSubmit()
    }, 100)
  }
}

// Handle OTP keydown events
const handleOtpKeydown = (event, index) => {
  // Handle backspace
  if (event.key === 'Backspace') {
    if (!otpDigits.value[index] && index > 0) {
      // If current input is empty, move to previous input
      otpDigits.value[index - 1] = ''
      const prevInput = event.target.parentElement.children[index - 1]
      if (prevInput) {
        prevInput.focus()
      }
    } else {
      // If current input has value, clear it
      otpDigits.value[index] = ''
    }
  }
  
  // Handle paste event
  if (event.key === 'v' && (event.ctrlKey || event.metaKey)) {
    event.preventDefault()
    const pastedData = event.clipboardData.getData('text')
    const numbers = pastedData.match(/\d/g)
    if (numbers) {
      numbers.slice(0, 6).forEach((num, i) => {
        if (i < 6) {
          otpDigits.value[i] = num
          if (i < 5) {
            setTimeout(() => {
              const nextInput = event.target.parentElement.children[i + 1]
              if (nextInput) {
                nextInput.focus()
              }
            }, 0)
          }
        }
      })
    }
  }
}

const handleEmailSubmit = async () => {
  loading.value = true
  try {
    // TODO: Implement email submission logic
    // For now, just move to step 2
    step.value = 2
  } catch (error) {
    console.error('Error submitting email:', error)
  } finally {
    loading.value = false
  }
}

const handleOTPSubmit = async () => {
  loading.value = true
  try {
    // Mock OTP verification - check if code is 111111
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (otp.value === '111111') {
      // Mock successful login
      const mockToken = 'mock_jwt_token_' + Date.now()
      const mockUser = {
        id: 1,
        email: email.value,
        name: 'Test User'
      }
      
      // Call login function
      login(mockToken, mockUser)
      
      // Force a page reload to ensure auth state is updated
      window.location.href = '/'
    } else {
      alert('کد تایید نامعتبر است. لطفا از کد 111111 استفاده کنید.')
    }
  } catch (error) {
    console.error('Error verifying OTP:', error)
  } finally {
    loading.value = false
  }
}

const resendOTP = async () => {
  loading.value = true
  try {
    // Clear all OTP inputs
    otpDigits.value = ['', '', '', '', '', '']
    
    // Focus the first input
    setTimeout(() => {
      const inputs = document.querySelectorAll('input[type="text"]')
      if (inputs.length > 0) {
        inputs[0].focus()
      }
    }, 0)
    
    // TODO: Implement OTP resend logic
    console.log('Resending OTP to:', email.value)
  } catch (error) {
    console.error('Error resending OTP:', error)
  } finally {
    loading.value = false
  }
}

definePageMeta({
  layout: 'empty',
  middleware: ['auth']
})
</script> 