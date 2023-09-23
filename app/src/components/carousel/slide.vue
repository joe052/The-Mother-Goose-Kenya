<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image1.jpg"
          alt=""
          class="object-cover w-full h-[45rem]"
        />
        <div
          class="absolute inset-0 flex flex-col items-start pl-[500px] pt-[200px] justify-center text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl mb-4">Slide 1 Text</p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button 1
            </button>
          </div>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image2.jpg"
          alt=""
          class="object-cover w-full h-[45rem]"
        />
        <div
          class="absolute inset-0 flex flex-col items-start pl-[500px] pt-[200px] justify-center text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl mb-4">Slide 1 Text</p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button 1
            </button>
          </div>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image3.jpg"
          alt=""
          class="object-cover w-full h-[45rem]"
        />
        <div
          class="absolute inset-0 flex flex-col items-start pl-[500px] pt-[200px] justify-center text-white bg-gradient-to-t from-gray-700"
        >
          <div class="gradient-overlay">
            <p class="text-2xl mb-4">Slide 1 Text</p>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Button 1
            </button>
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
  // gap: "1rem",
};
</script>

<!-- <template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <div class="relative">
        <img
          src="./../../assets/images/image1.jpg"
          alt=""
          class="object-cover w-full h-[45rem]"
        />
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-white"
        >
          <p class="text-2xl mb-4">
            Slide 1 Text
          </p>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Button 1
          </button>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <img
        src="./../../assets/images/image2.jpg"
        alt=""
        class="object-cover w-full h-[45rem]"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="./../../assets/images/image3.jpg"
        alt=""
        class="object-cover w-full h-[45rem]"
      />
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { LOOP } from "@splidejs/splide";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
const options = {
  rewind: true,
  type: LOOP,
  autoplay: true,
  // gap: "1rem",
};
</script> -->
