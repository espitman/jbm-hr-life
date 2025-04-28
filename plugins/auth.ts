import { useAuth } from '~/composables/useAuth'
import type { NavigationGuard } from 'vue-router'

export default defineNuxtPlugin((nuxtApp) => {
  const { isAuthenticated, checkAuth } = useAuth()

  // Add global navigation guard
  nuxtApp.hook('app:created', () => {
    checkAuth() // Ensure auth is checked on every app creation (page refresh)
    const router = useRouter()
    
    router.beforeEach((to, from, next) => {
      // Always check auth first
      if (!isAuthenticated.value && to.path !== '/login') {
        next('/login')
        return
      }

      // If authenticated and trying to access login page, redirect to home
      if (isAuthenticated.value && to.path === '/login') {
        next('/')
        return
      }

      // Allow navigation
      next()
    })
  })

  // Add server-side middleware
  addRouteMiddleware('auth', (to, from) => {
    if (process.server) {
      const token = useCookie('auth_token')
      if (!token.value && to.path !== '/login') {
        return navigateTo('/login')
      }
      if (token.value && to.path === '/login') {
        return navigateTo('/')
      }
    }
  }, { global: true })
}) 