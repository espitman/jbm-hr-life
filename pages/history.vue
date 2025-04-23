<template>
  <div class="max-w-6xl mx-auto p-6" dir="rtl">
    <!-- Illustrated Banner -->
    <div class="mb-8">
      <div class="relative w-full h-48 md:h-64">
        <!-- Jabama Logo with Landmarks -->
        <svg class="w-full h-full" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Left Landmark (Tower/Minaret) -->
          <g transform="translate(150, 50)">
            <!-- Base -->
            <rect x="10" y="100" width="30" height="30" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Tower -->
            <rect x="15" y="20" width="20" height="80" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Top -->
            <path d="M15,20 L25,5 L35,20 Z" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Decorative elements -->
            <path d="M15,40 L35,40 M15,60 L35,60 M15,80 L35,80" stroke="#000" stroke-width="1" />
            <path d="M20,40 L30,60 M30,40 L20,60" stroke="#000" stroke-width="1" />
          </g>
          
          <!-- Center Landmark (Gate/Arch) -->
          <g transform="translate(350, 50)">
            <!-- Main structure -->
            <rect x="0" y="40" width="100" height="90" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Arch -->
            <path d="M30,130 L30,70 Q50,40 70,70 L70,130" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Decorative elements -->
            <rect x="-10" y="50" width="20" height="80" fill="#E9B979" stroke="#000" stroke-width="1" />
            <rect x="90" y="50" width="20" height="80" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Small towers -->
            <rect x="35" y="50" width="10" height="30" fill="#4A7C59" stroke="#000" stroke-width="1" />
            <rect x="55" y="50" width="10" height="30" fill="#4A7C59" stroke="#000" stroke-width="1" />
            <!-- Top decoration -->
            <rect x="40" y="30" width="20" height="10" fill="#E9B979" stroke="#000" stroke-width="1" />
          </g>
          
          <!-- Right Landmark (Traditional Building) -->
          <g transform="translate(550, 50)">
            <!-- Main structure -->
            <rect x="0" y="60" width="80" height="70" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Upper level -->
            <rect x="10" y="30" width="60" height="30" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Top -->
            <rect x="20" y="10" width="40" height="20" fill="#E9B979" stroke="#000" stroke-width="1" />
            <!-- Arches -->
            <path d="M20,130 L20,100 Q30,80 40,100 L40,130" fill="#E9B979" stroke="#000" stroke-width="1" />
            <path d="M40,130 L40,100 Q50,80 60,100 L60,130" fill="#E9B979" stroke="#000" stroke-width="1" />
          </g>
          
          <!-- Clouds -->
          <path d="M100,70 Q110,60 120,70 Q130,60 140,70 Q140,80 130,85 Q140,90 130,95 Q120,100 110,95 Q100,100 90,95 Q80,90 90,85 Q80,80 90,75 Q95,65 100,70" fill="white" stroke="#000" stroke-width="1" />
          <path d="M650,60 Q660,50 670,60 Q680,50 690,60 Q690,70 680,75 Q690,80 680,85 Q670,90 660,85 Q650,90 640,85 Q630,80 640,75 Q630,70 640,65 Q645,55 650,60" fill="white" stroke="#000" stroke-width="1" />
          
          <!-- Ground line -->
          <line x1="50" y1="130" x2="750" y2="130" stroke="#000" stroke-width="1" />
          
          <!-- Small bushes -->
          <circle cx="200" cy="130" r="10" fill="#4A7C59" stroke="#000" stroke-width="1" />
          <circle cx="220" cy="130" r="8" fill="#4A7C59" stroke="#000" stroke-width="1" />
          <circle cx="600" cy="130" r="10" fill="#4A7C59" stroke="#000" stroke-width="1" />
          <circle cx="620" cy="130" r="8" fill="#4A7C59" stroke="#000" stroke-width="1" />
          <circle cx="640" cy="130" r="6" fill="#4A7C59" stroke="#000" stroke-width="1" />
          
          <!-- Jabama Text -->
          <text x="400" y="100" font-size="60" font-weight="bold" text-anchor="middle" dominant-baseline="middle">جاباما</text>
        </svg>
      </div>
    </div>
    
    <!-- Divider with dot -->
    <div class="flex items-center justify-center mb-10">
      <div class="h-px bg-gray-300 w-1/3"></div>
      <div class="w-3 h-3 rounded-full bg-amber-500 mx-4"></div>
      <div class="h-px bg-gray-300 w-1/3"></div>
    </div>
    
    <!-- History Section -->
    <div class="text-center mb-10">
      <h2 class="text-2xl md:text-3xl font-bold text-amber-500">تاریخچه جاباما</h2>
    </div>
    
    <div class="space-y-6 text-gray-800 leading-relaxed text-justify">
      <p>
        جاباما در سال ۱۳۹۵ در هلدینگ علی‌بابا متولد شد. در آن زمان جاباما روی محصول هتل کار می کرد. از اواخر سال ۱۳۹۶ شروع به کار روی محصول اقامتگاه کرد و در سال ۱۳۹۹ تبدیل به یک کسب‌وکار مستقل شد تا روی پای خودش وارد بازار اقامتگاه شود و رشد بیشتری را تجربه کند. جابامایی که امروز در آن هستید، بیشتر از همه بر رشد و توسعه گردشگری و اقامت‌های غیرهتلی و بومگردی تمرکز کرده است و تبدیل به پلتفرم قدرتمندی شده که در آن مخاطب می‌تواند به صورت آنلاین اقامتگاه مورد نظر خود را با تنوع در دسته‌بندی‌های مختلف اعم از ویلا، هتل، بومگردی، خانه سنتی و سوئیت در هر جای ایران که می‌خواهد، رزرو کند.
      </p>
      
      <p>
        جاباما برای کامل کردن پازل یک سفر لذت‌بخش، در سال ۱۴۰۰ محصول جدیدی را به اقامتگاه اضافه کرد، «تجربه» نام این محصول جدید است: جایی برای شرکت در فعالیت‌های منحصربفرد با راهنماهای کاربلد و بومی و فرصتی که پیش از این برای گردشگران ایرانی در داخل مرزها به راحتی فراهم نشده بود. در راستای توسعه گردشگری و رونق بومگردی، شرکت جاوان در سال ۱۴۰۱ به عنوان شرکت زیرمجموعه جاباما متولد شد.
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 