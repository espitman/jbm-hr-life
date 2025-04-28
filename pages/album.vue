<template>
  <div class="container mx-auto px-3 py-6">
    <div class="grid grid-cols-12 gap-6">
      <div
        v-for="(image, idx) in images"
        :key="idx"
        :class="getGridClass(idx)"
      >
        <img
          :src="image.url"
          :alt="image.title || 'Album photo'"
          class="w-full h-96 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Use your real images array here
const images = [
  { url: 'https://picsum.photos/id/0/5000/3333' },
  { url: 'https://picsum.photos/id/1/5000/3333' },
  { url: 'https://picsum.photos/id/2/5000/3333' },
  { url: 'https://picsum.photos/id/3/5000/3333' },
  { url: 'https://picsum.photos/id/4/5000/3333' },
  { url: 'https://picsum.photos/id/5/5000/3334' },
  { url: 'https://picsum.photos/id/6/5000/3333' },
  { url: 'https://picsum.photos/id/7/4728/3168' },
  { url: 'https://picsum.photos/id/8/5000/3333' },
  { url: 'https://picsum.photos/id/9/5000/3269' },
  { url: 'https://picsum.photos/id/10/2500/1667' },
  { url: 'https://picsum.photos/id/11/2500/1667' },
  { url: 'https://picsum.photos/id/12/2500/1667' },
  { url: 'https://picsum.photos/id/13/2500/1667' },
  { url: 'https://picsum.photos/id/14/2500/1667' },
  { url: 'https://picsum.photos/id/15/2500/1667' },
  { url: 'https://picsum.photos/id/16/2500/1667' },
  { url: 'https://picsum.photos/id/17/2500/1667' },
  { url: 'https://picsum.photos/id/18/2500/1667' },
  { url: 'https://picsum.photos/id/19/2500/1667' },
  { url: 'https://picsum.photos/id/20/3670/2462' },
  { url: 'https://picsum.photos/id/21/3008/2008' },
  { url: 'https://picsum.photos/id/22/4434/3729' },
  { url: 'https://picsum.photos/id/23/3887/4899' },
  { url: 'https://picsum.photos/id/24/4855/1803' },
  { url: 'https://picsum.photos/id/25/5000/3333' },
  { url: 'https://picsum.photos/id/26/4209/2769' },
  { url: 'https://picsum.photos/id/27/3264/1836' },
  { url: 'https://picsum.photos/id/28/4928/3264' },
  { url: 'https://picsum.photos/id/29/4000/2670' }
]

function getGridClass(idx) {
  // 3 columns per row
  const pos = idx % 3
  const row = Math.floor(idx / 3) % 3
  // Row 1: 25% | 50% | 25%
  if (row === 0) {
    if (pos === 0) return 'col-span-3'
    if (pos === 1) return 'col-span-6'
    if (pos === 2) return 'col-span-3'
  }
  // Row 2: 50% | 25% | 25%
  if (row === 1) {
    if (pos === 0) return 'col-span-6'
    if (pos === 1) return 'col-span-3'
    if (pos === 2) return 'col-span-3'
  }
  // Row 3: 25% | 25% | 50%
  if (row === 2) {
    if (pos === 0) return 'col-span-3'
    if (pos === 1) return 'col-span-3'
    if (pos === 2) return 'col-span-6'
  }
  return 'col-span-4'
}
</script> 