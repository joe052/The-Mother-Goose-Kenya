<template>
  <div
    class="flex md:flex-row flex-col items-center justify-center lg:gap-20 lg:p-20 max-lg:my-10"
  >
    <div class="flex flex-col max-lg:p-5 gap-4">
      <img
        src="./../../assets/images/image4.jpg"
        alt="blogs"
        class="w-[500px] h-96 object-cover"
      />
      <router-link :to="{ name: 'about' }">
        <hi class="font-semibold p-3 text-2xl hover:underline"
          >Blogs & Updates
        </hi>
        <p class="text-lg m-2 hover:underline">
          Read the latest stories and updates from The mother goose kenya.
        </p></router-link
      >
    </div>
    <div class="flex flex-col max-lg:p-5 gap-4">
      <img
        src="./../../assets/images/image3.jpg"
        alt="blogs"
        class="w-[500px] h-96 object-cover"
      />
      <router-link :to="{ name: 'about' }">
        <hi class="font-semibold p-3 text-2xl hover:underline"
          >In The Press
        </hi>
        <p class="text-lg m-2 hover:underline">
          Read the latest stories and updates from The mother goose kenya.
        </p></router-link
      >
    </div>
  </div>
</template>
