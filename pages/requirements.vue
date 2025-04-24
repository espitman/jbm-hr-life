<template>
  <div class="container mx-auto p-6" dir="rtl">
    <PageHeaderCard 
      title="نیازمندی‌ها"
      :showDot="false"
    />
    
    <!-- Microsoft Teams Introduction -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-4 text-right">
        آشنایی با <span class="text-amber-500">Microsoft Teams</span>
      </h2>
      
      <p class="text-gray-500 leading-relaxed text-justify mb-6">
        در جاباما از سرویس‌های ۳۶۵ Microsoft استفاده می‌شود. شما علاوه بر ایمیل، اوت لوک و تیمز، می‌توانید از سایر سرویس‌های تحت وب مایکروسافت هم استفاده کنید. این سرویس‌ها فقط با اکانت سازمانی شما و سایر همکاران قابل دسترسی خواهد بود و استفاده از این بسترها، به حفظ محرمیت اطلاعات شرکت هم کمک خواهد کرد. همچنین می‌توانید داکیومنت آموزش نحوه رزرو اتاق از طریق Outlook را مطالعه کنید.
      </p>
      
      <!-- Microsoft Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <!-- Microsoft Visio -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/visio.png" alt="Microsoft Visio" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Visio</span>
        </div>
        
        <!-- Microsoft Forms -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/forms.png" alt="Microsoft Forms" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Forms</span>
        </div>
        
        <!-- Microsoft Visio (duplicate in original) -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/visio.png" alt="Microsoft Visio" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Visio</span>
        </div>
        
        <!-- Microsoft Excel -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/excel.png" alt="Microsoft Excel" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Excel</span>
        </div>
        
        <!-- Microsoft OneNote -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/onenote.png" alt="Microsoft OneNote" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft OneNote</span>
        </div>
        
        <!-- Microsoft Sharepoint -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/sharepoint.png" alt="Microsoft Sharepoint" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Sharepoint</span>
        </div>
        
        <!-- Microsoft Powerpoint -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/powerpoint.png" alt="Microsoft Powerpoint" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Powerpoint</span>
        </div>
        
        <!-- Microsoft Sway -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/sway.png" alt="Microsoft Sway" class="w-8 h-8 ml-3" />
          <span class="font-bold">Microsoft Sway</span>
        </div>
        
        <!-- Outlook Room Reservation -->
        <div class="border border-amber-500 rounded-lg p-3 flex items-center">
          <img src="/images/microsoft/outlook.png" alt="Microsoft Outlook" class="w-8 h-8 ml-3" />
          <span class="font-bold">داکیومنت نحوه رزرو اتاق از طریق Outlook</span>
        </div>
      </div>
    </div>
    
    <!-- Teams Channels Section -->
    <div class="mb-10">
      <h2 class="text-2xl font-bold mb-6 text-right">
        آشنایی با کانال‌های <span class="text-gray-900">جاباما و گروه علی‌بابا در</span> <span class="text-amber-500">مایکروسافت تیمز</span>
      </h2>
      
      <div class="mb-8">
        <h3 class="text-xl font-bold mb-4">Jabama Team</h3>
        
        <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
          <p>
            <span class="text-amber-500 font-bold">کانال General:</span> کانال عمومی جاباما که همه اعضای سازمان در آن حضور دارند و اطلاع‌رسانی‌های عمومی توسط منابع انسانی، از این کانال انجام می‌شود.
          </p>
          
          <p>
            <span class="text-amber-500 font-bold">کانال Jabama News:</span> در این کانال خبرنامه جاباما به صورت ماهانه منتشر می‌شود. همچنین می‌توانید همه شماره‌های خبرنامه را در این کانال ببینید.
          </p>
          
          <p>
            <span class="text-amber-500 font-bold">کانال Jabama Teammates:</span> این کانال به معرفی همکاران جدید جابامایی اختصاص دارد. از طریق این کانال به خلاصه‌ای از معرفی همکاران دسترسی خواهید داشت.
          </p>
          
          <p>
            <span class="text-amber-500 font-bold">کانال Jabama Clubs:</span> در این کانال، اطلاع رسانی‌های مربوط به ایونت‌های تفریحی و بازی‌ها و دورهمی‌ها انجام می‌شود.
          </p>
        </div>
      </div>
      
      <div class="mb-8">
        <h3 class="text-xl font-bold mb-4">Alibaba Group Team</h3>
        
        <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
          <p>
            <span class="text-amber-500 font-bold">کانال پشتیبانی IT:</span> این کانال برای ثبت مشکلات و سوالات شما در حوزه IT است.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Download Resources Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <!-- Email Signature -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col items-center">
        <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-amber-500 mb-2 text-center">امضای ایمیل سازمانی</h3>
        
        <p class="text-gray-500 leading-relaxed text-center text-sm mb-6">
          امضای موردنظر را از فایل داخل لینک زیر کپی کرده و در بخش امضای ایمیل خود بارگذاری و شخصی‌سازی کنید.
        </p>
        
        <a href="https://albbcloudoutlook-my.sharepoint.com/:f:/g/personal/s_azarshab_jabama_com/EmStBdUqXtZKnOjFyBUIEvEBFfFgVZouzDkJ2PH7jZgTgA?e=oSeeWQ" target="_blank" class="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition duration-300">
          دریافت فایل
        </a>
      </div>
      
      <!-- Presentation Template -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col items-center">
        <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-amber-500 mb-2 text-center">قالب ارائه</h3>
        
        <p class="text-gray-500 leading-relaxed text-center text-sm mb-6">
          قالب ارائه از پیش طراحی شده را از لینک زیر دانلود کرده و شخصی‌سازی کنید.
        </p>
        
        <a href="https://albbcloudoutlook-my.sharepoint.com/:f:/g/personal/s_azarshab_jabama_com/Ej-Oq83VDVxJnu4pZoJinoEBVfp5T1TWUV-61rKBVOyDjg?e=1Awd6k" target="_blank" class="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition duration-300">
          دریافت فایل
        </a>
      </div>
      
      <!-- Custom Font -->
      <div class="border border-amber-500 rounded-lg p-6 flex flex-col items-center">
        <div class="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
        
        <h3 class="text-xl font-bold text-amber-500 mb-2 text-center">فونت اختصاصی گروه علی‌بابا</h3>
        
        <p class="text-gray-500 leading-relaxed text-center text-sm mb-6">
          برای اینکه شما هم بتوانید با دست خط علی‌بابا بنویسید، این فونت را روی سیستم‌های خود نصب کنید.
        </p>
        
        <a href="https://albbcloudoutlook-my.sharepoint.com/personal/s_azarshab_jabama_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fs%5Fazarshab%5Fjabama%5Fcom%2FDocuments%2FLife%20at%20Jabama%20Handbook%2F%D9%86%DB%8C%D8%A7%D8%B2%D9%85%D9%86%D8%AF%DB%8C%20%D9%87%D8%A7%DB%8C%20%D8%A8%D8%B5%D8%B1%DB%8C%2F%D8%A7%D9%85%D8%B6%D8%A7%DB%8C%20%D8%A7%DB%8C%D9%85%DB%8C%D9%84%20%D8%B3%D8%A7%D8%B2%D9%85%D8%A7%D9%86%DB%8C&ct=1668408793561&or=Teams%2DHL&ga=1" target="_blank" class="bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition duration-300">
          دریافت فایل
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'

definePageMeta({
  layout: 'default'
})
</script> 