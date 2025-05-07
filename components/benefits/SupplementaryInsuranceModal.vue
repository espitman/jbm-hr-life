<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]" @click="emit('close')">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4" @click.stop>
      <div class="space-y-6">
        <template v-if="step === 1">
          <div class="text-center space-y-2">
            <h3 class="text-xl font-bold text-gray-900">بیمه تکمیلی</h3>
            <p class="text-gray-600 leading-relaxed">
              آیا می‌خواهید فرد دیگری را به لیست افراد تحت تکفل خود اضافه کنید؟
            </p>
          </div>
          <div class="space-y-3">
            <label v-for="option in options" :key="option.value" class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-amber-50 transition-colors">
              <input type="checkbox" v-model="selected" :value="option.value" class="h-4 w-4 text-amber-500 border-gray-300 focus:ring-amber-500">
              <span class="mr-3 text-gray-700">{{ option.label }}</span>
            </label>
          </div>
          <div v-if="selected.includes('child')" class="mt-4">
            <label class="block text-gray-700 mb-2">تعداد فرزند:</label>
            <input type="number" v-model.number="childCount" min="1" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="تعداد فرزند">
          </div>
          <div class="flex justify-end">
            <button @click="goToStep2" class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" :disabled="selected.length === 0 || (selected.includes('child') && !childCount)">
              ادامه
            </button>
          </div>
        </template>
        <template v-else>
          <!-- Step 2 will be implemented next -->
          <div class="text-center text-gray-700">فرم اطلاعات افراد انتخاب شده (در حال توسعه...)</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['close'])

const step = ref(1)
const options = [
  { label: 'همسر', value: 'spouse' },
  { label: 'پدر', value: 'father' },
  { label: 'مادر', value: 'mother' },
  { label: 'فرزند', value: 'child' }
]
const selected = ref([])
const childCount = ref(1)

const goToStep2 = () => {
  step.value = 2
}
</script> 