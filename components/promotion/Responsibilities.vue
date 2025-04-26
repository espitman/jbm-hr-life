<template>
  <div class="w-full bg-white px-0 py-8 md:px-8">
    <div class="flex items-center justify-start mb-8">
      <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
      <h2 class="text-2xl font-bold">مسئوليتهای مدير ارشد واحد و HRBP</h2>
    </div>
    <div class="text-right grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="flex items-center mb-4 bg-amber-50 p-3 rounded-lg">
          <div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center ml-3">
            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-bold text-amber-800">مدير ارشد واحد</h4>
        </div>
        <ul class="list-disc pr-8 text-gray-700 space-y-2">
          <li>مسئوليت resultمديريت عملكرد كل ديارتمان</li>
          <li>انتخاب كانديداهاى ارتقا از بين ليست افراد حائز شرايط ارتقادر مشورت با HRBP واحد</li>
          <li>تصميم كَيرى نهايى در فرآيند ارتقا</li>
        </ul>
        
        <!-- SVG Illustration -->
        <div class="mt-8 flex justify-center">
          <svg class="w-full h-auto max-w-md" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Elements -->
            <rect x="50" y="50" width="300" height="200" rx="20" fill="#FEF3C7" opacity="0.5" />
            <circle cx="200" cy="150" r="80" fill="#FCD34D" opacity="0.3" />
            
            <!-- Person Icon -->
            <circle cx="200" cy="120" r="30" fill="#F59E0B" />
            <path d="M200 160 C 160 160, 140 200, 140 240 L 260 240 C 260 200, 240 160, 200 160 Z" fill="#F59E0B" />
            
            <!-- Document/Chart Elements -->
            <rect x="120" y="80" width="60" height="40" rx="5" fill="#F59E0B" />
            <rect x="130" y="90" width="40" height="5" rx="2" fill="white" />
            <rect x="130" y="100" width="30" height="5" rx="2" fill="white" />
            <rect x="130" y="110" width="35" height="5" rx="2" fill="white" />
            
            <!-- Arrow Up -->
            <path d="M 220 180 L 200 150 L 180 180" stroke="#F59E0B" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
            
            <!-- Decorative Elements -->
            <circle cx="100" cy="100" r="10" fill="#F59E0B" opacity="0.5" />
            <circle cx="300" cy="200" r="15" fill="#F59E0B" opacity="0.5" />
            <circle cx="150" cy="250" r="8" fill="#F59E0B" opacity="0.5" />
            <circle cx="250" cy="80" r="12" fill="#F59E0B" opacity="0.5" />
          </svg>
        </div>
      </div>
      
      <div>
        <div class="flex items-center mb-4 bg-green-50 p-3 rounded-lg">
          <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center ml-3">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-bold text-green-800">HRBP</h4>
        </div>
        <ul class="list-disc pr-8 text-gray-700 space-y-2">
          <li>اعلام ليست افراد حائز شرايط ارتقا به مدير ارشد هر واحد</li>
          <li>كَرفتن شايستكى هاى يوزيشن مقصد از مدير مستقيم براى طراحى ارزيابى ۳۶۰</li>
          <li>بركزارى ارزيابى ۳۶۰ در صورت نياز وكَزارش دهى به كميته ارتقا</li>
          <li>يكبارجه سازى اسناد مورد نياز براى ارتقا فرد در جلسه كميته</li>
          <li>بيشبرد مراحل فرآيند براى كانديداى ارتقا مطابق نحوه اجرا</li>
          <li>بيشبرد فرآيند موارد خاص ارتقا</li>
          <li>بررسى شرايط افراد براى ارتقا در موارد خاص ازجمله حالت خالى شدن يك يوزيشن ونياز به ارتقا</li>
          <li>اطلاع رسانى وهماهنكى با مديران براى بيشبرد فرآيند واطمينان از بيشبرد صحيح فرآيند مطابق اين مستند</li>
          <li>بركزارى جلسه كميته ارتقا</li>
          <li>اطلاع رسانى فرآيند در تمام مراحل به كانديداهاى ارتقا</li>
          <li>بررسى فرايند ارتقا در تمام سطوح</li>
          <li>ارسال آفر لتر براى كانديداى تاييد شده واطلاع رسانى خروجى آفر به تيم حقوق و دستمزد</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script> 