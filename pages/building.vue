<template>
  <div class="container mx-auto p-6">
    <!-- Header -->
    <PageHeaderCard title="ساختمان جاباما" :showDot="false" />

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Right Column - Text Content -->
      <div class="flex flex-col justify-center">
        <div class="mb-8">
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">جایی که در آن یک آشنایی تازه رقم‌میخورد و پر‌است کشف و کنجکاوی دارد.</p>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">آشنایی در اینجا از جنس شناخت همدیگر، شناخت فرهنگ‌نگاری، اهداف سازمانی و نزدیک‌شدن به فرهنگ‌قوم و تیم‌های مختلف‌مان است.</p>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">معماری داخلی ساختمان، برداشتی از معماری اقامتگاه‌های جنوب ایران است. منطقه‌ای پر از لهجه و محله‌هایی با دیوارهای بومی‌گرا که با جابه‌جایی‌ها به رشد فرهنگی آن نقش‌های پراکنده و جذب نیز به رشد یا کمک سرایت کرده است.</p>
        </div>

        <div class="mb-8">
          <h2 class="text-2xl font-bold text-amber-500 mb-4">تابلوهای راهنما</h2>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">ساختمان با هدف آشنایی ما با نقوش ایرانی‌اصیل (یکی از مهمترین نمادهای سرزمین‌مان)</p>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">طراحی و از دل نقش‌فرش‌ها بیرون آمدند و در گوشه‌نشینی اینجا نقش جدیدی به عهده گرفتند.</p>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">نقش‌ها حرف‌های زیادی برای گفتن دارند و در تاریخچه فرش هر نقش مستقل خودش را ایفا کرده‌اند.</p>
        </div>

        <div class="mb-12">
          <h2 class="text-2xl font-bold text-amber-500 mb-4">اتاق جلسات</h2>
          <p class="space-y-4 text-gray-500 leading-relaxed text-justify">با شیوه‌ها و هم نشین شده‌ایم و عضو دائمی‌پذیر و هم قسمتی و وفاداری به این موضوع در طبقه‌ی دوم میدان‌ها را می‌بینید. یکی از مهمترین نمادهای شبه میدان‌های آنجا هستند. همانطور که در واقعیت میدان‌ها پر می‌شوند، سرریزند، تغییر، آماده‌سازی و تصمیم‌گیری‌ها بوده، میدان‌های اینجا هم محل برگزاری جلسات و گرفتن تصمیمات تاثیرگذار هستند. میدان‌ها قرار است لقمه‌ای نهان، فکرکردن و گرفتن تصمیمات کوچک و بزرگ در راستای اهداف ما باشند.</p>
        </div>
      </div>

      <!-- Left Column - Image -->
      <div class="rounded-lg overflow-hidden">
        <img 
          src="/images/inja/1.png" 
          alt="تصویر دفتر" 
          class="w-full h-full object-cover"
        >
      </div>
    </div>

    <!-- Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <template v-for="department in departments" :key="department.title">
        <div class="border border-amber-500 rounded-lg p-6 flex flex-col items-center">
          <img 
            :src="department.icon" 
            :alt="department.title"
            class="w-8 h-8 mb-4"
          >
          <h3 class="text-xl font-bold text-amber-500 mb-2 text-center">{{ department.title }}</h3>
          <p class="text-gray-500 leading-relaxed text-center text-sm mb-6">{{ department.description }}</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'

const departments = [
  {
    title: 'عملیات و پشتیبانی',
    icon: 'https://placehold.co/40x40/amber/white?text=OP',
    description: 'پرچم تاریخی که در دستان شماست. متعلق به تیم عملیات و پشتیبانی است. روی پرچم تیم شما کلمه‌ای در حال سرویس‌دهی است که گویای عنوان نمادی از آفرین ارتباط از راه دور انسان‌ها بوده. پرچم نقش بسته شما است.'
  },
  {
    title: 'منابع انسانی',
    icon: 'https://placehold.co/40x40/green/white?text=HR',
    description: 'پرچم سبزی که در دستان شماست. متعلق به تیم منابع انسانی است. روی پرچم تیم شما گل و گیاه‌هایی نقش بسته است که به عنوان نمادی از سرزندگی و شادابی، رشد، بالندگی، نمادی از آنچه در جابه‌جا جریان دارد.'
  },
  {
    title: 'مالی',
    icon: 'https://placehold.co/40x40/yellow/black?text=FI',
    description: 'پرچم زردی که در دستان شماست. متعلق به تیم مالی است. روی پرچم تیم شما نیز شبیه فرزند نشسته است. این نقش کیهان، جامع رازهای مادی و معنوی است که جابه‌جا برنامه روزانه در حال افزایش و گسترش است.'
  },
  {
    title: 'تجربه',
    icon: 'https://placehold.co/40x40/orange/white?text=EX',
    description: 'پرچم نارنجی که در دستان شماست. متعلق به تیم تجربه است. روی پرچم تیم شما تصویری از یک شب نشینی است. این سرزمین، نمادی از شادی، سرزندگی و تجربه‌هاییست که جابه‌جا گذاشته یا برداشته می‌شود.'
  },
  {
    title: 'بازاریابی',
    icon: 'https://placehold.co/40x40/purple/white?text=MK',
    description: 'پرچم بنفشی که در دستان شماست. متعلق به تیم بازاریابی است. روی پرچم تیم شما نقوش سفارشی رسم است. همان کاری که با بازاریابی جابه‌جا انجام می‌شود.'
  },
  {
    title: 'بازرگانی',
    icon: 'https://placehold.co/40x40/red/white?text=BS',
    description: 'پرچم قرمزی که در دستان شماست. متعلق به تیم بازرگانی است. روی پرچم تیم شما برخی بر خط کشانده که گویای تلاش شما در گسترش آشناکردن راه‌های نوین در حال بیان است.'
  },
  {
    title: 'حقوقی',
    icon: 'https://placehold.co/40x40/blue/white?text=LG',
    description: 'پرچم آبی که در دستان شماست. متعلق به تیم حقوقی است. روی پرچم تیم شما دو تراز در عدالت، توانمندی که با آن نگاه داشته و در حمایت حقوقی و جابه‌جا منافع شما را پایداری و حفاظت می‌کند.'
  },
  {
    title: 'تکنولوژی و محصول',
    icon: 'https://placehold.co/40x40/teal/white?text=TP',
    description: 'پرچم سرمه‌ای که در دستان شماست. متعلق به تیم تکنولوژی و محصول است. روی پرچم تیم شما خط‌هایی از نقطه و خطی که نشان‌گر تیم تکنولوژی شما بوده و در حال افزایش نوآوری و تولید کاربرد هستند.'
  }
]

definePageMeta({
  layout: 'default'
})
</script> 