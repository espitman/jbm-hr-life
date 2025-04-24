<template>
  <div class="container mx-auto p-6" dir="rtl">
    <!-- Header -->
    <PageHeaderCard title="موقعیت‌های شغلی و ریفرال" :showDot="false" />
    
    <!-- Components -->
    <ReferralIntroduction />
    <ReferralProgram />
    <ReferralPrinciples />
    <ReferralFeatures />
    <ReferralRewards />
    <ReferralForm />
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import ReferralIntroduction from '~/components/referral/ReferralIntroduction.vue'
import ReferralProgram from '~/components/referral/ReferralProgram.vue'
import ReferralPrinciples from '~/components/referral/ReferralPrinciples.vue'
import ReferralFeatures from '~/components/referral/ReferralFeatures.vue'
import ReferralRewards from '~/components/referral/ReferralRewards.vue'
import ReferralForm from '~/components/referral/ReferralForm.vue'

definePageMeta({
  layout: 'default'
})
</script> 