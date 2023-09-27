<template>
  <div
    class="flex flex-col lg:flex-row lg:flex-wrap gap-4 md:gap-8 md:justify-center md:items-center px-8 py-8"
  >
    <div v-for="card in cards" :key="card">
      <card>
        <div
          class="bg-white text-start lg:mx-80 lg:my-16 md:my-12 hover:underline"
        >
          <h1 class="mt-6 text-2xl font-semibold text-gray-700 mx-10">
            The Obama Foundation’s My Brother’s Keeper Alliance Announces $1M
            Investment in Chicago-Based Organizations Supporting Boys and Young
            Men of Color This Summer
          </h1>
          <hr class="w-auto my-6 text-cyan-800 mx-10" />
          <p class="text-xl text-gray-900 mx-10">
            33 Chicago-based organizations each received $30,000 grants to
            create and expand spaces and programming for boys and young men of
            color
          </p>
          <p class="text-lg text-gray-500 mx-10 my-5">
            July 18, 2023 at 9:00 AM CDT
          </p>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [1, 1, 1, 1, 1, 1], // Array with cards and information
  }),
};
</script>
lg:px-60
