import { ref } from 'vue'

const show = ref(false)
const title = ref('')
const message = ref('')
const type = ref<'error' | 'success'>('error')

export function useToast() {
  const showToast = (options: { title: string; message: string; type?: 'error' | 'success' }) => {
    title.value = options.title
    message.value = options.message
    type.value = options.type || 'error'
    show.value = true

    // Auto hide after 5 seconds
    setTimeout(() => {
      show.value = false
    }, 500000)
  }

  const hideToast = () => {
    show.value = false
  }

  return {
    show,
    title,
    message,
    type,
    showToast,
    hideToast
  }
} 