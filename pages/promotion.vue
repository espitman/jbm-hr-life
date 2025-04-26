<template>
  <div class="container p-6" dir="rtl">
    <!-- Header -->
    <PageHeaderCard title="فرآیند ارتقا" :showDot="false" />
    
    <!-- Content -->
    <Definition />
    <Ladder />
    <Proficient />
    <Manager />
    <Definition2 />
    <Definition3 />
    <Time />
    <Responsibilities />
    <Conditions />
    <Decision />
    <Table />
    <Documents />
    <Acting />
    <Tech />
    <div class="flex justify-center mt-8">
      <a
        href="/pdfs/promotion.pdf"
        download
        class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow transition-colors duration-200 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9 0V4.5m0 12l-3-3m3 3l3-3" />
        </svg>
        دانلود فایل PDF فرآیند ارتقا
      </a>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Definition from '~/components/promotion/Definition.vue'
import Ladder from '~/components/promotion/Ladder.vue'
import Proficient from '~/components/promotion/Proficient.vue'
import Manager from '~/components/promotion/Manager.vue'
import Definition2 from '~/components/promotion/Definition2.vue'
import Definition3 from '~/components/promotion/Definition3.vue'
import Time from '~/components/promotion/Time.vue'
import Responsibilities from '~/components/promotion/Responsibilities.vue'
import Conditions from '~/components/promotion/Conditions.vue'
import Decision from '~/components/promotion/Decision.vue'
import Table from '~/components/promotion/Table.vue'
import Documents from '~/components/promotion/Documents.vue'
import Acting from '~/components/promotion/Acting.vue'
import Tech from '~/components/promotion/Tech.vue'

definePageMeta({
  layout: 'default'
})
</script> 