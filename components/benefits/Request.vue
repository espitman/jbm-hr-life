<template>
  <div class="max-w-6xl mx-auto p-6" dir="rtl">
    <!-- Request Buttons -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <!-- Marriage and Child Birth Gift -->
      <div class="border border-amber-500 rounded-lg p-4 flex flex-col items-center">
        <h3 class="text-lg font-bold text-amber-500 mb-4 text-center">هدیه ازدواج و تولد فرزند</h3>
        <button 
          @click="handleBenefitClick('marriage')"
          class="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg mt-auto hover:bg-amber-600 transition duration-300 w-full text-center"
        >
          ثبت درخواست
        </button>
      </div>
      
      <!-- Development and Learning -->
      <div class="border border-amber-500 rounded-lg p-4 flex flex-col items-center">
        <h3 class="text-lg font-bold text-amber-500 mb-4 text-center">توسعه و یادگیری</h3>
        <a href="https://survey.porsline.ir/s/JCHrO4I" target="_blank" class="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg mt-auto hover:bg-amber-600 transition duration-300 w-full text-center">
          ثبت درخواست
        </a>
      </div>
      
      <!-- Travel Facilities Request -->
      <div class="border border-amber-500 rounded-lg p-4 flex flex-col items-center">
        <h3 class="text-lg font-bold text-amber-500 mb-4 text-center">درخواست تسهیلات سفر</h3>
        <a href="https://survey.porsline.ir/s/2O7tLvQ" target="_blank" class="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg mt-auto hover:bg-amber-600 transition duration-300 w-full text-center">
          ثبت درخواست
        </a>
      </div>
      
      <!-- Supplementary Insurance -->
      <div class="border border-amber-500 rounded-lg p-4 flex flex-col items-center">
        <h3 class="text-lg font-bold text-amber-500 mb-4 text-center">بیمه تکمیلی</h3>
        <a href="https://survey.porsline.ir/s/Fy5PfPA" target="_blank" class="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg mt-auto hover:bg-amber-600 transition duration-300 w-full text-center">
          ثبت درخواست
        </a>
      </div>
    </div>

    <!-- Marriage and Child Birth Request Modal -->
    <MarriageChildBirthRequestModal 
      v-if="showMarriageChildBirthModal"
      @close="showMarriageChildBirthModal = false"
      @submit="handleMarriageChildBirthSubmit"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MarriageChildBirthRequestModal from './MarriageChildBirthRequestModal.vue'

const showMarriageChildBirthModal = ref(false)

const handleBenefitClick = (benefit) => {
  if (benefit === 'marriage') {
    showMarriageChildBirthModal.value = true
  }
}

const handleMarriageChildBirthSubmit = (benefit) => {
  console.log('Benefit request submitted:', benefit)
  showMarriageChildBirthModal.value = false
}
</script> 