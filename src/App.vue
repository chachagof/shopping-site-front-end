<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>hello world</h1>
  <button type="button" class="btn btn-info">Info</button>
  <button class="btn btn-primary btn-lg" type="button">Call Me <font-awesome-icon :icon="['fas', 'phone']" /> </button>
  <font-awesome-icon :icon="['fas', 'phone']" />
</template>

<style>
</style>
