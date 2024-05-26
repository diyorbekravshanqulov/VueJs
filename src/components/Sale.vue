<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="container">
    <h2>Super Sale</h2>
    <p>UP TO 75% OFF</p>
    <img src="../../public/sale.svg" alt="" />
  </div>
</template>

<style scoped>
.container {
  width: 310px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  /* padding: 26px 10%; */
  justify-content: center;
  position: relative;
}

@font-face {
  font-family: "Hanging Letters";
  src: url("../../public/font/hanging_letters/Hanged\ Letters.ttf");
}

h2 {
  text-align: center;
  font-family: "Hanging Letters";
  color: #46a358;
  font-size: 65px;
  font-weight: 400;
  line-height: 65px;
}

p {
  margin-top: 11px;
  color: #3d3d3d;
  font-size: 23px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
}
</style>
