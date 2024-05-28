<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="container md:px-0 px-[10%] md:flex block md:flex-nowrap ">
    <div class="md:ml-10">
      <p class="text-center md:text-left">Welcome to GreenShop</p>
      <h1 class="text-center md:text-left">Let’s Make a Better <span>Planet</span></h1>
      <p class="text-center md:text-left md:mt-0 mt-6">
        We are an online plant shop offering a wide range of cheap and trendy
        plants. Use our plants to create an unique Urban Jungle. Order your
        favorite plants!
      </p>
      <button>SHOP NOW</button>
    </div>
    <img class="absolute md:top-[345px] md:right-[370px] top-[81.5%] " src="../../public/main_flower_2.svg" alt="" />
    <img src="../../public/main_flower.svg" alt="" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  /* justify-content: space-between;    */
  align-items: center;
  /* padding: 26px 10%; */
  gap: 20%;
  position: relative;
}



.top {
  color: #3d3d3d;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.1em;
}

h1 {
  margin: 6px 0;
  text-transform: uppercase;
  color: #3d3d3d;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
}

span {
  text-transform: uppercase;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
  text-align: left;
  color: #46a358;
}

.bottom {
  color: #727272;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

button {
  margin-top: 44px;
  margin-right: 5px;
  padding: 10px 27px;
  background: #46a358;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
}
</style>
