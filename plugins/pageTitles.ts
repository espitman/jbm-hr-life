// Map of route paths to Persian titles
export const pageTitles = {
  '/': 'صفحه اصلی',
  '/album': 'آلبوم',
  '/history': 'تاریخچه جاباما',
  '/referral': 'معرفی همکار (ریفرال)',
  '/stock-model': 'مدل سهام داری',
  '/working-hours': 'ساعت کاری',
  '/benefits': 'مزایا و رفاهیات',
  '/military-service': 'تسهیلات نظام وظیفه',
  '/collaboration-rules': 'قوانین همکاری',
  '/requirements': 'نیازمندی‌ها',
  '/hr-contact': 'ارتباط با اچ آر',
  '/anonymous-system': 'سامانه ناشناس',
  '/promotion': 'فرآیند ارتقا',
  '/exit-process': 'فرایند خروج',
  '/requests': 'ارسال درخواست',
  '/building': 'ساختمان جاباما'
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      pageTitles
    }
  }
}) 