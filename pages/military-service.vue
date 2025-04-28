<template>
  <div class="container mx-auto p-6" dir="rtl">
    <PageHeaderCard title="خدمت سربازی" :showDot="false" />
    
    <!-- Full width image -->
    <div class="w-full">
      <MilitaryCard />
    </div>
    
    <!-- Options Component -->
    <Options />
    
    <!-- Details Component -->
    <Details />

    <!-- Steps Component -->
    <StepsCanvas />
    
    <!-- Regulations Component -->
    <Regulations />
    
    <!-- Second Full width image -->
    <div class="w-full">
      <MilitaryCard2 />
    </div>

    <!-- Implementation Component -->
    <Implementation />

    <!-- Steps Canvas 2 Component -->
    <StepsCanvas2 />

    <!-- Project Component -->
    <Project />

    <!-- Contact Component -->
    <Contact />
  </div>
</template>

<script setup>
import PageHeaderCard from '@/components/ui/PageHeaderCard.vue'
import StickyHeader from '@/components/ui/StickyHeader.vue'
import Options from '@/components/military/Options.vue'
import Details from '@/components/military/Details.vue'
import StepsCanvas from '@/components/military/StepsCanvas.vue'
import StepsCanvas2 from '@/components/military/StepsCanvas2.vue'
import Regulations from '@/components/military/Regulations.vue'
import Implementation from '@/components/military/Implementation.vue'
import Project from '@/components/military/Project.vue'
import Contact from '@/components/military/Contact.vue'
import MilitaryCard from '@/components/military/MilitaryCard.vue'
import MilitaryCard2 from '@/components/military/MilitaryCard2.vue'
</script> 