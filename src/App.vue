<script setup>
import { ref } from 'vue';
import Header from "./components/Header.vue";
import Top_side from "./components/Top_side.vue";
import Category from "./components/category.vue";
import Menu from "./components/Menu.vue";
import Flowers from "./components/Flowers.vue";
import Pagination from "./components/pagination.vue";
import Info from "./components/Info.vue";

const isActive = ref(false);
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <Header />
    <Top_side />
    <div class="flex justify-end px-[10%] w-screen">
      <Menu />
    </div>
    <div class="flex w-screen px-[10%] gap-[50px]">
      <Category class="w-[calc(100%/4+5%)]" />
      <Flowers />
    </div>

    <Pagination />
    <Info />
  </div>

  <div class="bg-black/55 fixed inset-0"></div>

  <div class="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-white px-3">
    <button @click="isActive = false" class="text-[30px] w-[100%] text-end font-medium">&times;</button>
    <div class="flex flex-wrap items-center justify-center divide-[#999] mt-[10px]">
      <button :class="{ 'text-[#46A358]': !isActive }" class="font-medium text-2xl text-center w-[94px]" @click="isActive = false">Login</button>
      <button :class="{ 'text-[#46A358]': isActive }" class="font-medium text-2xl text-center w-[120px]" @click="isActive = true">Register</button>

      <div v-if="!isActive" class="flex flex-wrap">
        <p class="mt-[50px] text-center text-[#3D3D3D] text-[13px] w-[100%]">Enter your username and password to login.</p>
        <p class="mt-[26px] text-center text-[#A5A5A5] text-[14px] w-[100%]">almamun_uxui@outlook.com</p>
        <input placeholder="Password" type="password" name="" id="" class="px-[14px] py-[10px]  border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[60%] mt-[30px]">
        <p class="mt-[14px] text-[#46A358] leading-[14px] w-[60%] text-right mx-auto">Forgot Password?</p>
        <button class="px-[129px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto">Login</button>
        <p class="mt-[36px] text-[13px] w-[60%] mx-auto text-center">Or login with</p>
        <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">Login with Google</p>
        <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">Login with Facebook</p>
      </div>

      <div v-else class="flex flex-wrap">
        <p class="mt-[20px] text-center text-[#3D3D3D] text-[13px] w-[100%]">Enter your username and password to login.</p>
        <input placeholder="Username" type="text" name="" id="" class="px-[14px] py-[10px] placeholder:text-[#A5A5A5]  border border-[#46A358] rounded-md mx-auto w-[60%] mt-[14px]">
        <input placeholder="Email" type="email" name="" id="" class="px-[14px] py-[10px] placeholder:text-[#A5A5A5]  border border-[#46A358] rounded-md mx-auto w-[60%] mt-4">
        <input placeholder="Password" type="password" name="" id="" class="px-[14px] py-[10px] placeholder:text-[#A5A5A5]  border border-[#46A358] rounded-md mx-auto w-[60%] mt-4">
        <input placeholder="Confirm Password" type="password" name="" id="" class="px-[14px] py-[10px] placeholder:text-[#A5A5A5]  border border-[#46A358] rounded-md mx-auto w-[60%] mt-4">
        <button class="px-[129px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] w-[60%] mx-auto">Register</button>
        <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">Or register with</p>
        <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">Register with Google</p>
        <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">Register with Facebook</p>
      </div>
    </div>
  </div>
</template>
