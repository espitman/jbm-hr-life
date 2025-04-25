<template>
  <div class="fixed top-0 right-0 bottom-0 w-64 border-l border-[#F59D24] rtl-container z-40 overflow-y-auto hidden md:block">
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-6">فهرست آشنایی!</h2>
      
      <nav class="space-y-4">
        <NuxtLink 
          to="/history" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/history', 'text-gray-700 hover:text-gray-900': $route.path !== '/history' }"
          class="block"
        >تاریخچه جاباما</NuxtLink>
        <NuxtLink 
          to="/referral" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/referral', 'text-gray-700 hover:text-gray-900': $route.path !== '/referral' }"
          class="block"
        >معرفی همکار (رفرال)</NuxtLink>
        <NuxtLink 
          to="/stock-model" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/stock-model', 'text-gray-700 hover:text-gray-900': $route.path !== '/stock-model' }"
          class="block"
        >مدل سهام داری</NuxtLink>
        <NuxtLink 
          to="/working-hours" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/working-hours', 'text-gray-700 hover:text-gray-900': $route.path !== '/working-hours' }"
          class="block"
        >ساعت کاری</NuxtLink>
        <NuxtLink 
          to="/benefits" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/benefits', 'text-gray-700 hover:text-gray-900': $route.path !== '/benefits' }"
          class="block"
        >مزایا و رفاهیات</NuxtLink>
        <NuxtLink 
          to="/military-service" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/military-service', 'text-gray-700 hover:text-gray-900': $route.path !== '/military-service' }"
          class="block"
        >تسهیلات نظام وظیفه تخصصی</NuxtLink>
        <NuxtLink 
          to="/collaboration-rules" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/collaboration-rules', 'text-gray-700 hover:text-gray-900': $route.path !== '/collaboration-rules' }"
          class="block"
        >قوانین همکاری</NuxtLink>
        <NuxtLink 
          to="/requirements" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/requirements', 'text-gray-700 hover:text-gray-900': $route.path !== '/requirements' }"
          class="block"
        >نیازمندی‌ها</NuxtLink>
        <NuxtLink 
          to="/hr-contact" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/hr-contact', 'text-gray-700 hover:text-gray-900': $route.path !== '/hr-contact' }"
          class="block"
        >ارتباط با اچ آر</NuxtLink>
        <NuxtLink 
          to="/anonymous-system" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/anonymous-system', 'text-gray-700 hover:text-gray-900': $route.path !== '/anonymous-system' }"
          class="block"
        >سامانه ناشناس</NuxtLink>
        <NuxtLink 
          to="/exit-process" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/exit-process', 'text-gray-700 hover:text-gray-900': $route.path !== '/exit-process' }"
          class="block"
        >فرایند خروج</NuxtLink>
        <NuxtLink 
          to="/requests" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/requests', 'text-gray-700 hover:text-gray-900': $route.path !== '/requests' }"
          class="block"
        >درخواست‌ها</NuxtLink>
        <NuxtLink 
          to="/building" 
          :class="{ 'text-amber-500 font-medium': $route.path === '/building', 'text-gray-700 hover:text-gray-900': $route.path !== '/building' }"
          class="block"
        >ساختمان اینجا</NuxtLink>
      </nav>
    </div>
  </div>
  <!-- Add a spacer to prevent content from being hidden under the fixed sidebar -->
  <div class="w-64 hidden md:block"></div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 