<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { $pageTitles } = useNuxtApp()

// Get the current page title from the route
const pageTitle = computed(() => {
  return $pageTitles[route.path] || 'صفحه اصلی'
})

useHead({
  title: computed(() => `فهرست آشنایی - ${pageTitle.value}`),
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/manifest.json' },
    { rel: 'msapplication-TileColor', content: '#ffffff' },
    { rel: 'msapplication-config', href: '/favicon/browserconfig.xml' }
  ]
})
</script>

<style>
/* Global styles can be added here if needed */
</style>
