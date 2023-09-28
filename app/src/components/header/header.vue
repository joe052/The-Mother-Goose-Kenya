<template>
  <div>
    <header
      class="w-full h-auto fixed z-30 top-20 text-gray-700 border-b border-gray-200 bg-white shadow-sm body-font"
    >
      <div
        class="flex flex-row px-2 items-center justify-evenly mt-4 md:mx-auto"
      >
        <router-link :to="{ name: 'home' }"> <NavbarIcon /></router-link>
        <NavbarItems />
      </div>
    </header>
  </div>
</template>

<script setup>
import NavbarIcon from "../navbar/navbarIcon.vue";
import NavbarItems from "../navbar/navbarItems.vue";
</script>

<style lang="scss" scoped></style>
