<template>
  <div class="container mx-auto p-6" dir="rtl">
    <PageHeaderCard title="خدمت سربازی" :showDot="false" />
    
    <!-- Full width image -->
    <div class="w-full">
      <img src="/images/military/1.jpg" alt="خدمت سربازی" class="w-full" />
    </div>
    
    <!-- Options Component -->
    <Options />
    
    <!-- Details Component -->
    <Details />

    <!-- Steps Component -->
    <StepsCanvas />
  </div>
</template>

<script setup>
import PageHeaderCard from '@/components/ui/PageHeaderCard.vue'
import StickyHeader from '@/components/ui/StickyHeader.vue'
import Options from '@/components/military/Options.vue'
import Details from '@/components/military/Details.vue'
import StepsCanvas from '@/components/military/StepsCanvas.vue'
</script> 