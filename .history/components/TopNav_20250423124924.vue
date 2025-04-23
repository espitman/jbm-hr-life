<template>
  <div class="flex flex-row-reverse justify-between items-center p-4 border-b" dir="rtl">
    <!-- Left side navigation items (appears on right in RTL) -->
    <div class="flex items-center space-x-reverse space-x-8">
      <a href="#" class="text-gray-600 hover:text-gray-900">ارتباط با جاباما</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">آلبوم</a>
      <a href="#" class="text-amber-500 font-medium">صفحه اصلی</a>
    </div>
    
    <!-- Right side logo/controls (appears on left in RTL) -->
    <div class="flex items-center space-x-reverse space-x-4">
      <button class="p-2 text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <button class="p-2 text-gray-600 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div class="w-8 h-8">
        <svg viewBox="0 0 24 24" class="text-amber-500" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="none" />
          <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M12,20c-4.42,0-8-3.58-8-8 c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z" />
          <path d="M8.88,9.94L9.94,11l4.12-4.12l1.06,1.06L9.94,14.12L8.88,13.06L8.88,9.94z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 