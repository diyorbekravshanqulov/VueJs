<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="container">
    <div class="right">
      <p class="top">Welcome to GreenShop</p>
      <h1>Let’s Make a Better <span>Planet</span></h1>
      <p class="bottom">
        We are an online plant shop offering a wide range of cheap and trendy
        plants. Use our plants to create an unique Urban Jungle. Order your
        favorite plants!
      </p>
      <button>SHOP NOW</button>
    </div>
    <img class="small" src="../../public/main_flower_2.svg" alt="" />
    <img src="../../public/main_flower.svg" alt="" />
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  display: flex;
  /* justify-content: space-between;    */
  align-items: center;
  /* padding: 26px 10%; */
  gap: 20%;
  position: relative;
}

.right {
  margin-left: 40px;
}

.small {
  position: absolute;
  top: 373px;
  right: 525px;
  gap: 0px;
  opacity: 0px;
}

.top {
  color: #3d3d3d;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: left;
}

h1 {
  margin: 6px 0;
  text-transform: uppercase;
  color: #3d3d3d;
  font-size: 70px;
  font-weight: 900;
  line-height: 70px;
  text-align: left;
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
  text-align: left;
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
