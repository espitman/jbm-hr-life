<template>
  <div class="container mx-auto p-6" dir="rtl">
    <!-- Header -->
    <PageHeaderCard title="موقعیت‌های شغلی و ریفرال" :showDot="false" />
    
    <!-- Components -->
    <Introduction />
    <Program />
    <Principles />
    <Features />
    <Rewards />
    <Form />
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Introduction from '~/components/referral/Introduction.vue'
import Program from '~/components/referral/Program.vue'
import Principles from '~/components/referral/Principles.vue'
import Features from '~/components/referral/Features.vue'
import Rewards from '~/components/referral/Rewards.vue'
import Form from '~/components/referral/Form.vue'

definePageMeta({
  layout: 'default'
})
</script> 