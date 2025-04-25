<template>
  <div class="max-w-6xl mx-auto p-6" dir="rtl">
    <!-- Service Types Information -->
    <div class="mb-12 space-y-8">
      <!-- Amrieh Facilities -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-amber-500 mb-3">تسهیلات امریه:</h2>
        <p class="text-gray-800 leading-relaxed">
          افراد مشمول خدمت در صورت احراز شرایط و کسب امتیازهای لازم می توانند به عنوان انجام خدمت 
          نظام وظیفه، به عنوان مامور در طول مدت خدمت، در یکی از شرکت های دانش بنیان فعالیت کنند و 
          بعد از اتمام آن کارت پایان خدمت دریافت کنند.
        </p>
      </div>
      
      <!-- Alternative Project Facilities -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-amber-500 mb-3">تسهیلات پروژه جایگزین:</h2>
        <p class="text-gray-800 leading-relaxed">
          افراد مشمول خدمت در صورت احراز شرایط و کسب امتیازهای مصوب می توانند به عنوان انجام پروژه 
          جایگزین خدمت در شرکت های دانش بنیان دوره خدمت نظام وظیفه خود را (مشتمل بر دوره ی 
          آموزش نظامی و اجرای طرح پژوهشی، فناورانه در شرکت دانش بنیان) طی کرده و کارت پایان خدمت 
          دریافت کنند.
        </p>
      </div>
      
      <!-- Company Quota -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-amber-500 mb-3">سهمیه شرکت:</h2>
        <p class="text-gray-800 leading-relaxed">
          ظرفیت شرکت های دانش بنیان برای استفاده از تسهیلات امریه حداکثر سه نفر در سال، برای 
          تسهیلات پروژه جایگزین خدمت داخلی حداکثر یک نفر در سال است و برای تسهیلات پروژه جایگزین 
          خدمت خارجی ده نفر در سال که این ظرفیت ها قابل انتقال به سال های بعد نخواهند بود.
        </p>
      </div>
    </div>
    
    <!-- Process Steps -->
    <div class="space-y-20">
      <!-- Step 1: Send Request -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-64 h-64 bg-amber-500 rounded-full flex items-center justify-center p-4">
          <div class="w-48 h-48">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <path d="M160,60c0-22.1-17.9-40-40-40H80c-22.1,0-40,17.9-40,40v80c0,22.1,17.9,40,40,40h40c22.1,0,40-17.9,40-40V60z" fill="none" stroke="#000" stroke-width="4"/>
              <path d="M120,20H80c-22.1,0-40,17.9-40,40v80c0,22.1,17.9,40,40,40h40c22.1,0,40-17.9,40-40V60C160,37.9,142.1,20,120,20z M140,140c0,11-9,20-20,20H80c-11,0-20-9-20-20V60c0-11,9-20,20-20h40c11,0,20,9,20,20V140z" fill="none" stroke="#000" stroke-width="2"/>
              <ellipse cx="100" cy="60" rx="30" ry="20" fill="none" stroke="#000" stroke-width="4"/>
              <path d="M70,60v60c0,16.6,13.4,30,30,30s30-13.4,30-30V60" fill="none" stroke="#000" stroke-width="4"/>
            </svg>
          </div>
        </div>
        
        <div class="flex-1">
          <div class="flex items-center mb-4">
            <h2 class="text-2xl font-bold ml-2">ارسال درخواست</h2>
            <div class="w-6 h-6 rounded-full bg-amber-500"></div>
          </div>
          
          <p class="text-gray-800 leading-relaxed">
            برای درخواست استفاده از این تسهیلات به مدیر مستقیم و HRBP ایمیل بزنید
          </p>
        </div>
      </div>
      
      <!-- Step 2: HR Review -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-64 h-64 bg-amber-500 rounded-full flex items-center justify-center p-4">
          <div class="w-48 h-48">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <path d="M100,30c-20,0-36,16-36,36s16,36,36,36s36-16,36-36S120,30,100,30z M100,90c-13.2,0-24-10.8-24-24s10.8-24,24-24s24,10.8,24,24S113.2,90,100,90z" stroke="#000" stroke-width="2"/>
              <path d="M100,90c-13.2,0-24-10.8-24-24s10.8-24,24-24s24,10.8,24,24S113.2,90,100,90z" fill="none" stroke="#000" stroke-width="2"/>
              <path d="M100,66c0,0-10-30-10-36s10-10,10-10s10,4,10,10S100,66,100,66z" fill="none" stroke="#000" stroke-width="2"/>
              <rect x="60" y="110" width="80" height="60" fill="none" stroke="#000" stroke-width="4"/>
              <rect x="70" y="120" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>
              <rect x="110" y="120" width="20" height="20" fill="none" stroke="#000" stroke-width="2"/>
              <rect x="70" y="150" width="60" height="10" fill="none" stroke="#000" stroke-width="2"/>
            </svg>
          </div>
        </div>
        
        <div class="flex-1">
          <div class="flex items-center mb-4">
            <h2 class="text-2xl font-bold ml-2">بررسی توسط واحد منابع انسانی</h2>
            <div class="w-6 h-6 rounded-full bg-amber-500"></div>
          </div>
          
          <p class="text-gray-800 leading-relaxed">
            واحد منابع انسانی شرکت، بعد از دریافت درخواست ها پروسه ی بررسی را با توجه به سابقه ی افراد، میزان امتیاز آن ها که بر اساس جدول امتیاز بندی که ستاد نیروهای مسلح مشخص کرده است محاسبه می شود و اولویت بندی های شرکت، انجام می دهد.
          </p>
        </div>
      </div>
      
      <!-- Step 3: Final Approval -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="w-64 h-64 bg-amber-500 rounded-full flex items-center justify-center p-4">
          <div class="w-48 h-48">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
              <circle cx="100" cy="80" r="50" fill="none" stroke="#000" stroke-width="4"/>
              <circle cx="100" cy="80" r="40" fill="none" stroke="#000" stroke-width="2"/>
              <circle cx="100" cy="80" r="30" fill="none" stroke="#000" stroke-width="2"/>
              <circle cx="100" cy="80" r="20" fill="none" stroke="#000" stroke-width="2"/>
              <circle cx="100" cy="80" r="10" fill="none" stroke="#000" stroke-width="2"/>
              <line x1="100" y1="30" x2="100" y2="80" stroke="#000" stroke-width="4"/>
              <line x1="100" y1="80" x2="130" y2="60" stroke="#000" stroke-width="4"/>
              <rect x="60" y="140" width="80" height="40" fill="none" stroke="#000" stroke-width="4"/>
              <line x1="70" y1="150" x2="130" y2="150" stroke="#000" stroke-width="2"/>
              <line x1="70" y1="160" x2="130" y2="160" stroke="#000" stroke-width="2"/>
              <line x1="70" y1="170" x2="130" y2="170" stroke="#000" stroke-width="2"/>
            </svg>
          </div>
        </div>
        
        <div class="flex-1">
          <div class="flex items-center mb-4">
            <h2 class="text-2xl font-bold ml-2">اعلام تایید نهایی</h2>
            <div class="w-6 h-6 rounded-full bg-amber-500"></div>
          </div>
          
          <p class="text-gray-800 leading-relaxed">
            با توجه به محدودیت ظرفیت شرکت برای استفاده از تسهیلات سربازی، به کسانی که بالاترین امتیازها را کسب کرده باشند و درخواست آن ها تایید شده باشد، اطلاع رسانی خواهد شد.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script> 