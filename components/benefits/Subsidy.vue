<template>
  <div class="max-w-6xl mx-auto p-6" dir="rtl">
    <div class="flex flex-col md:flex-row items-start gap-8">
      <!-- Right side - Content -->
      <div class="w-full md:w-3/5 order-1 md:order-1">
        <!-- Lunch-Dinner Subsidy Section -->
        <div class="mb-8">
          <div class="flex items-center justify-start mb-4">
            <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
            <h2 class="text-2xl font-bold">سوبسید ناهار-شام</h2>
          </div>
          
          <!-- Subsidy Table -->
          <div class="border rounded-lg overflow-hidden mb-8">
            <div class="grid grid-cols-2">
              <!-- Table Headers -->
              <div class="bg-amber-500 p-3 text-center font-bold border-l border-white">بازه حقوقی</div>
              <div class="bg-amber-500 p-3 text-center font-bold">سوبسید اختصاصی (تومان)</div>
              
              <!-- Row 1 -->
              <div class="bg-amber-100 p-3 text-center border-l border-white border-t border-amber-200">حقوق ناخالص کمتر از 18 میلیون تومان</div>
              <div class="bg-amber-100 p-3 text-center border-t border-amber-200">2.800.000</div>
              
              <!-- Row 2 -->
              <div class="bg-amber-200 p-3 text-center border-l border-white border-t border-amber-200">حقوق ناخالص بین 18 تا 30 میلیون تومان</div>
              <div class="bg-amber-200 p-3 text-center border-t border-amber-200">2.250.000</div>
              
              <!-- Row 3 -->
              <div class="bg-amber-100 p-3 text-center border-l border-white border-t border-amber-200">حقوق ناخالص بین 30 تا 50 میلیون تومان</div>
              <div class="bg-amber-100 p-3 text-center border-t border-amber-200">1.500.000</div>
              
              <!-- Row 4 -->
              <div class="bg-amber-200 p-3 text-center border-l border-white border-t border-amber-200">حقوق ناخالص بین 50 تا 100 میلیون تومان</div>
              <div class="bg-amber-200 p-3 text-center border-t border-amber-200">1.000.000</div>
            </div>
          </div>
        </div>
        
        <!-- Snacks Section -->
        <div class="mb-8">
          <div class="flex items-center justify-start mb-4">
            <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
            <h2 class="text-2xl font-bold">میان وعده: رایگان</h2>
          </div>
        </div>
        
        <!-- Explanation Section -->
        <div class="mb-8 text-right text-gray-800 leading-relaxed">
          <h3 class="font-bold mb-2">توضیحات سوبسید ناهار-شام:</h3>
          <p class="mb-2">
            از ابتدای اردیبهشت ماه سوبسید غذا افزایش پیدا کرده و به صورت نقدی به بن کارت همکاران واریز میشود. هزینه کامل غذا از حقوق ماه بعد همکار کسر می شود و سوبسید غذای هر ماه تا 20 ام ماه بعد به حساب بن کارت شما پرداخت می شود. برای مثال هزینه غذای اردیبهشت ماهتون از حقوق خرداد کسر میشه و همچنین شما میتونید سوبسید اردیبهشت ماهتون رو تا 20 خرداد از طریق بن کارتتون دریافت کنید.
          </p>
          <p>
            بن کارت قابلیت استفاده برای هر نوع خریدی که داشته باشید رو داره اعم از خریدهای آنلاین.
          </p>
        </div>
        
        <!-- Guide Button -->
        <button class="w-full bg-amber-500 text-center py-4 rounded-lg font-bold hover:bg-amber-400 transition duration-300">
          راهنمای استفاده از سامانه غذا
        </button>
      </div>
      
      <!-- Left side - Food illustration -->
      <div class="w-full md:w-2/5 mb-8 md:mb-0 order-2 md:order-2">
        <img 
          src="/images/flowerpot.svg" 
          alt="Flowerpot illustration" 
          class="w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 