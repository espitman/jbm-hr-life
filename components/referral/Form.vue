<template>
  <div class="bg-white rounded-lg p-6">
    <form class="space-y-6">
      <!-- Table Layout for Form Fields -->
      <div class="grid gap-4">
        <!-- First Row: 2 columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              placeholder="نام و نام خانوادگی خودت" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="واحد سازمانی" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
        
        <!-- Second Row: 3 columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input 
              type="text" 
              placeholder="نام فرد معرفی شده" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="شماره موبایل فرد" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div>
            <input 
              type="text" 
              placeholder="موقعیت شغلی" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>
      </div>

      <!-- Redesigned Resume Upload Section -->
      <div class="mt-6">
        <label class="block mb-2 text-sm font-medium text-gray-700">فایل رزومه</label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-amber-400 transition-colors duration-300">
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-amber-500 hover:text-amber-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-400">
                <span>آپلود فایل</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" accept=".pdf,.doc,.docx">
              </label>
              <p class="pr-1">یا فایل را اینجا رها کنید</p>
            </div>
            <p class="text-xs text-gray-500">
              PDF، DOC یا DOCX تا سقف 10MB
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <button type="submit" class="w-full bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition duration-300">
          ارسال
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 