<template>
  <div>
    <Story />
    <Timeline />
  </div>
</template>

<script setup>
import Story from '~/components/home/Story.vue'
import Timeline from '~/components/home/Timeline.vue'

definePageMeta({
  layout: 'default'
})
</script> 