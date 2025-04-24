<template>
  <Section>
    <div class="w-full px-6" dir="rtl">
      <PageHeaderCard title="پکیج مزایا جاباما" />
      
      <div class="flex flex-col md:flex-row items-center gap-8">
        <!-- People illustration on the left -->
        <div class="w-full md:w-1/2 order-2 md:order-1">
          <div class="bg-gray-100 rounded-full p-8">
            <img src="/images/people.svg" alt="People illustration" class="w-full h-auto" />
          </div>
        </div>
        
        <!-- Text content on the right -->
        <div class="w-full md:w-1/2 order-1 md:order-2">
          <div class="flex items-start gap-4">
            <!-- Orange circle -->
            <div class="w-6 h-6 bg-amber-500 rounded-full flex-shrink-0 mt-1"></div>
            
            <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
              <p>
                در ادامه این داکیومنت، مزایای جاباما، سقف تعیین شده برای سال جدید و نحوه استفاده از اون‌ها توضیح داده شده.
              </p>
              
              <p>
                بعد از مطالعه، اگر همچنان سوالی براتون باقی مونده بود، می‌تونید با لیلا سلطانی صحبت کنید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import Section from '../ui/Section.vue'
import PageHeaderCard from '../ui/PageHeaderCard.vue'

definePageMeta({
  layout: 'default'
})
</script> 