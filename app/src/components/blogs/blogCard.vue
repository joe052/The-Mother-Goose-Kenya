<template>
  <section class="bg-gray-100">
    <div class="px-6 py-10 xl:mx-36">
      <div
        class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3"
      >
        <div v-for="card in cards" :key="card">
          <div class="bg-white shadow-lg text-center rounded-lg">
            <div class="relative">
              <img
                class="object-cover rounded object-center w-full h-48 lg:h-64"
                alt=""
                src="./../../assets/images/image2.jpg"
              />.
              <div class="absolute bottom-0 flex p-3 bg-gray-100 shadow">
                <div class="mx-4">
                  <h1 class="text-lg text-red-600">Ksh 19,500</h1>
                </div>
              </div>
            </div>

            <h1 class="mt-6 text-xl font-semibold text-cyan-700 mx-10">
              Intensive Elementary German I
            </h1>

            <hr class="w-auto my-6 text-cyan-800 mx-10" />

            <p class="text-1xl text-gray-900 mx-10">
              This is an intensive elementary German language class in which we
              focus on acquiring the four basic skills: listening, speaking,
              reading, and writing
            </p>
            <router-link
              to="/german"
              class="inline-block mt-4 text-cyan-600 underline hover:text-red-400 m-10"
              >Read more
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    cards: [1, 1, 1, 1, 1, 1], // Array with cards and information
  }),
};
</script>
<!-- <template>
  <div
    class="flex flex-col lg:flex-row lg:flex-wrap gap-4 md:gap-8 md:justify-center md:items-center px-8 py-8"
  >
    <div v-for="card in cards" :key="card">
      <card>
        <div class="bg-white shadow-lg text-center rounded-lg">
          <div class="relative">
            <img
              class="object-cover rounded object-center w-full h-48 lg:h-64"
              alt=""
              src="./../../assets/images/image2.jpg"
            />
            <div class="absolute bottom-0 flex p-3 bg-gray-100 shadow">
              <div class="mx-4">
                <h1 class="text-lg text-red-600">Ksh 19,500</h1>
              </div>
            </div>
          </div>
          <h1 class="mt-6 text-xl font-semibold text-cyan-700 mx-10">
            Intensive Elementary German I
          </h1>
          <hr class="w-auto my-6 text-cyan-800 mx-10" />
          <p class="text-1xl text-gray-900 mx-10">
            This is an intensive elementary German language class in which we
            focus on acquiring the four basic skills: listening, speaking,
            reading, and writing
          </p>
          <router-link
            to="/german"
            class="inline-block mt-4 text-cyan-600 underline hover:text-red-400 m-10"
            >Read more</router-link
          >
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
</script> -->
