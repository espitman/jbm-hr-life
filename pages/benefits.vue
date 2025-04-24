<template>
  <div class="container p-6" dir="rtl">
    <BenefitsHeader />
    <Subsidy />
    <Travel />
    <Gifts />
    <Education />
  </div>
</template>

<script setup>
import Travel from '~/components/benefits/Travel.vue'
import Subsidy from '~/components/benefits/Subsidy.vue'
import Gifts from '~/components/benefits/Gifts.vue'
import Education from '~/components/benefits/Education.vue'

definePageMeta({
  layout: 'default'
})
</script> 