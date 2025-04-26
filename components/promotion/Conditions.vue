<template>
  <div class="w-full bg-white p-8">
    <!-- Main Title -->
    <div class="flex items-center justify-start mb-8">
      <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
      <h2 class="text-2xl font-bold">شرایط ارتقا</h2>
    </div>

    <!-- Main Content -->
    <div class="space-y-8">
      <!-- Warning Box -->
      <div class="bg-red-50 border border-red-200 rounded-lg p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p class="mr-3 text-red-700">داشتن هرگونه مورد انضباطی موجب کنار گذاشته شدن فرد از فرآیند ارتقا می‌شود.</p>
        </div>
      </div>

      <!-- Applicability Section -->
      <div class="bg-blue-50 rounded-lg p-6">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center ml-3">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-blue-800">قابلیت اطلاق</h3>
        </div>
        <div class="space-y-4 text-gray-700">
          <p>ارتقا به یک پوزیشن در صورتی ممکن است که رده مقصد، قابلیت اطلاق داشته باشد. این مطلب با توجه به نردبان شغلی آن پوزیشن خاص قابل مشاهده است.</p>
          <div class="bg-white p-4 rounded-lg">
            <p class="font-medium mb-2">مثال:</p>
            <ul class="list-disc pr-6 space-y-2">
              <li>برای پوزیشن نیروی خدمات ممکن است بیشتر از رده کارشناس ارشد قابل تعریف نباشد</li>
              <li>برای پوزیشن دیجیتال مارکتر، رده کارشناس ارشد هم قابل تعریف باشد</li>
            </ul>
          </div>
          <p>همچنین این قابلیت اطلاق درمورد نیازمندی آن واحد برای لول سازمانی مورد نظر هم صدق می‌کند.</p>
          <div class="bg-white p-4 rounded-lg">
            <p class="font-medium mb-2">مثال:</p>
            <p>ممکن است فردی در لول سازمانی Manager باشد اما آن واحد براساس چارت، نیازمندی لول سازمانی Director را نداشته باشد.</p>
          </div>
        </div>
      </div>

      <!-- Performance Section -->
      <div class="bg-purple-50 rounded-lg p-6">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center ml-3">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-purple-800">بررسی عملکرد</h3>
        </div>
        <div class="space-y-4 text-gray-700">
          <p>در بررسی عملکرد هر دو امتیاز Above=3 با یک امتیاز Outstanding=4 برابری می‌کند.</p>
          <div class="bg-white p-4 rounded-lg">
            <p class="font-medium">یعنی اگر نیازمندی مربوط به ارتقا دو سیکل نمره Above=3 باشد، فرد با یک امتیاز Outstanding=4 با تایید مدیر ارشد می‌تواند وارد کمیته ارتقا شود.</p>
          </div>
        </div>
      </div>

      <!-- Assessment Tools Section -->
      <div class="bg-green-50 rounded-lg p-6">
        <div class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ml-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-green-800">ابزارهای سنجش</h3>
        </div>
        <div class="space-y-4 text-gray-700">
          <p>ابزارهای سنجش در رده‌های مختلف متفاوت هستند که توانمندی‌های نهان فرد برای فعالیت در رده سازمانی جدید را مورد بررسی قرار می‌دهد. این معیار معطوف به پوزیشن مقصد است و می‌تواند شامل موارد زیر باشد:</p>
          
          <!-- Competency Interview -->
          <div class="bg-white p-4 rounded-lg">
            <h4 class="font-bold text-lg mb-2">مصاحبه شایستگی محور داخلی یا خارجی:</h4>
            <p class="mb-2">مصاحبه شایستگی محور، اختیاری است و می‌تواند به عنوان یکی از ابزارهای ارزیابی در نظر گرفته شود.</p>
            <ul class="list-disc pr-6 space-y-2">
              <li>مصاحبه داخلی توسط مدیر فرد یا مدیر ارشد دپارتمان و HRBP انجام می‌شود.</li>
              <li>مصاحبه شایستگی محور خارجی توسط فرد بیرونی انجام می‌شود.</li>
              <li>در اینجا شایستگی‌های شرح شغل مقصد، ورودی در نظر گرفته خواهند شد.</li>
            </ul>
          </div>

          <!-- Assessment Methods -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-bold mb-2">ارزیابی فنی</h4>
              <p>بررسی تکنیکال که می‌تواند در قالب مصاحبه، تسک، کیس استادی یا ... انجام شود.</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-bold mb-2">فیدبک ۳۶۰</h4>
              <p>ارزیابی شدن فرد بر مبناى شایستگی‌ها توسط خود، ذینفعان پایین رده، هم رده و بالارده.</p>
            </div>
            <div class="bg-white p-4 rounded-lg">
              <h4 class="font-bold mb-2">مدت زمان حضور</h4>
              <p>حداقل زمان حضور در پوزیشن مبدا</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script> 