<template>
  <div class="container p-6" dir="rtl">
    <BenefitsHeader />
    <Subsidy />
    <Travel />
  </div>
</template>

<script setup>
import BenefitsHeader from '~/components/benefits/Header.vue'
import Subsidy from '~/components/benefits/Subsidy.vue'
import Travel from '~/components/benefits/Travel.vue'

definePageMeta({
  layout: 'default'
})
</script> 