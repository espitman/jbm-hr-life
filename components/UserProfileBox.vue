<template>
  <div class="mt-auto bg-amber-100 border-t border-amber-200 md:border-t-0 md:border-b border-amber-200 sticky bottom-0">
    <div class="p-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img
            class="h-12 w-12 rounded-full object-cover ring-2 ring-amber-500"
            src="https://ui-avatars.com/api/?name=Test+User&background=amber-500&color=fff"
            alt="User avatar"
          />
        </div>
        <div class="mr-3 flex-1">
          <p class="text-base font-medium text-gray-900">Test User</p>
          <NuxtLink
            to="/logout"
            class="text-sm text-amber-600 hover:text-amber-700 flex items-center mt-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            خروج از سیستم
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No need for any imports or logic
</script> 