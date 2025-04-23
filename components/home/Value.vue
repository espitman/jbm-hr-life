<template>
  <Section>
    <div class="max-w-6xl mx-auto p-6 py-28" dir="rtl">
      <!-- Header -->
      <div class="mb-12">
        <h3 class="text-lg font-medium text-amber-500 mb-2 text-right">ارزش های سازمان جاباما</h3>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-right">فرهنگ و ارزش های کاری</h1>
      </div>
      
      <div class="flex flex-col md:flex-row-reverse items-center">
        <!-- Values on the left -->
        <div class="w-full md:w-1/2 space-y-10 pr-8">
          <!-- Value 1: Professional Commitment -->
          <div class="flex items-start">
            <div class="border-l-2 border-amber-500 h-6 ml-3"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">تعهد حرفه ای</h3>
              <p class="text-gray-500 leading-relaxed text-right text-justify">
                ما به دنبال ارزش افزوده دو طرفه برای سازمان و همکارانمان هستیم.
              </p>
            </div>
          </div>
          
          <!-- Value 2: Ideas and Creating Solutions -->
          <div class="flex items-start">
            <div class="border-l-2 border-amber-500 h-6 ml-3"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">ایده و خلق راهکار</h3>
              <p class="text-gray-500 leading-relaxed text-right text-justify">
                ما به دنبال نظراتی برای رفع مشکلات و توسعه قوت هایم.
              </p>
            </div>
          </div>
          
          <!-- Value 3: Continuous Improvement -->
          <div class="flex items-start">
            <div class="border-l-2 border-amber-500 h-6 ml-3"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">بهبود مستمر</h3>
              <p class="text-gray-500 leading-relaxed text-right text-justify">
                ما از بهبود مستمر و راهکارهای توسعه استقبال می‌کنیم.
              </p>
            </div>
          </div>
          
          <!-- Value 4: Growth and Development -->
          <div class="flex items-start">
            <div class="border-l-2 border-amber-500 h-6 ml-3"></div>
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">رشد و توسعه</h3>
              <p class="text-gray-500 leading-relaxed text-right text-justify">
                سعی میکنیم همیشه به دنبال رشد و توسعه افراد و تیم‌ها باشیم تا همیشه در مسیر پیشرفت باشیم.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Image on the right -->
        <div class="w-full md:w-1/2 mb-10 md:mb-0">
          <img 
            src="/images/jabama-values.jpg" 
            alt="ارزش های سازمان جاباما"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from '~/components/home/Section.vue'
</script> 