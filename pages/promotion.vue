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
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Definition from '~/components/promotion/Definition.vue'
import Ladder from '~/components/promotion/Ladder.vue'
import Proficient from '~/components/promotion/Proficient.vue'
import Manager from '~/components/promotion/Manager.vue'
import Definition2 from '~/components/promotion/Definition2.vue'

definePageMeta({
  layout: 'default'
})
</script> 