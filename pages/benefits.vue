<template>
  <div class="container p-6" dir="rtl">
    <BenefitsHeader />
    <Subsidy />
  </div>
</template>

<script setup>
import BenefitsHeader from '~/components/benefits/Header.vue'
import Subsidy from '~/components/benefits/Subsidy.vue'

definePageMeta({
  layout: 'default'
})
</script> 