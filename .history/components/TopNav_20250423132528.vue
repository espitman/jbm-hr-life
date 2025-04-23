<template>
  <div class="flex flex-row-reverse justify-between items-center p-4 border-b rtl-container">
    <!-- Left side navigation items (appears on right in RTL) -->
    <div class="flex items-center space-x-reverse space-x-8">
      <a href="#" class="text-gray-600 hover:text-gray-900">ارتباط با جاباما</a>
      <a href="#" class="text-gray-600 hover:text-gray-900">آلبوم</a>
      <a href="#" class="text-amber-500 font-medium">صفحه اصلی</a>
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

<style scoped>
.top-nav {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  width: auto;
}

.nav-right {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #111827;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4B5563;
}
</style> 