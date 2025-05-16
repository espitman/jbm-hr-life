<template>
  <div class="container mx-auto p-6">
    <JabamaLoading v-if="loading" />
    <ErrorPage v-else-if="error" :error="error" @retry="fetchDepartments" />
    <div v-else>
      <!-- Header -->
      <PageHeaderCard v-if="!error" title="ساختمان جاباما" :showDot="false" />

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Right Column - Text Content -->
        <div class="flex flex-col justify-center">
          <div class="mb-8">
            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            جـایـی‌ کـه‌ در‌اون‌ یـک‌ آشــنــایـی تـازه رقـم‌مـی‌خـورد و‌ در‌دلــش‌ کــشــف‌ و‌ کــنــجــکــاوی‌ دارد.
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            آشنایی‌ در‌ اینجا از‌ جنس‌ شناخت‌ همدیگر،‌ شناخت فـرهـنـگ‌کـاری،‌ اهـداف‌ ســازمــانـی‌ و‌ نـزدیـک‌شـدن بـه‌ فـرهـنـگ‌‌ قـوم‌ و‌ بـوم‌هـای‌ مـخـتـلـف‌ایـران است.
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            معماری‌ داخلی‌ساختمان‌ برداشتی‌ از‌ مـعـماری‌ اقـامـتـگـاه‌های‌ جنوب ایران است،‌ منطقه‌ای‌ پر‌ از‌ لبخند‌ و مهمان‌نوازی‌ با‌ زیبایی‌های‌ بی‌نظیر که‌ ما‌ جابامایی‌ها در‌ رشد‌ گردشگری اون‌ نقش‌ویژه‌ای‌ داشتیم و جنوب نیز به رشد ما کمک بسزایی کرده است.
            </p>
          </div>

          <div class="mb-8">
            <div class="flex items-center justify-start mb-6">
              <div class="w-5 h-5 rounded-full bg-amber-500 ml-2"></div>
              <h2 class="text-2xl font-bold">تابلوهای راهنما</h2>
            </div>
            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            ساختمان‌ با‌ هدف‌ آشنایی‌ ما‌ با‌ نقوش فرش‌ایرانی (یکی‌ از‌ مهم‌ترین‌ نمادهای‌ سرزمین‌مان)
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            طـراحـی‌ و‌ از‌ دل‌ نـقـش‌فـرش‌هـا‌ بـیـرون‌ آمدند و‌ در‌ گـوشـه‌گـوشـه‌ی‌ ایـنـجـا نـقـش‌ جـدیدی‌ رو‌ به‌عهده‌ گرفتند.
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            نـقـش‌ها‌ حـرف‌هـای‌ زیـادی‌ بـرای‌ گـفـتـن‌ دارند و‌ در‌ تـاریـخـچـه‌ فـرش‌ هـم‌ نـقـش‌ مـستقل‌ خودشان را ایفا‌ کرده‌اند.
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            برای‌ هر‌ تیمی بر‌اساس‌ نقوش‌ فرش‌ و‌ حفظ‌ یکپارچگی‌ در‌طراحی‌ و‌ کانسپت‌آشنایی،‌ پرچمی طراحی‌شده‌ است که‌ هم نـمـاد‌ کـاری‌ اسـت‌ کـه‌ آن‌ تـیـم‌ انـجـام‌ می‌دهد و‌ هـم‌ بـرای‌ آشـنـایـی‌ تـیـم‌هـای‌ دیـگـر بـا‌ آن‌ها بــرافــراشـتـه شـده است.
            </p>
          </div>

          <div class="mb-12">
            <div class="flex items-center justify-start mb-6">
              <div class="w-5 h-5 rounded-full bg-amber-500 ml-2"></div>
              <h2 class="text-2xl font-bold">اتاق جلسات</h2>
            </div>
            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            ما و شهرها با هم عجین شده‌ایم و عضو جدایی ناپذیری از هم هستیم با وفاداری به این موضوع. در‌ طـبـقـه‌ی‌ دوم‌ مـیـدان‌ها رو‌ مـی‌بـیـنـیـد‌، یکی از مهمترین نمادهای یک شهر میدان‌های آن‌ها هستند. هـمـانطـور‌ کـه‌ در‌ واقـعـیـت‌ مـیـدان‌ها‌ در‌ هـر‌شـهر‌ محل‌تجمع،‌ تغییر،‌ اطلاع‌رسانی و‌ تـصـمـیـم‌گـیـری‌ها‌ بـودند،‌ مـیـدان‌هـای ایـنـجـا هـم‌ محل‌ برگزاری‌ جلسات‌ و‌ گرفتن‌ تصمیمات‌ تاثیرگذار‌ هستند. میدان‌ها قرار است نقطه‌ی‌ دیدار،‌ گفت‌وگو‌ و‌ گرفتن‌ تصمیمات‌ کوچک‌ و‌ بزرگی‌ در راسـتـای‌ اهـداف‌ مـا‌ بـاشـند. 
            </p>

            <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
            و هزار‌و‌یک‌ چیز‌ دیگر در‌ گوشه‌ و‌ کنار‌ اینجا پنهان‌شده‌ تا‌ شما‌ به‌ جست‌ و جو‌ و‌ کشف‌ آن بپردازید.از‌ این‌جستجو‌ و‌ آشنایی لذت‌ ببرید.
            </p>
          </div>
        </div>

        <!-- Left Column - Image -->
        <div class="rounded-lg overflow-hidden">
          <img 
            src="/images/inja/1.png" 
            alt="تصویر دفتر" 
            class="w-full h-full object-cover"
          >
        </div>
      </div>

      <!-- Flags Section -->
      <div class="mb-12">
        <div class="flex items-center justify-start mb-6">
          <div class="w-5 h-5 rounded-full bg-amber-500 ml-2"></div>
          <h2 class="text-2xl font-bold">پرچم‌ها</h2>
        </div>
        <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
          اینجا، جایی برای نقش‌هاست؛ از نقش هر کدام‌مان در جاباما گرفته تا نقش پرچم‌هایی که ما را با اصالت و تاریخ فرش ایرانی آشنا می‌کند.
        </p>

        <p class="space-y-4 text-gray-500 leading-relaxed text-justify">
          در ساختمان اینجا، هر پرچم داستان خودش را روایت می‌کند. روایت پرچم‌ها از رنگ‌ها و نقش‌های فرش ایرانی الهام گرفته شده‌ و بر اساس نقش و عملکرد هر تیم در جاباما، به طور اختصاصی بازآفرینی شده‌است. این پرچم‌ها، راهنمای شما برای آشنایی بیشتر با محل استقرار هر تیم، طراحی و در ساختمان نصب شده‌است. پیشنهاد می‌کنیم که فرصتی را برای جستجو و شناسایی پرچم‌‌ تیمتان اختصاص دهید و پس از یافتن آن، راوی داستانش باشید.
        </p>
      </div>

      <!-- Cards Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <template v-for="department in departments" :key="department.title">
          <div class="border border-amber-500 rounded-lg p-6 flex flex-col items-center">
            <img 
              :src="department.icon" 
              :alt="department.title"
              class="w-24 h-24 mb-4"
            >
            <h3 class="text-xl font-bold text-amber-500 mb-2 text-center">{{ department.title }}</h3>
            <p class="text-gray-500 leading-relaxed text-center text-sm">{{ department.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageHeaderCard from '~/components/ui/PageHeaderCard.vue'
import JabamaLoading from '~/components/ui/JabamaLoading.vue'
import ErrorPage from '~/components/ErrorPage.vue'

const { $api } = useNuxtApp()
const departments = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch departments data
const fetchDepartments = async () => {
  try {
    loading.value = true
    error.value = null
    const response = await $api.get('/api/v1/departments?limit=100')
    if (response.success) {
      departments.value = response.data.departments
    } else {
      throw new Error('خطا در دریافت اطلاعات دپارتمان‌ها')
    }
  } catch (err) {
    console.error('Error fetching departments:', err)
    error.value = err.message || 'خطا در بارگذاری دپارتمان‌ها'
  } finally {
    loading.value = false
  }
}

// Fetch departments when component is mounted
onMounted(() => {
  fetchDepartments()
})

definePageMeta({
  layout: 'default'
})
</script> 