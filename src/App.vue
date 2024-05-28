<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/MenuBar.vue'
</script>

<template>
  <div class="noto-sans-thai-sans">
    <div class="navbar">
      <Menu />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
</style>
