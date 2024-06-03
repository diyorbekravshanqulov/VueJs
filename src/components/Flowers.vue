<script setup>
import { ref } from "vue";

const items = ref(["All Plants", "New Arrivals", "Sale"]);
const flower = ref([
  "/info_flower.svg",
  "/flower.svg",
  "/info_flower.svg",
  "/flower.svg",
  "/info_flower.svg",
  "/flower.svg",
  "/info_flower.svg",
  "/flower.svg",
  "/info_flower.svg", 
]);
</script>

<template>
  <div class="container grid md:grid-cols-3 grid-cols-2">
    <router-link to="/shop"
      v-for="item in flower"
      class="md:px-1 md:py[30px] md:flex md:flex-wrap md:justify-center last:grid-cols-2"
    >
      <img :src="item" alt="flower" />
      <div class="block w-[100%] px-[15%]">
        <p>Barberton Daisy</p>
        <p>$119.00</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.container {
  /* width: 100%; */
  margin-top: 12px;
  gap: 33px;
  position: relative;
}

p:first-child {
  margin-top: 31px;
  color: #3d3d3d;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
}

p:last-child {
  margin-top: 6px;
  color: #46a358;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
}
</style>
