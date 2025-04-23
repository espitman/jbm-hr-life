<template>
  <div class="min-h-screen bg-white rtl-container font-vazirmatn">
    <div class="flex flex-row-reverse">
      <!-- Main content area -->
      <div class="flex-1">
        <!-- Top navigation bar -->
        <TopNav />
        
        <!-- Main content slot -->
        <slot />
      </div>
      
      <!-- Sidebar -->
      <Sidebar />
    </div>
  </div>
</template>

<script setup>
import TopNav from '~/components/TopNav.vue'
import Sidebar from '~/components/Sidebar.vue'
</script> 