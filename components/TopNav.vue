<template>
  <div class="fixed top-0 right-0 md:right-64 left-0 z-50 bg-white shadow-md h-[92px]">
    <div class="flex flex-row items-center p-4 h-full rtl-container">
      <!-- Logo (right side in RTL) -->
      <div class="flex items-center">
        <img src="/images/jabama-logo.png" alt="Jabama Logo" class="h-[60px]">
      </div>

      <!-- Navigation items (left side in RTL) -->
      <div class="hidden md:flex items-center space-x-reverse space-x-8 mr-auto">
        <NuxtLink to="/" :class="{ 'text-amber-500 font-medium': $route.path === '/', 'text-gray-600 hover:text-gray-900': $route.path !== '/' }">صفحه اصلی</NuxtLink>
        <NuxtLink to="/album" :class="{ 'text-amber-500 font-medium': $route.path === '/album', 'text-gray-600 hover:text-gray-900': $route.path !== '/album' }">آلبوم</NuxtLink>
        <a href="#" class="text-gray-600 hover:text-gray-900">ارتباط با جاباما</a>
      </div>
    </div>
  </div>
  <!-- Add a spacer to prevent content from being hidden under the fixed navbar -->
  <div class="h-[92px]"></div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 