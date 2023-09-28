<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image5.jpg"
          alt=""
          class="object-cover w-full"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-end text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl">Slide 1 Text</p>
          </div>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image2.jpg"
          alt=""
          class="object-cover w-full"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-end text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl">Slide 1 Text</p>
          </div>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image3.jpg"
          alt=""
          class="object-cover w-full"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-end text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl">Slide 1 Text</p>
          </div>
        </div>
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
  height: "28rem",
  width: "40rem",
  // gap: "1rem",
};
</script>
