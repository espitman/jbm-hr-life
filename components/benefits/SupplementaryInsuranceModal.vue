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
            <div v-for="person in peopleList" :key="person.key" class="border border-amber-200 rounded-lg overflow-hidden">
              <button type="button" class="w-full flex justify-between items-center px-4 py-3 bg-amber-50 rounded-t-lg focus:outline-none" @click="openAccordion = openAccordion === person.key ? null : person.key">
                <span class="font-bold text-amber-600">{{ person.label }}</span>
                <svg :class="{'rotate-180': openAccordion === person.key}" class="h-5 w-5 text-amber-600 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <transition name="accordion-fade">
                <div v-show="openAccordion === person.key" class="p-4 border-t border-amber-100 bg-white">
                  <div class="grid grid-cols-1 gap-4">
                    <template v-if="person.key !== 'self'">
                      <input v-model="person.firstName" class="input" placeholder="نام" />
                      <input v-if="!person.key.startsWith('child')" v-model="person.lastName" class="input" placeholder="نام خانوادگی" />
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
                    <input v-if="!person.key.startsWith('child')" v-model="person.fatherFirstName" class="input" placeholder="نام پدر" />
                    <input v-if="person.key !== 'self'" v-model="person.birthDate" class="input" placeholder="تاریخ تولد (مثال: 1360/01/01)" />
                  </div>
                </div>
              </transition>
            </div>
          </div>
          <div class="flex justify-between mt-6">
            <button @click="step = 1" class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">مرحله قبل</button>
            <button class="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2" @click="handleSubmit" :disabled="isSubmitting">
              <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              ثبت اطلاعات
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
const toast = useToast()
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

const user = ref(null)
const loadingUser = ref(true)

onMounted(async () => {
  try {
    const { data } = await useNuxtApp().$api.get('/api/v1/users/me')
    user.value = data
  } finally {
    loadingUser.value = false
  }
})

const openAccordion = ref('self')

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
  return list.map((person) => {
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

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const { data: userData } = await useNuxtApp().$api.get('/api/v1/users/me')
    await useNuxtApp().$api.post('/api/v1/requests', {
      full_name: `${userData.first_name} ${userData.last_name}`,
      kind: 'supplementary_insurance',
      meta: peopleList.value.map(person => ({
        key: person.key,
        value: JSON.stringify({
          firstName: person.firstName,
          lastName: person.lastName,
          nationalCode: person.nationalCode,
          identityNumber: person.identityNumber,
          gender: person.gender,
          iban: person.iban,
          fatherFirstName: person.fatherFirstName,
          birthDate: person.birthDate
        })
      }))
    })
    toast.success('درخواست شما با موفقیت ثبت شد')
    emit('close')
  } catch (error) {
    toast.error(error.message || 'خطا در ثبت اطلاعات')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500;
}
/* Accordion animation */
.accordion-fade-enter-active, .accordion-fade-leave-active {
  transition: max-height 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s;
  overflow: hidden;
}
.accordion-fade-enter-from, .accordion-fade-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-fade-enter-to, .accordion-fade-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style> 