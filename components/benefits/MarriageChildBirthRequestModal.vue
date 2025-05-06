<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
      <div class="space-y-6">
        <!-- Welcome Message -->
        <div class="text-center space-y-2">
          <h3 class="text-xl font-bold text-gray-900">همکار عزیزم</h3>
          <p class="text-gray-600 leading-relaxed">
            سلام<br>
            خوشحالیم که در این روزهای قشنگ زندگیت کنارت هستیم.<br>
            برای دریافت هدیه ات میتونی درخواستت رو ثبت کنی.
          </p>
        </div>

        <!-- Benefit Type Selection -->
        <div class="space-y-4">
          <h4 class="text-lg font-medium text-gray-900">میخوای کدام هدیه رو دریافت کنی؟</h4>
          
          <div class="space-y-3">
            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedBenefit" 
                type="radio" 
                name="benefit" 
                value="marriage" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">هدیه ازدواج</span>
            </label>

            <label class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input 
                v-model="selectedBenefit" 
                type="radio" 
                name="benefit" 
                value="childbirth" 
                class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500"
              >
              <span class="mr-3 text-gray-700">تولد فرزند</span>
            </label>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-3">
          <button 
            @click="$emit('close')" 
            class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            انصراف
          </button>
          <button 
            @click="handleSubmit" 
            :disabled="!selectedBenefit"
            class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ثبت درخواست
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedBenefit = ref('')

const handleSubmit = () => {
  // TODO: Implement API call when provided
  console.log('Selected benefit:', selectedBenefit.value)
  // For now, just emit the selected benefit
  emit('submit', selectedBenefit.value)
}

const emit = defineEmits(['close', 'submit'])
</script> 