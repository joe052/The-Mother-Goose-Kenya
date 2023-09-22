<template>
  <nav
    class="sm:max-lg:hidden sm:max-lg:z-20 flex-col lg:flex lg:flex-row sm:max-lg:w-4/5 absolute lg:relative lg:top-auto top-24 right-0 left-16 h-screen md:h-auto bg-white"
    id="nav-content"
  >
    <NavAboutUS />
    <NavbarMenu />
    <NavCourses />
    <NavBlogs />
    <NavContact />
  </nav>
  <div
    class="flex items-center right-0 h-full pl-4 ml-6 border-l-0 lg:border-l border-orange-700"
  >
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      class="text-sm pl-2 text-white rounded-lg lg:hidden focus:outline-none"
      aria-controls="navbar-sticky"
      aria-expanded="false"
      @click="toggle"
    >
      <span class="sr-only">Open main menu</span>
      <h1 class="text-xl mr-4 text-gray-900 hover:text-blue-700">Menu</h1>
    </button>
  </div>
</template>

<script setup>
let close = true;
let open = true;
const toggle = () => {
  document.getElementById("nav-content").classList.toggle("sm:max-lg:hidden");
  document.getElementById("nav-content").classList.toggle("sm:max-lg:flex");
  close = false;
  close = false;
};
import NavAboutUS from "./navLinks/navAboutUS.vue";
import NavContact from "./navLinks/navContact.vue";
import NavCourses from "./navLinks/navCourses.vue";
import NavBlogs from "./navLinks/navBlogs.vue";
import NavbarMenu from "./navbarMenu.vue";
</script>
