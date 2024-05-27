<template>
  <div class="container flex gap-[28px]">
    <div v-for="item in 2" :key="item" class="flex gap-[50px]">
      <img src="../../public/info_flower.svg" alt="img" />
      <div class="flex flex-wrap items-center justify-end">
        <h3 class="text-2xl font-medium ">Lorem, ipsum dolor.</h3>
        <p class="text-[#999] leading-7 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic earum at
          perferendis! Beatae, ducimus veritatis?
        </p>
        <button class="mr-5 px-7 py-2 bg-green-600 rounded-md text-white font-semibold">Find more -></button>
      </div>
    </div>
  </div>
</template>
