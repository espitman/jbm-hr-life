<template>
  <Section>
    <div class="max-w-6xl mx-auto p-6" dir="rtl">
      <div class="flex flex-col md:flex-row items-start gap-8">
        <!-- Left side - Travel illustration -->
        <div class="w-full md:w-2/5 mb-8 md:mb-0 order-2 md:order-1">
          <div class="relative">
            <div class="w-64 h-64 md:w-80 md:h-80 mx-auto"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/flight.svg" 
                alt="Flight illustration" 
                class="w-full h-auto max-w-xs"
              />
            </div>
          </div>
        </div>
        
        <!-- Right side - Content -->
        <div class="w-full md:w-3/5 order-1 md:order-2">
          <!-- Header -->
          <div class="flex items-center justify-start mb-6">
            <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
            <h1 class="text-2xl md:text-3xl font-bold">تسهیلات اقامت و سفر</h1>
          </div>
          
          <!-- Jabama Travel Facilities -->
          <div class="mb-8">
            <h2 class="text-xl font-bold mb-4">تسهیلات سفر از جاباما:</h2>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 bg-amber-500 rounded-full flex-shrink-0 mt-1"></div>
              <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
                <p>
                  می‌توانید با درخواست شارژ پنل جاباما، تا سقف اعتبار تعیین شده نسبت به مدت همکاری و تا 
                  <span class="font-bold">حداکثر ۵۰.۰۰۰.۰۰۰ تومان</span>، 
                  به صورت قسطی و بازپرداخت ۱۰ ماهه از جاباما خرید کنید.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Alibaba Travel Facilities -->
          <div class="mb-8">
            <h2 class="text-xl font-bold mb-4">تسهیلات سفر از علی‌بابا:</h2>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 bg-amber-500 rounded-full flex-shrink-0 mt-1"></div>
              <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
                <p>
                  می‌توانید با درخواست شارژ پنل آلترابو، تا سقف اعتبار تعیین شده نسبت به مدت همکاری و تا 
                  <span class="font-bold">حداکثر ۱۰۰.۰۰۰.۰۰۰ تومان</span>، 
                  به صورت قسطی و بازپرداخت ۱۰ ماهه از علی‌بابا خرید کنید.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Credit Limit Table -->
          <div>
            <h2 class="text-xl font-bold mb-4 text-center">سقف اعتبار سفر</h2>
            <div class="border rounded-lg overflow-hidden">
              <div class="grid grid-cols-2">
                <!-- Table Headers -->
                <div class="bg-amber-500 p-3 text-center font-bold border-l border-white">مدت همکاری</div>
                <div class="bg-amber-500 p-3 text-center font-bold">سقف اعتبار</div>
                
                <!-- Row 1 -->
                <div class="bg-amber-100 p-3 text-center border-l border-white">سه ماه</div>
                <div class="bg-amber-100 p-3 text-center">۲۵درصد حقوق خالص</div>
                
                <!-- Row 2 -->
                <div class="bg-amber-200 p-3 text-center border-l border-white">شش ماه</div>
                <div class="bg-amber-200 p-3 text-center">۵۰درصد حقوق خالص</div>
                
                <!-- Row 3 -->
                <div class="bg-amber-100 p-3 text-center border-l border-white">نه ماه</div>
                <div class="bg-amber-100 p-3 text-center">۷۵درصد حقوق خالص</div>
                
                <!-- Row 4 -->
                <div class="bg-amber-200 p-3 text-center border-l border-white">یک سال</div>
                <div class="bg-amber-200 p-3 text-center">یک حقوق خالص کامل</div>
                
                <!-- Row 5 -->
                <div class="bg-amber-100 p-3 text-center border-l border-white">دو سال</div>
                <div class="bg-amber-100 p-3 text-center">دو حقوق خالص کامل</div>
                
                <!-- Row 6 -->
                <div class="bg-amber-200 p-3 text-center border-l border-white">سه سال</div>
                <div class="bg-amber-200 p-3 text-center">سه حقوق خالص کامل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from '~/components/ui/Section.vue'
</script> 