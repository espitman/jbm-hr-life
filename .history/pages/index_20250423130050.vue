<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">به صفحه اصلی خوش آمدید</h1>
    <p class="text-gray-600">این صفحه با استفاده از Nuxt 3 و Tailwind CSS ساخته شده است.</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style>
/* Add any additional custom styles here if needed */
/* For example, you might want to add a custom font for Arabic/Persian text */
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');

* {
  font-family: 'Vazirmatn', sans-serif;
}
</style> 