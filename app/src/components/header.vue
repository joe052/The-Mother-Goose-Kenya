<template>
  <div>
    <header
      class="w-full h-20 fixed z-30 top-0 text-gray-700 border-b border-gray-200 bg-white shadow-sm body-font"
    >
      <div class="flex px-2 items-center justify-between mt-4 md:mx-auto">
        <NavbarIcon />
      </div>
    </header>
  </div>
</template>

<script setup>
import NavbarIcon from './navbar/navbarIcon.vue';
</script>

<style lang="scss" scoped></style>
