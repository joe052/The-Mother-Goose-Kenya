<template>
  <Header />
  <Values />
  <div class="flex text-center justify-center pt-36 bg-gray-100">
    <Stats />
  </div>
  <Mission />
</template>

<script setup>
import Header from "../components/about_us/header.vue";
import Values from "../components/about_us/values.vue";
import Mission from "../components/about_us/mission.vue";
import Stats from "../components/about_us/stats.vue";
</script>

<style lang="scss" scoped></style>
