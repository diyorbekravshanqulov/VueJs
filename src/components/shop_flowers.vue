<script setup>
import { ref } from "vue";

const count = ref(0);

const items = ref(["All Plants", "New Arrivals", "Sale"]);
const flower = ref([
  "./shop_small_flower.svg",
  "./shop_small_flower2.svg",
  "./shop_small_flower.svg",
  "./shop_small_flower2.svg",
]);

const isActive = ref(false)

const parag = ref([
  "SKU: 1995751877966",
  "Categories: Potter Plants",
  "Tags: Home, Garden, Plants",
]);

const toggleClass = () => {
  isActive = !isActive;
};

const size = ref(["S", "M", "L", "XL"]);
</script>
<template>
  <div class="container flex py-8 md:p-15 gap-[52px]">
    <div class="w-[50%] flex">
      <div class="flex flex-wrap w-[27%]">
        <img
          class="hover:border-[#46A358] border"
          v-for="(item, index) in flower"
          :key="index"
          :src="item"
          alt=""
        />
      </div>
      <img src="./shop_flower.svg" alt="" />
    </div>
    <div class="w-[50%]">
      <h2 class="text-[28px] font-bold">Barberton Daisy</h2>
      <div class="flex justify-between mt-[21px]">
        <p class="text-[#46A358] font-bold text-[22px]">$119.00</p>
        <p class="text-[15px] text-[#3D3D3D]">19 Customer Review</p>
      </div>
      <p class="text-[#3D3D3D] font-bold text-[15px] mt-7">
        Short Description:
      </p>
      <p class="text-[#727272] leading-[24px] mt-[10px]">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground.
      </p>
      <p class="text-[#3D3D3D] font-bold text-[15px] mt-6">Size:</p>
      <div class="flex gap-[6px] mt-[17px]">
        <button
          v-for="(item, index) in size"
          :key="index"
          class="text-[#727272] text-4 hover:text-[#46A358] border font-medium hover:border-[#46A358] hover:rounded-full flex items-center justify-center w-[30px] h-[30px]"
        >
          {{ item }}
        </button>
      </div>
      <div class="flex gap-[26px] items-center">
        <div class="flex gap-[23px] items-center">
          <button
            class="bg-[#46A358] text-white rounded-full w-[35px] h-[35px] text-xl flex items-center pb-1 justify-center font-medium"
            @click="count > 0 ? count-- : count"
          >
            -
          </button>
          <h2 class="text-[#3D3D3D] text-[20px]">{{ count }}</h2>
          <button
            class="bg-[#46A358] text-white rounded-full w-[35px] h-[35px] text-xl flex items-center pb-1 justify-center font-medium"
            @click="count++"
          >
            +
          </button>
        </div>
        <div class="flex gap-[10px]">
          <button
            class="px-8 py-[10px] bg-[#46A358] font-bold text-white rounded-md"
          >
            BUY NOW
          </button>
          <button
            class="px-8 py-[10px] border border-[#46A358] font-bold text-[#46A358] rounded-md"
          >
            ADD TO CART
          </button>
          <button
            @click="toggleClass"
            :class="{ 'bg-[#46A358]': isActive, 'bg-white': !isActive }"
            class="p-[10px] border border-[#46A358] rounded-md"
          >
            <img src="../../public/like.svg" alt="" />
          </button>
        </div>
      </div>

      <p
        class="text-[#727272] text-[15px] mt-[11px]"
        v-for="(item, index) in parag"
        :key="index"
      >
        {{ item }}
      </p>
      <div class="flex gap-4 mt-[18px]">
        <p class="text-[#3D3D3D] text-[15px] font-medium">
          Share this products:
        </p>
        <img
          v-for="(item, index) in 4"
          :key="index"
          class="text-[#3D3D3D]"
          src="./facebook_black.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
