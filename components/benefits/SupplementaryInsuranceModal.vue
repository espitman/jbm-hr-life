<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[150]" @click="emit('close')">
    <div class="bg-white rounded-2xl p-6 w-full max-w-md mx-4" @click.stop>
      <div class="space-y-6">
        <template v-if="step === 1">
          <div class="text-center space-y-2">
            <h3 class="text-xl font-bold text-gray-900">بیمه تکمیلی</h3>
            <p class="text-gray-600 leading-relaxed">
              آیا می‌خواهید فرد دیگری را به جز خودتون رو به لیست افراد تحت تکفل خود اضافه کنید؟
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
            <button @click="goToStep2" class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" :disabled="selected.includes('child') && !childCount">
              ادامه
            </button>
          </div>
        </template>
        <template v-else>
          <div class="text-center space-y-2 mb-4">
            <h3 class="text-xl font-bold text-gray-900">فرم اطلاعات افراد انتخاب شده</h3>
            <p class="text-gray-600">لطفا اطلاعات زیر را برای هر فرد وارد کنید.</p>
          </div>
          <div class="space-y-8 max-h-[60vh] overflow-y-auto pr-2">
            <div v-for="(person, idx) in peopleList" :key="person.key" class="border border-amber-200 rounded-lg p-4">
              <h4 class="font-bold text-amber-600 mb-2">{{ person.label }}</h4>
              <div class="grid grid-cols-1 gap-4">
                <template v-if="person.key !== 'self'">
                  <input v-model="person.firstName" class="input" placeholder="نام" />
                  <input v-model="person.lastName" class="input" placeholder="نام خانوادگی" />
                </template>
                <input v-model="person.nationalCode" class="input" placeholder="کد ملی" />
                <input v-model="person.identityNumber" class="input" placeholder="شماره شناسنامه" />
                <div>
                  <template v-if="person.key === 'father'">
                    <input type="text" class="input bg-gray-100" value="مرد" disabled />
                  </template>
                  <template v-else-if="person.key === 'mother'">
                    <input type="text" class="input bg-gray-100" value="زن" disabled />
                  </template>
                  <template v-else>
                    <select v-model="person.gender" class="input">
                      <option value="">جنسیت</option>
                      <option value="male">مرد</option>
                      <option value="female">زن</option>
                    </select>
                  </template>
                </div>
                <input v-if="person.key === 'self'" v-model="person.iban" class="input" placeholder="شماره شبا" />
                <input v-model="person.fatherFirstName" class="input" placeholder="نام پدر" />
                <input v-if="person.key !== 'self'" v-model="person.birthDate" class="input" placeholder="تاریخ تولد (مثال: 1360/01/01)" />
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-6">
            <button @click="step = 1" class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">مرحله قبل</button>
            <button class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">ثبت اطلاعات</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
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

const user = ref(null) // Assuming user is stored in a ref

const peopleList = computed(() => {
  const list = []
  // Always add the user as the first person
  list.push({
    key: 'self',
    label: 'خود شما',
    nationalCode: user.value?.national_code || '',
    identityNumber: user.value?.identity_number || '',
    fatherFirstName: user.value?.father_first_name || '',
    iban: user.value?.iban || '',
    gender: user.value?.gender || ''
    // no birthDate, firstName, lastName for self
  })
  if (selected.value.includes('spouse')) list.push({ key: 'spouse', label: 'همسر' })
  if (selected.value.includes('father')) list.push({ key: 'father', label: 'پدر' })
  if (selected.value.includes('mother')) list.push({ key: 'mother', label: 'مادر' })
  if (selected.value.includes('child')) {
    for (let i = 1; i <= childCount.value; i++) {
      list.push({ key: `child${i}`, label: `فرزند ${i}` })
    }
  }
  // Add empty fields for dependents
  return list.map((person, idx) => {
    if (person.key === 'self') return person
    if (person.key === 'father') return { ...person, gender: 'male', nationalCode: '', identityNumber: '', firstName: '', lastName: '', fatherFirstName: '', birthDate: '' }
    if (person.key === 'mother') return { ...person, gender: 'female', nationalCode: '', identityNumber: '', firstName: '', lastName: '', fatherFirstName: '', birthDate: '' }
    return {
      ...person,
      gender: '',
      nationalCode: '',
      identityNumber: '',
      firstName: '',
      lastName: '',
      fatherFirstName: '',
      birthDate: ''
    }
  })
})

const goToStep2 = () => {
  step.value = 2
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500;
}
</style> 