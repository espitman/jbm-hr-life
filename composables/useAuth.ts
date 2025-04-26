import { ref } from 'vue'

export const useAuth = () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  const getLocalStorage = () => {
    if (process.client) {
      return window.localStorage
    }
    return null
  }

  const checkAuth = () => {
    const token = useCookie('auth_token')
    const storedUser = getLocalStorage()?.getItem('user')
    
    if (token.value && storedUser) {
      isAuthenticated.value = true
      user.value = JSON.parse(storedUser)
    } else {
      isAuthenticated.value = false
      user.value = null
    }
  }

  const login = (token: string, userData: any) => {
    const authToken = useCookie('auth_token', {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    })
    authToken.value = token
    
    if (getLocalStorage()) {
      getLocalStorage()?.setItem('user', JSON.stringify(userData))
    }
    
    isAuthenticated.value = true
    user.value = userData
  }

  const logout = () => {
    const authToken = useCookie('auth_token')
    authToken.value = null
    
    if (getLocalStorage()) {
      getLocalStorage()?.removeItem('user')
    }
    
    isAuthenticated.value = false
    user.value = null
  }

  // Check auth state on initialization
  checkAuth()

  return {
    isAuthenticated,
    user,
    login,
    logout,
    checkAuth
  }
} 