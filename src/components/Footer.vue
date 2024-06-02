<script setup></script>
<template>
  <div class="container grid md:grid-cols-5 grid-cols-2 md:gap-x-[240px] gap-8 p-[23px] px-[10%] md:px-0">
    <div v-for="(item, index) in 3" :key="index">
      <h3 class="text-[#3D3D3D] text-[18px] font-bold">My Account</h3>
      <p class="text-[ #3D3D3D] mt-2">
        My Account Our stores Contact us Career Specials
      </p>
    </div>
    <div class="md:col-span-2 grid-cols-1">
      <h3 class="text-[#3D3D3D] text-[18px] font-bold">Social Media</h3>
      <div class="flex gap-[3%] mt-5">
        <img class="p-2"
          v-for="(item, index) in 5"
          :key="index"
          src="../../public/facebook.svg"
          alt=""
        />
        
      </div>
      <h3 class="text-[#3D3D3D] text-[18px] font-bold mt-[33px]">We accept</h3>
      <img class="mt-[13px]" src="../../public/card.svg" alt="" />
    </div>
    <p class="md:mt-[35px] col-span-full text-center text-[#3D3D3D]">© 2021 GreenShop. All Rights Reserved.</p>
  </div>
</template>
