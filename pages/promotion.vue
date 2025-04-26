<template>
  <div class="container p-6" dir="rtl">
    <!-- Header -->
    <PageHeaderCard title="فرآیند ارتقا" :showDot="false" />
    
    <!-- Content Component -->
    <Content />
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Content from '~/components/promotion/Content.vue'

definePageMeta({
  layout: 'default'
})
</script> 