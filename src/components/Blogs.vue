<template>
  <div class="container py-8">
    <h2 class="text-[#3D3D3D] font-bold text-center text-2xl">Our Blog Posts</h2>
    <p class="text-[#727272] mt-4 text-sm text-center">
      We are an online plant shop offering a wide range of cheap and trendy plants.
    </p>
    <div class="flex gap-11 mt-6">
      <div v-for="(item, index) in 4" :key="index">
        <img src="../../public/blogs.svg" alt="Blog illustration" class="w-full h-auto" />
        <div class="w-full px-[13px]">
            <p class="text-[#46A358] font-medium mt-2">September 12  I Read in 6 minutes</p>
            <h3 class="text-[#3D3D3D] text-[20px] font-bold mt-1 pr-[60px]">Cactus & Succulent Care Tips</h3>
            <p class="text-[#727272] leading-[24px] mt-1 text-[14px]">Cacti are succulents are easy care plants for any home or patio. </p>
            <p class="text-[#3D3D3D] font-medium text-[14px] cursor-pointer hover:underline">Read More -></p>
        </div>
      </div>
    </div>
  </div>
</template>
