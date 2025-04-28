<template>
  <div class="flex flex-col items-center justify-center w-full min-h-screen flex-grow">
    <div class="relative flex items-center justify-center">
      <div class="absolute w-64 h-64 rounded-full bg-amber-400 opacity-30 animate-pulse-glow"></div>
      <img src="/images/jabama.svg" alt="Jabama Logo" class="w-56 h-56 animate-heart-beat drop-shadow-lg relative z-10" />
    </div>
    <div class="mt-10 text-amber-600 text-2xl font-semibold tracking-wide animate-fade-in">در حال بارگذاری...</div>
  </div>
</template>

<script setup>
// No script logic needed for this loader
</script>

<style scoped>
@keyframes heart-beat {
  0%, 100% { transform: scale(1); }
  10%, 30% { transform: scale(1.18); }
  20%, 40% { transform: scale(0.95); }
  50% { transform: scale(1.12); }
  60% { transform: scale(0.98); }
  70% { transform: scale(1.05); }
  80% { transform: scale(1); }
}
.animate-heart-beat {
  animation: heart-beat 1.3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes pulse-glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}
.animate-pulse-glow {
  animation: pulse-glow 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-in;
}
</style> 