<template>
  <div>
    <!-- Mobile Menu Button -->
    <button 
      @click="isOpen = !isOpen"
      class="fixed top-6 left-4 z-[10000] bg-white text-gray-600 rounded-lg p-2  md:hidden"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isOpen"
      class="fixed inset-0 bg-black/50 z-[9999]"
      @click="isOpen = false"
    ></div>

    <!-- Mobile Menu Content -->
    <div 
      :class="[
        'fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-[10000]',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full">
        <!-- User Profile Box -->
        <UserProfileBox />

        <div class="p-6 flex-1 overflow-y-auto">
          <h2 class="text-xl font-bold text-gray-900 mb-6">فهرست آشنایی!</h2>
          
          <!-- Menu Items -->
          <nav class="space-y-4">
            <NuxtLink 
              v-for="item in menuItems" 
              :key="item.to"
              :to="item.to"
              :class="{ 'text-amber-500 font-medium': $route.path === item.to, 'text-gray-700 hover:text-gray-900': $route.path !== item.to }"
              class="flex items-center gap-2 block"
              @click="isOpen = false"
            >
              <PageIcon :pageName="item.pageName" size="sm" :color="$route.path === item.to ? 'amber-500' : 'gray-700'" />
              {{ item.text }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageIcon from './ui/PageIcon.vue'
import UserProfileBox from './UserProfileBox.vue'

const isOpen = ref(false)

const menuItems = [
  { to: '/', text: 'صفحه اصلی', pageName: 'home' },
  { to: '/history', text: 'تاریخچه جاباما', pageName: 'history' },
  { to: '/referral', text: 'معرفی همکار (ریفرال)', pageName: 'referral' },
  { to: '/stock-model', text: 'مدل سهام داری', pageName: 'stock-model' },
  { to: '/working-hours', text: 'ساعت کاری', pageName: 'working-hours' },
  { to: '/benefits', text: 'مزایا و رفاهیات', pageName: 'benefits' },
  { to: '/military-service', text: 'تسهیلات نظام وظیفه', pageName: 'military-service' },
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