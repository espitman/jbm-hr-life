<template>
  <div class="max-w-6xl mx-auto p-6" dir="rtl">
    <!-- Header -->
    <h1 class="text-3xl font-bold text-center mb-10">مراحل درخواست تسهیلات امریه</h1>
    
    <!-- Process Flowchart Container -->
    <div class="border border-gray-300 rounded-3xl p-6 md:p-10 shadow-sm relative">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <!-- Column 1 -->
        <div class="flex flex-col items-center">
          <!-- Step 1 -->
          <div class="bg-purple-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>تایید درخواست توسط شرکت</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-pink-400"></div>
          
          <!-- Step 2 -->
          <div class="bg-pink-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>ثبت نام در سایت ستاد کل نیروهای مسلح</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-orange-400"></div>
          
          <!-- Step 3 -->
          <div ref="step3" class="bg-orange-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>آپلود مدارک در سامانه</p>
          </div>
          
          <!-- Dynamic Connector -->
          <div ref="connector" class="hidden md:block absolute h-1 bg-orange-400 z-10" :style="connectorStyle"></div>
          
          <!-- Horizontal Connector (visible only on mobile) -->
          <div class="md:hidden w-full h-6 flex items-center justify-center">
            <div class="h-1 w-24 bg-teal-400"></div>
          </div>
        </div>
        
        <!-- Column 2 -->
        <div class="flex flex-col items-center justify-end">
          <!-- Step 4 -->
          <div class="bg-blue-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>درخواست ترک کار و حکم امریه</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-blue-700"></div>
          
          <!-- Step 5 -->
          <div ref="step5" class="bg-blue-600 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>تایید فرد توسط ستاد</p>
          </div>
          
          <!-- Horizontal Connector (visible only on mobile) -->
          <div class="md:hidden w-full h-6 flex items-center justify-center">
            <div class="h-1 w-24 bg-teal-400"></div>
          </div>
        </div>
        
        <!-- Column 3 -->
        <div class="flex flex-col items-center">
          <!-- Step 6 -->
          <div class="bg-amber-400 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>مراجعه به پلیس +۱۰ و دریافت برگه سبز</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-lime-400"></div>
          
          <!-- Step 7 -->
          <div class="bg-lime-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>دریافت برگه سفید چند روز قبل از شروع خدمت</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-green-500"></div>
          
          <!-- Step 8 -->
          <div class="bg-green-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>شروع دوره آموزشی به مدت ۲ ماه</p>
          </div>
          
          <!-- Horizontal Connector (visible only on mobile) -->
          <div class="md:hidden w-full h-6 flex items-center justify-center">
            <div class="h-1 w-24 bg-teal-400"></div>
          </div>
        </div>
        
        <!-- Column 4 -->
        <div class="flex flex-col items-center">
          <!-- Step 9 -->
          <div class="bg-blue-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>شروع به کار در شرکت به عنوان مامور وظیفه</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-teal-400"></div>
          
          <!-- Step 10 -->
          <div class="bg-teal-500 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>ارائه نامه تاییدیه به معاونت علمی</p>
          </div>
          
          <!-- Connector -->
          <div class="h-6 w-1 bg-teal-400"></div>
          
          <!-- Step 11 -->
          <div class="bg-teal-400 text-white rounded-lg p-4 w-full text-center shadow-md h-24 flex items-center justify-center">
            <p>دریافت برگه امریه (روز آخر دوره آموزشی)</p>
          </div>
        </div>
      </div>
      
      <!-- Horizontal Connectors (visible only on desktop) -->
      <div class="hidden md:block relative">
        <!-- Connectors removed as requested -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const step3 = ref(null)
const step5 = ref(null)
const connector = ref(null)

const connectorStyle = computed(() => {
  if (!step3.value || !step5.value) return {}
  
  const step3Rect = step3.value.getBoundingClientRect()
  const step5Rect = step5.value.getBoundingClientRect()
  const containerRect = step3.value.parentElement.parentElement.getBoundingClientRect()
  
  const startX = step3Rect.left - containerRect.left
  const startY = step3Rect.top + (step3Rect.height / 2) - containerRect.top
  const endX = step5Rect.right - containerRect.left
  const endY = step5Rect.top + (step5Rect.height / 2) - containerRect.top
  
  const width = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))
  const angle = Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
  
  return {
    width: `${width}px`,
    transform: `rotate(${angle}deg)`,
    left: `${startX}px`,
    top: `${startY}px`,
    transformOrigin: '0 0'
  }
})

onMounted(() => {
  window.addEventListener('resize', () => {
    // Force recomputation of connectorStyle
    if (connector.value) {
      connector.value.style = connectorStyle.value
    }
  })
})
</script> 