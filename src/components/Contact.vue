<script setup></script>
<template>
  <div class="container grid md:grid-cols-5 grid-cols-2 items-center gap-6 p-[23px] mt-6">
    <img src="../../public/greenshop.svg" alt="" />
    <div v-for="(item, index) in 3" :key="index" class="flex gap-[20px]">
      <img src="../../public/search.svg" alt="" />
      <p class="text-[#3D3D3D] w-[200px]">70 West Buckingham Ave. Farmingdale, NY 11735</p>
    </div>
  </div>
</template>
