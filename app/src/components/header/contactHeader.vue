<template>
  <div>
    <header
      class="w-full h-20 fixed z-30 top-0 text-gray-700 border-b border-gray-200 shadow-sm body-font bg-gradient-to-r from-violet-600 from-7% via-violet-500 via-40% to-green-500 to-80%"
      style="
        background-color: linear-gradient(
          90deg,
          rgba(115, 51, 129, 1) 7%,
          rgba(153, 79, 178, 1) 50%,
          rgba(245, 128, 36, 1) 100%
        );
      "
    >
      <NavContact />
    </header>
  </div>
</template>

<script setup>
import NavContact from "../navbar/navcontact.vue";
</script>

<style lang="scss" scoped></style>
