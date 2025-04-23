<template>
  <div>
    <Story />
    <Timeline />
    <Info />
    <Benefits />
    <Value />
    <Features />
  </div>
</template>

<script setup>
import Story from '~/components/home/Story.vue'
import Timeline from '~/components/home/Timeline.vue'
import Info from '~/components/home/Info.vue'
import Benefits from '~/components/home/Benefits.vue'
import Value from '~/components/home/Value.vue'
import Features from '~/components/home/Features.vue'

definePageMeta({
  layout: 'default'
})
</script> 