<template>
  <div class="bg-white rounded-xl p-8">
    <!-- Title Section -->
    <div class="flex items-center justify-start mb-6">
      <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
      <h2 class="text-xl font-bold">موارد مورد نياز دوره اكتينگ</h2>
    </div>

    <!-- Main Content -->
    <div class="space-y-6 text-gray-500 leading-relaxed text-justify">
      <!-- Introduction -->
      <div class="flex items-start gap-2">
        <span class="text-green-500 mt-1">✓</span>
        <p>دوره اكتينگ براى پوزيشن هاى لدر مديريتى مطرح است وارتقا در لدر عانيازى به اكتينگ ندارد.</p>
      </div>

      <!-- Previous Experience Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">تجربه قبلی</h3>
        <p>در صورتى كه فرد قبلا اين مسئوليت را به صورت غير رسمى‌داشته باشد با ارائه مستندات و خروجى هاى فرد اين اكت غيررسمى‌فرد مورد تاييد بوده ومى‌تواند مستقيما بعد از تاييد مستندات دركمیته وتاييد مدير ارشد ارتقا بيدا كند.</p>
      </div>

      <!-- Requirements Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">نیازمندی‌ها</h3>
        <p>نيازمندى دوره اكتينگ و همچنين تاييد طى كردن دوره اكتينگ با نظر مدير ارشد است. يعنى مدير ارشد بايد اعلام كند كه پوزيشن مقصد نياز به دوره اكتينگ دارد يا خير. همچنين در صورت نيازمندى دوره اكتينگ در پوزيشن مقصد، مدير ارشد بايد تاييد كندكه فرد دوره اكتينگ راكَذرانده است باخير.</p>
      </div>

      <!-- New Experience Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">بدون تجربه قبلی</h3>
        <p>در صورتى كه فرد قبلا اين مسئوليت را نداشته باشد در صورت موافقت فرد وارد دوره اكتينگ سه ماهه مى‌شود. دوره اکتینگ بانظر مدير و LHRBP شش ماه قابل تمديد خواهد بود.</p>
      </div>

      <!-- Evaluation Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">ارزیابی</h3>
        <p>در انتهاى دوره اكتينگ دوباره كمیته تشكيل مى‌شود و چنانچه خروجى فرد از نظر كمیته ارتقا در حد قابل قبول ارزيابى شود، فرد ارتقا مى‌يابد.</p>
      </div>

      <!-- Salary Section -->
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-gray-700">حقوق و دستمزد</h3>
        <p>تصمیم گیری در مورد افزايش يا عدم افزايش حقوق با افزايش مسئوليت‌ها در دوره اكتينگ بانظر مدير ارشد و مشورت جام می شود.</p>
      </div>

      <!-- Warning Section -->
      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-3 text-amber-800">عدم موفقیت در دوره</h3>
        <p class="text-amber-800">در صورتى كه دوره اكتينگ براى فرد موفقيت آمیز نباشد، لازم است مدير جلسه اى با فرد بركَزار كرده و ضمن دادن فيدبک، فرم IDP براى توسعه فردى به او ارائه دهد.</p>
      </div>
    </div>

    <!-- Timeline Table Section -->
    <div class="mt-8">
      <h3 class="text-xl font-bold mb-4 flex items-center">
        <div class="w-6 h-6 rounded-full bg-amber-500 ml-2"></div>
        تایم لاین فرآیند ارتقا
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse bg-white" dir="rtl">
          <thead>
            <tr class="bg-gray-100">
              <th class="text-center p-4 text-xl font-bold border">مراحل</th>
              <th colspan="2" class="text-center p-4 text-xl font-bold border">زمانبندی</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-right p-3 border">اعلام لیست افراد حائز شرایط توسط HRBP</td>
              <td class="text-center p-3 border">اردیبهشت ۵-۱</td>
              <td class="text-center p-3 border">آبان ۵-۱</td>
            </tr>
            <tr>
              <td class="text-right p-3 border">تایید مدیر ارشد</td>
              <td class="text-center p-3 border">اردیبهشت ۸-۵</td>
              <td class="text-center p-3 border">آبان ۸-۵</td>
            </tr>
            <tr>
              <td class="text-right p-3 border">معرفی کاندیدهای ارتقا به کمیته ی ارتقا</td>
              <td class="text-center p-3 border">اردیبهشت ۱۲-۸</td>
              <td class="text-center p-3 border">آبان ۱۲-۸</td>
            </tr>
            <tr>
              <td class="text-right p-3 border">اطلاع رسانی به کاندیدای ارتقا و پیمودن فرایند ارتقا</td>
              <td class="text-center p-3 border">اردیبهشت ۱۵-۱۲</td>
              <td class="text-center p-3 border">آبان ۱۵-۱۲</td>
            </tr>
            <tr>
              <td class="text-right p-3 border">برگزاری کمیته های ارتقا</td>
              <td class="text-center p-3 border">اردیبهشت ۳۰-۱۵</td>
              <td class="text-center p-3 border">آبان ۳۰-۱۵</td>
            </tr>
            <tr>
              <td class="text-right p-3 border">اعلام خروجی فرایند ارتقا به کاندیدها</td>
              <td class="text-center p-3 border">خرداد ۰۷-۱</td>
              <td class="text-center p-3 border">آذر ۰۷-۱</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script> 