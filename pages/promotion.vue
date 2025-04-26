<template>
  <div class="container p-6" dir="rtl">
    <!-- Header -->
    <PageHeaderCard title="فرآیند ارتقا" :showDot="false" />
    
    <!-- Content -->
    <Definition />
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Definition from '~/components/promotion/Definition.vue'

definePageMeta({
  layout: 'default'
})
</script> 