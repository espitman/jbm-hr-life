<template>
  <div class="mt-auto p-4 bg-amber-100 border-t border-amber-100">
    <div class="flex items-center">
      <div class="flex-shrink-0">
        <img
          class="h-10 w-10 rounded-full object-cover"
          src="https://ui-avatars.com/api/?name=Test+User&background=amber-500&color=fff"
          alt="User avatar"
        />
      </div>
      <div class="mr-3 flex-1">
        <p class="text-sm font-medium text-gray-900">Test User</p>
        <NuxtLink
          to="/logout"
          class="text-xs text-amber-600 hover:text-amber-700 flex items-center mt-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          خروج از سیستم
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// No need for auth and toast imports anymore
</script> 