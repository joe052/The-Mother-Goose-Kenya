<!-- <template>
  <div class="flex flex-row justify-center items-center p-10">
    <div class="flex flex-col">
      <h1 class="text-5xl">2000+</h1>
      <p class="text-lg text-gray-600">
        businesses use our services every month to connect with customers and
        grow
      </p>
    </div>
  </div>
</template> -->
<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="flex flex-col gap-6">
        <h1 class="text-7xl text-cyan-800">
          2000<span class="text-orange-500">+</span>
        </h1>
        <p class="text-2xl text-gray-600">
          businesses use our services every month to connect with customers and
          grow
        </p>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col gap-6">
        <h1 class="text-7xl text-cyan-800">
          40<span class="text-orange-500">+</span>
        </h1>
        <p class="text-2xl text-gray-600">
          businesses use our services every month to connect with customers and
          grow
        </p>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col gap-6">
        <h1 class="text-7xl text-cyan-800">
          KSH 8M<span class="text-orange-500">+</span>
        </h1>
        <p class="text-2xl text-gray-600">
          businesses use our services every month to connect with customers and
          grow
        </p>
      </div>
    </SplideSlide>
    <!-- Other slides go here -->
  </Splide>
</template>

<script setup>
import { LOOP } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
const options = {
  rewind: true,
  type: LOOP,
  autoplay: true,
  height: "22rem",
  width: "28rem",
  // gap: "1rem",
};
</script>
