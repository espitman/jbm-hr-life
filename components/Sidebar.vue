<template>
  <div class="fixed top-0 right-0 bottom-0 w-64 border-l border-[#F59D24] rtl-container z-40 overflow-y-auto hidden md:block">
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-6">فهرست آشنایی!</h2>
      
      <nav class="space-y-4">
        <NuxtLink 
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to" 
          :class="{ 'text-amber-500 font-medium': $route.path === item.to, 'text-gray-700 hover:text-gray-900': $route.path !== item.to }"
          class="flex items-center gap-2 block"
        >
          <PageIcon :pageName="item.pageName" size="sm" :color="$route.path === item.to ? 'amber-500' : 'gray-700'" />
          {{ item.text }}
        </NuxtLink>
      </nav>
    </div>
  </div>
  <!-- Add a spacer to prevent content from being hidden under the fixed sidebar -->
  <div class="w-64 hidden md:block"></div>
</template>

<script setup>
import PageIcon from './ui/PageIcon.vue'

const menuItems = [
  { to: '/history', text: 'تاریخچه جاباما', pageName: 'history' },
  { to: '/referral', text: 'معرفی همکار (رفرال)', pageName: 'referral' },
  { to: '/stock-model', text: 'مدل سهام داری', pageName: 'stock-model' },
  { to: '/working-hours', text: 'ساعت کاری', pageName: 'working-hours' },
  { to: '/benefits', text: 'مزایا و رفاهیات', pageName: 'benefits' },
  { to: '/military-service', text: 'تسهیلات نظام وظیفه تخصصی', pageName: 'military-service' },
  { to: '/collaboration-rules', text: 'قوانین همکاری', pageName: 'collaboration-rules' },
  { to: '/requirements', text: 'نیازمندی‌ها', pageName: 'requirements' },
  { to: '/hr-contact', text: 'ارتباط با اچ آر', pageName: 'hr-contact' },
  { to: '/anonymous-system', text: 'سامانه ناشناس', pageName: 'anonymous-system' },
  { to: '/promotion', text: 'فرآیند ارتقا', pageName: 'promotion' },
  { to: '/exit-process', text: 'فرایند خروج', pageName: 'exit-process' },
  { to: '/requests', text: 'درخواست‌ها', pageName: 'requests' },
  { to: '/building', text: 'ساختمان اینجا', pageName: 'building' }
]
</script> 