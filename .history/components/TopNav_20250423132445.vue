<template>
  <nav class="top-nav">
    <div class="nav-container">
      <div class="nav-left">
        <img src="/images/jabama-logo.png" alt="Jabama Logo" class="logo" />
      </div>
      <div class="nav-right">
        <a href="#" class="nav-link">خانه</a>
        <a href="#" class="nav-link">درباره ما</a>
        <a href="#" class="nav-link">تماس با ما</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.top-nav {
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  width: auto;
}

.nav-right {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: #111827;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4B5563;
}
</style> 