<script setup>
import { RouterView } from 'vue-router'
import Menu from '@/components/MenuBar.vue'
</script>

<template>
  <Menu />
  <RouterView />
</template>

<style>
body {
  background-color: linear-gradient(to top left, var(--tw-gradient-stops));
}
</style>
