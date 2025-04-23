<template>
  <div>
    <Story />
    <Timeline />
    <Info />
  </div>
</template>

<script setup>
import Story from '~/components/home/Story.vue'
import Timeline from '~/components/home/Timeline.vue'
import Info from '~/components/home/Info.vue'

definePageMeta({
  layout: 'default'
})
</script> 