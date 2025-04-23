<template>
  <div class="flex flex-row-reverse justify-between items-center p-4 rtl-container">
    <!-- Left side navigation items (appears on right in RTL) -->
    <div class="flex items-center space-x-reverse space-x-8">
      <a href="#" class="text-gray-600 hover:text-gray-900">ارتباط با جاباما</a>
      <NuxtLink to="/album" class="text-gray-600 hover:text-gray-900">آلبوم</NuxtLink>
      <NuxtLink to="/" class="text-amber-500 font-medium">صفحه اصلی</NuxtLink>
    </div>
    
    <!-- Right side logo (appears on left in RTL) -->
    <div class="flex items-center">
      <img src="/images/jabama-logo.png" alt="Jabama Logo" class="h-[60px]">
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 