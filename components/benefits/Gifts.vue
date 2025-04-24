<template>
  <Section>
    <div class="max-w-6xl w-full mx-auto p-6" dir="rtl">
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- Right side - Content -->
        <div class="w-full md:w-1/2 order-1">
          <!-- Header -->
          <div class="flex items-center justify-start mb-8">
            <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
            <h1 class="text-3xl font-bold">هدایای مناسبتی</h1>
          </div>
          
          <!-- Occasions List -->
          <ul class="space-y-4 text-right text-lg">
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>یلدا</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>نوروز</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>دورهمی های سازمانی</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>تولد</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>سالگرد همکاری</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>ازدواج</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>تولد فرزند</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>آنبوردینگ</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>آفبوردینگ</span>
            </li>
            
            <li class="flex items-center justify-start">
              <div class="w-2 h-2 rounded-full bg-amber-500 ml-2"></div>
              <span>قدردانی</span>
            </li>
          </ul>
        </div>

        <!-- Left side - Gift illustration -->
        <div class="w-full md:w-1/2 order-2">
          <div class="relative">
            <img 
              src="/images/gift.svg" 
              alt="Gift illustration" 
              class="w-full h-auto"
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