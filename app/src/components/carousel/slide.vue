<template>
  <Splide :options="options" aria-label="My Favorite Images">
    <SplideSlide>
      <img
        src="./../../assets/images/image1.jpg"
        alt=""
        class="object-cover w-full h-[45rem]"
      />
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
</script>
