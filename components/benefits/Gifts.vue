<template>
  <Section>
    <div class="max-w-6xl w-full mx-auto p-6 mt-16" dir="rtl">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Right side - Content -->
        <div class="w-full md:w-1/2 order-1">
          <!-- Header -->
          <div class="flex items-center justify-start mb-8">
            <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
            <h1 class="text-3xl font-bold">هدایای مناسبتی</h1>
          </div>
          
          <!-- Occasions List -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>یلدا</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>نوروز</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>دورهمی های سازمانی</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>تولد</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>سالگرد همکاری</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>ازدواج</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>تولد فرزند</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>آنبوردینگ</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>آفبوردینگ</span>
            </div>
            
            <div class="bg-amber-500 p-4 rounded-lg text-center h-16 flex items-center justify-center">
              <span>قدردانی</span>
            </div>
          </div>
        </div>

        <!-- Left side - Gift illustration -->
        <div class="w-full md:w-1/2 order-2">
          <div class="relative flex justify-center">
            <img 
              src="/images/gift.svg" 
              alt="Gift illustration" 
              class="w-3/4 h-auto max-h-64"
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from '~/components/ui/Section.vue'
</script> 