<template>
  <div class="min-h-screen bg-white" dir="rtl">
    <div class="flex">
      <!-- Main content area -->
      <div class="flex-1">
        <!-- Top navigation bar -->
        <div class="flex justify-between items-center p-4 border-b">
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
      </div>
      
      <!-- Sidebar -->
      <div class="w-64 border-r border-gray-200 min-h-screen">
        <div class="p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-6">!فهرست آشنایی</h2>
          
          <nav class="space-y-4">
            <a href="#" class="block text-gray-700 hover:text-gray-900">تاریخچه جاباما</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">معرفی همکار (رفرال)</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">مدل سهام داری</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">ساعت کاری</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">مزایا و رفاهیات</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">تسهیلات نظام وظیفه تخصصی</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">قوانین همکاری</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">نیازمندی‌ها</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">ارتباط با اچ آر</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">سامانه ناشناس</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">فرایند خروج</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">درخواست‌ها</a>
            <a href="#" class="block text-gray-700 hover:text-gray-900">ساختمان اینجا</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component can be extended with reactivity if needed
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
/* Add any additional custom styles here if needed */
/* For example, you might want to add a custom font for Arabic/Persian text */
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');

* {
  font-family: 'Vazirmatn', sans-serif;
}
</style> 