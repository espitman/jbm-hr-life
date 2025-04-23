<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-7xl mx-auto border border-[#F59D24] rounded-lg p-6 bg-white shadow-lg">
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:break-inside-avoid [&>*]:mb-4 [&>*]:inline-block [&>*]:w-full">
        <div v-for="(image, index) in images" :key="index">
          <Item :image="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Item from '~/components/album/Item.vue';

// Sample data for the album with varying heights for masonry effect
const images = [
  {
    url: '/images/album/placeholder-1.jpg',
    title: 'دفتر مرکزی جاباما',
    description: 'تصویر از فضای داخلی دفتر مرکزی جاباما',
    height: '300px'
  },
  {
    url: '/images/album/placeholder-2.jpg',
    title: 'تیم جاباما',
    description: 'تصویر دسته‌جمعی تیم جاباما',
    height: '250px'
  },
  {
    url: '/images/album/placeholder-3.jpg',
    title: 'رویداد جاباما',
    description: 'تصویر از یکی از رویدادهای جاباما',
    height: '350px'
  },
  {
    url: '/images/album/placeholder-4.jpg',
    title: 'فضای کاری جاباما',
    description: 'تصویر از فضای کاری تیم جاباما',
    height: '280px'
  },
  {
    url: '/images/album/placeholder-5.jpg',
    title: 'جشن‌های جاباما',
    description: 'تصویر از جشن‌های داخلی جاباما',
    height: '320px'
  },
  {
    url: '/images/album/placeholder-6.jpg',
    title: 'محیط کار جاباما',
    description: 'تصویر از محیط کار تیم جاباما',
    height: '270px'
  },
  {
    url: '/images/album/placeholder-1.jpg',
    title: 'دفتر مرکزی جاباما',
    description: 'تصویر از فضای داخلی دفتر مرکزی جاباما',
    height: '290px'
  },
  {
    url: '/images/album/placeholder-2.jpg',
    title: 'تیم جاباما',
    description: 'تصویر دسته‌جمعی تیم جاباما',
    height: '310px'
  },
  {
    url: '/images/album/placeholder-3.jpg',
    title: 'رویداد جاباما',
    description: 'تصویر از یکی از رویدادهای جاباما',
    height: '330px'
  },
  {
    url: '/images/album/placeholder-4.jpg',
    title: 'فضای کاری جاباما',
    description: 'تصویر از فضای کاری تیم جاباما',
    height: '260px'
  },
  {
    url: '/images/album/placeholder-5.jpg',
    title: 'جشن‌های جاباما',
    description: 'تصویر از جشن‌های داخلی جاباما',
    height: '340px'
  },
  {
    url: '/images/album/placeholder-6.jpg',
    title: 'محیط کار جاباما',
    description: 'تصویر از محیط کار تیم جاباما',
    height: '280px'
  }
];
</script> 