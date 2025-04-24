<template>
  <div class="container mx-auto p-6" dir="rtl">
    <!-- Hero Image with Overlay -->
    <div class="relative rounded-xl overflow-hidden mb-10">
      <img 
        src="/images/collaboration-rules.jpg" 
        alt="Collaboration rules hero image" 
        class="w-full h-auto"
      />
    </div>
    
    <!-- Divider with Dot -->
    <div class="flex items-center justify-center mb-10">
      <div class="h-px bg-gray-300 w-full"></div>
      <div class="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
    </div>
    
    <!-- Information Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <!-- Card 1: Online Meeting Etiquette -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col h-full">
        <h2 class="text-xl font-bold text-amber-500 mb-4 text-center h-14 flex items-center justify-center">آداب شرکت در جلسات آنلاین</h2>
        
        <p class="text-gray-500 leading-relaxed text-justify mb-6 flex-grow">
          حالا که بازار دورکاری و جلسات آنلاین داغ است پدیده مهم است به موضوع «آداب شرکت در جلسات آنلاین» بپردازیم. نکات ساده و طلایی که می‌تواند اثربخشی جلسات آنلاین را افزایش دهد.
        </p>
        
        <a 
          href="https://albbcloudoutlook-my.sharepoint.com/:b:/g/personal/s_azarshab_jabama_com/EaDRlGkMpjZPu6xDL-VwjhEB-np00PdyRqVHOfrx-ItG5g?e=1gdl9C"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 text-center"
        >
          اینجا بیشتر گفتیم
        </a>
      </div>
      
      <!-- Card 2: Open Office Etiquette -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col h-full">
        <h2 class="text-xl font-bold text-amber-500 mb-4 text-center h-14 flex items-center justify-center">آداب کار حرفه‌ای در open office</h2>
        
        <p class="text-gray-500 leading-relaxed text-justify mb-6 flex-grow">
          فضاهای کاری یکپارچه یا اصطلاحا اوپن آفیس ها مدت‌ها است که در فضای کاری کشور باب شده‌اند. این مدل فضاها در کنار همه‌ی مزایایی که دارند ممکن است یک سری چالش هم بوجود بیاورند.
        </p>
        
        <a 
          href="https://albbcloudoutlook-my.sharepoint.com/:b:/g/personal/s_azarshab_jabama_com/Ee7RfA96q4JBuedjJE37GIEBverxYB_GwT-eL6A2D0p6_A?e=0FRbUq"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 text-center"
        >
          اینجا بیشتر گفتیم
        </a>
      </div>
      
      <!-- Card 3: Behavioral Codes -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col h-full">
        <h2 class="text-xl font-bold text-amber-500 mb-4 text-center h-14 flex items-center justify-center">کدهای رفتاری</h2>
        
        <p class="text-gray-500 leading-relaxed text-justify mb-6 flex-grow">
          در اینجا خلاصه ای از کدهای رفتاری، که از این به بعد به آن "کد" می‌گوییم. براساس سیاست‌ها و ارزش‌های جاباما گردآوری شده است.
        </p>
        
        <a 
          href="https://albbcloudoutlook-my.sharepoint.com/:f:/g/personal/s_azarshab_jabama_com/EgJgaczZrYZOlZ272fkZjF8BjorlCvLjtC6N8GGvwkp2gA?e=YhunbT"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 text-center"
        >
          اینجا بیشتر گفتیم
        </a>
      </div>
      
      <!-- Card 4: Harassment-Free Workplace -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col h-full">
        <h2 class="text-xl font-bold text-amber-500 mb-4 text-center h-14 flex items-center justify-center">محل کاری به دور از آزار و اذیت جنسی و قلدری</h2>
        
        <p class="text-gray-500 leading-relaxed text-justify mb-6 flex-grow">
          برای اینکه بتوانیم فضای کاری ایمن و سالمی را کنار هم تجربه کنیم، بهتر است آگاهی خود را نسبت به این رفتارها و روند شکایت و بررسی افزایش دهیم.
        </p>
        
        <a 
          href="https://albbcloudoutlook-my.sharepoint.com/:b:/g/personal/s_azarshab_jabama_com/ETttDzk_FCNFhI05ePDZzAMBdsY-v6hFA8Ov2ES5bTDL1A?e=ZSQxaW"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full bg-amber-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-600 transition duration-300 text-center"
        >
          اینجا بیشتر گفتیم
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script> 