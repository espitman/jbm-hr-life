<template>
  <div class="container p-6">
    <PageHeaderCard 
      title="ارسال درخواست"
      :showDot="false"
    />
    
    <div class="">
      <div class="space-y-4 text-gray-500 leading-relaxed text-justify">
        <p>
          لطفا هر درخواستی از تیم منابع‌انسانی جاباما داشتید اعم از فیش حقوقی، نامه‌ی اشتغال به کار و... فرم زیر را تکمیل کرده و ارسال کنید تا در اسرع وقت باهاتون ارتباط بگیریم.
        </p>
        <p class="font-semibold">
          حتما تمامی فیلدهای زیر رو به درستی تکمیل بفرمایید تا در زمان کمتری بتونیم پیگیر کارتون باشیم.
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="mt-8 border border-gray-100 rounded-2xl p-6 bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="col-span-1 md:col-span-1 space-y-2">
            <div>
              <label class="block text-gray-700 font-medium">نام و نام خانوادگی</label>
              <span class="text-sm text-gray-500">مطابق شناسنامه باشد</span>
            </div>
            <input v-model="formData.full_name" type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
          </div>

          <div class="col-span-1 md:col-span-1 space-y-2">
            <label class="block text-gray-700 font-medium">نوع درخواست</label>
            <span class="text-sm text-gray-500">انتخاب کنید</span>
            <select v-model="formData.kind" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
              <option value="">انتخاب کنید</option>
              <option value="employment">اشتغال به کار</option>
              <option value="payroll_stamped">فیش حقوقی مهر شده</option>
              <option value="salary_deduction">کسر از حقوق</option>
              <option value="introduction_letter">معرفی نامه</option>
              <option value="good_conduct_letter">نامه حسن انجام کار</option>
              <option value="confirmation_letter">نامه تاییدیه</option>
              <option value="embassy_letter">نامه سفارت</option>
            </select>
          </div>

          <div class="col-span-1 md:col-span-2 space-y-2">
            <label class="block text-gray-700 font-medium">توضیحات</label>
            <textarea v-model="formData.description" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button type="submit" :disabled="loading" class="bg-amber-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {{ loading ? 'در حال ارسال...' : 'ارسال درخواست' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useNuxtApp } from '#app'

definePageMeta({
  layout: 'default'
})

const { $api } = useNuxtApp()
const toast = useToast()

const formData = ref({
  full_name: '',
  kind: '',
  description: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  try {
    loading.value = true
    await $api.post('/api/v1/requests', formData.value)
    // Reset form after successful submission
    formData.value = {
      full_name: '',
      kind: '',
      description: ''
    }
    // Show success message
    toast.success('درخواست شما با موفقیت ثبت شد')
  } catch (error) {
    console.error('Error submitting request:', error)
    toast.error('خطا در ثبت درخواست. لطفا دوباره تلاش کنید')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
input, select, textarea {
  direction: rtl;
}
</style> 