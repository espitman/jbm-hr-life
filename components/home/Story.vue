<template>
  <Section>
    <div class="max-w-6xl mx-auto p-6">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left side: RTL Text Content (now first in RTL) -->
        <div class="w-full md:w-1/2 md:pl-8" dir="rtl">
          <h1 class="text-3xl md:text-4xl font-bold mb-6 text-right">
            <span class="text-black">قصه </span>
            <span class="text-amber-500">جاباما</span>
            <span class="text-amber-500">...</span>
          </h1>
          
          <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
            <p>
              اگر بخواهیم از یکی از مهمترین دستاوردهایی که با سفر به وجود می‌آید یاد کنیم،
              آشنایی با فرهنگ و نوع زندگی افراد در نقاط مختلف است. برخورد از نزدیک با فرهنگ،
              سبک زندگی، غذا، نوع پوشش و گاهی طرز فکر آنها در اقلیم دیگر که تنها با سفر میسر
              می‌شود. البته این فرصت با زندگی کردن در خانه‌ای که توسط یک بومی طراحی و ساخته
              شده بیشتر از یک هتل در همان شهر احساس می‌شود و با همنشینی با یک میزبان در
              آنجا شکل واقعی‌تری به خودش می‌گیرد.
            </p>
            
            <p>
              جاباما به عنوان پلتفرمی که اقامتگاه‌های متنوعی را در سراسر ایران در دسترس قرار
              می‌دهد. بیشترین نقش را در رویارویی و آشنایی افراد با فرهنگ و سبک زندگی مختلف در
              مناطق گوناگون سرزمین را دارد. دقیقا جایی که ما می‌توانیم دست دوستی به سمت فرد
              دیگری در این مرز و بوم دراز کنیم و با یک سلام قصه یک دیدار و آشنایی با فرهنگ او را
              به دست آوریم که این به خودی خود شروع یک اتفاق تازه است. در کنار این موضوع در
              یک نگاه به افراد حاضر در مجموعه می‌توان به این موضوع رسید که ما جاباما‌یی‌ها هر
              کدام از فرهنگ و اقلیم مختلفی کنار هم آمده‌ایم و نقطه شروع آشنایی ما
              جاباماست. افراد حاضر در این مجموعه نمونه‌ای از افرادی هستند که در این مرز و بوم
              زندگی می‌کنند و با یک دیدار باب آشنایی و همسیری آن‌ها آغاز می‌شود.
            </p>
          </div>
        </div>
        
        <!-- Right side: Image (now second in RTL) -->
        <div class="w-full md:w-1/2 mb-8 md:mb-0">
          <img 
            src="/images/jabama-story.jpg" 
            alt="Jabama illustration" 
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from './Section.vue'
</script> 