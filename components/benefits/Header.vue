<template>
  <Section>
    <div class="max-w-6xl mx-auto p-6" dir="rtl">
      <!-- Orange header card -->
      <div class="relative bg-amber-500 rounded-3xl p-16 mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-center">پکیج مزایا جاباما</h1>
        
        <!-- Website URL with smiley -->
        <div class="absolute bottom-6 left-0 right-0 text-center">
          <div class="inline-flex items-center">
            <span class="text-lg font-medium">Jabama.com</span>
          </div>
        </div>
        
        <!-- Dotted line from card to circle -->
        <svg class="absolute -bottom-32 right-8 w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180,10 Q190,100 100,180" stroke="#000" stroke-width="2" stroke-dasharray="5,5" fill="none" />
        </svg>
      </div>
      
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- People illustration on the left -->
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="bg-gray-100 rounded-full p-8">
            <img src="/images/people.svg" alt="People illustration" class="w-full h-auto" />
          </div>
        </div>
        
        <!-- Text content on the right -->
        <div class="w-full md:w-1/2 order-1 md:order-2">
          <div class="flex items-start gap-4">
            <!-- Orange circle -->
            <div class="w-6 h-6 bg-amber-500 rounded-full flex-shrink-0 mt-1"></div>
            
            <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
              <p>
                در ادامه این داکیومنت، مزایای جاباما، سقف تعیین شده برای سال جدید و نحوه استفاده از اون‌ها توضیح داده شده.
              </p>
              
              <p>
                بعد از مطالعه، اگر همچنان سوالی براتون باقی مونده بود، می‌تونید با لیلا سلطانی صحبت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from '../ui/Section.vue'

definePageMeta({
  layout: 'default'
})
</script> 