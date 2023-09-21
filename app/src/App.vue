<template>
  <div class="min-h-screen font-Roboto bg-white">
    <Header />
    <div class="mt-16">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import { RouterView } from "vue-router";
</script>

<style scoped></style>
