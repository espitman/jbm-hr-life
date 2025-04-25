<template>
  <div class="mt-12">
    <div class="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-8">
        <div class="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900">راه‌های ارتباطی و دریافت مشاوره از دانش بنیان</h2>
      </div>

      <!-- Contact Info -->
      <div class="space-y-6 text-lg">
        <!-- Phone -->
        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div class="text-gray-600 mb-1">تلفن:</div>
            <div class="font-medium text-gray-900 tracking-wide" dir="ltr">021-91008100</div>
          </div>
        </div>

        <!-- Email -->
        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div class="text-gray-600 mb-1">ایمیل:</div>
            <a href="mailto:info@daneshbonyan.ir" class="font-medium text-amber-600 hover:text-amber-700 transition-colors" dir="ltr">
              info@daneshbonyan.ir
            </a>
          </div>
        </div>

        <!-- Website -->
        <div class="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div>
            <div class="text-gray-600 mb-1">آدرس وبسایت:</div>
            <a href="https://daneshbonyan.isti.ir" target="_blank" rel="noopener noreferrer" class="font-medium text-amber-600 hover:text-amber-700 transition-colors" dir="ltr">
              daneshbonyan.isti.ir
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 -z-10">
        <div class="w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-30"></div>
      </div>
      <div class="absolute bottom-0 left-0 -z-10">
        <div class="w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 