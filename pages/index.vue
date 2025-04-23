<template>
  <div>
    <Story />
    <Timeline />
    <Info />
    <Benefits />
  </div>
</template>

<script setup>
import Story from '~/components/home/Story.vue'
import Timeline from '~/components/home/Timeline.vue'
import Info from '~/components/home/Info.vue'
import Benefits from '~/components/home/Benefits.vue'

definePageMeta({
  layout: 'default'
})
</script> 