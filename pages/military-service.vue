<template>
  <div class="container mx-auto p-6" dir="rtl">
    <PageHeaderCard title="خدمت سربازی" :showDot="false" />
    
    <!-- Full width image -->
    <div class="max-w-6xl mx-auto">
      <img src="/images/military/1.jpg" alt="خدمت سربازی" class="w-full" />
    </div>
    
    <!-- Options Component -->
    <Options />
  </div>
</template>

<script setup>
import PageHeaderCard from '@/components/ui/PageHeaderCard.vue'
import Options from '@/components/military/Options.vue'
</script> 