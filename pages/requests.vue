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

      <form class="mt-8 border border-gray-100 rounded-2xl p-6 bg-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <div>
              <label class="block text-gray-700 font-medium">نام و نام خانوادگی</label>
              <span class="text-sm text-gray-500">مطابق شناسنامه باشد</span>
            </div>
            <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
          </div>

          <div class="space-y-2">
            <div>
              <label class="block text-gray-700 font-medium">آدرس ایمیل سازمانی</label>
              <span class="text-sm text-gray-500">Example@jabama.com</span>
            </div>
            <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
          </div>

          <div class="col-span-2 space-y-2">
            <label class="block text-gray-700 font-medium">نوع درخواست</label>
            <select class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent">
              <option value="">انتخاب کنید</option>
              <option value="اشتغال به کار">اشتغال به کار</option>
              <option value="فیش حقوقی مهر شده">فیش حقوقی مهر شده</option>
              <option value="کسر از حقوق">کسر از حقوق</option>
              <option value="معرفی نامه">معرفی نامه</option>
              <option value="نامه حسن انجام کار">نامه حسن انجام کار</option>
              <option value="نامه تاییدیه">نامه تاییدیه</option>
              <option value="نامه سفارت">نامه سفارت</option>
            </select>
          </div>

          <div class="col-span-2 space-y-2">
            <label class="block text-gray-700 font-medium">توضیحات</label>
            <textarea rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"></textarea>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button type="submit" class="bg-amber-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors">
            ارسال درخواست
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
input, select, textarea {
  direction: rtl;
}
</style> 