<template>
  <div class="min-h-screen font-Roboto bg-white">
    <ContactHeader />
    <Header />
    <div class="mt-40">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import ContactHeader from "./components/header/contactHeader.vue";
import Header from "./components/header/header.vue";
import { RouterView } from "vue-router";
import Footer from "./components/footer.vue";
</script>

<style scoped></style>
