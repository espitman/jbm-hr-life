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
  title: computed(() => `فهرست آشنایی - ${pageTitle.value}`)
})
</script>

<style>
/* Global styles can be added here if needed */
</style>
