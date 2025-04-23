<template>
  <div class="fixed top-0 right-64 left-0 z-50 bg-white shadow-md">
    <div class="flex flex-row-reverse justify-between items-center p-4 rtl-container">
      <!-- Left side navigation items (appears on right in RTL) -->
      <div class="flex items-center space-x-reverse space-x-8">
        <NuxtLink to="/" :class="{ 'text-amber-500 font-medium': $route.path === '/', 'text-gray-600 hover:text-gray-900': $route.path !== '/' }">صفحه اصلی</NuxtLink>
        <NuxtLink to="/album" :class="{ 'text-amber-500 font-medium': $route.path === '/album', 'text-gray-600 hover:text-gray-900': $route.path !== '/album' }">آلبوم</NuxtLink>
        <a href="#" class="text-gray-600 hover:text-gray-900">ارتباط با جاباما</a>
      </div>
      
      <!-- Right side logo (appears on left in RTL) -->
      <div class="flex items-center">
        <img src="/images/jabama-logo.png" alt="Jabama Logo" class="h-[60px]">
      </div>
    </div>
  </div>
  <!-- Add a spacer to prevent content from being hidden under the fixed navbar -->
  <div class="h-[72px]"></div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 