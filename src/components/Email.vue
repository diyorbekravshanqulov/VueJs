<script setup>
const items = Array(3).fill({
  title: "Garden Care",
  description: "We are an online plant shop offering a wide range of cheap and trendy plants.",
  imgSrc: "/2dpic.svg"
});
</script>

<template>
  <div class="container grid md:grid-cols-5 grid-cols-2 p-6 gap-[62px] items-center bg-[#FBFBFB] mt-[100px]">
    <div v-for="(item, index) in items" :key="index" :class="{'md:col-span-1 md:px-0 px-[25%] col-span-2': index === items.length - 1}">
      <img class="mx-auto" :src="item.imgSrc" alt="Garden Care Image" />
      <h3 class="text-[#3D3D3D] font-bold text-[17px] mt-[17px]">
        {{ item.title }}
      </h3>
      <p class="text-[#727272] leading-[22px] mt-2">
        {{ item.description }}
      </p>
    </div>
    <div class="col-span-2 md:px-10 items-center">
      <h3 class="text-[#3D3D3D] font-bold text-[18px]">
        Would you like to join newsletters?
      </h3>
      <div class="relative mt-[18px] w-full">
        <input 
          class="shadow-[0px_0px_20px_0px_rgba(0,0,0,0.06)] px-4 py-2 rounded placeholder:text-[#ACACAC] w-full"
          type="email"
          placeholder="Enter your email address..."
        />
        <button
          class="absolute right-0 top-0 text-white px-6 py-2 rounded-custom font-bold text-[18px] bg-[#46A358]"
        >
          Join
        </button>
      </div>
      <p class="mt-[17px] text-[#727272] text-[13px]">
        We usually post offers and challenges in the newsletter. We’re your online
        houseplant destination. We offer a wide range of houseplants and
        accessories shipped directly from our (green)house to yours!
      </p>
    </div>
  </div>
</template>
