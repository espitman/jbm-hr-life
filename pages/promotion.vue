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
    <Definition3 />
    <Time />
    <Responsibilities />
    <Conditions />
    <Decision />
    <Table />
    <Documents />
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import Definition from '~/components/promotion/Definition.vue'
import Ladder from '~/components/promotion/Ladder.vue'
import Proficient from '~/components/promotion/Proficient.vue'
import Manager from '~/components/promotion/Manager.vue'
import Definition2 from '~/components/promotion/Definition2.vue'
import Definition3 from '~/components/promotion/Definition3.vue'
import Time from '~/components/promotion/Time.vue'
import Responsibilities from '~/components/promotion/Responsibilities.vue'
import Conditions from '~/components/promotion/Conditions.vue'
import Decision from '~/components/promotion/Decision.vue'
import Table from '~/components/promotion/Table.vue'
import Documents from '~/components/promotion/Documents.vue'

definePageMeta({
  layout: 'default'
})
</script> 