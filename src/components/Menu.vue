<script setup>
import { ref } from "vue";

const items = ref(["All Plants", "New Arrivals", "Sale"]);
</script>

<template>
  
  <div class="container md:w-[74%] w-full">
    <div class="right">
      <a v-for="item in items" :key="item" href="">{{ item }}</a>
    </div>
    <div class="md:block hidden ">
      <p>Short by: Default sorting</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  display: flex;
  padding: 26px 0;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;
}

.right {
  display: flex;
  gap: 37px;
  color: #3d3d3d;
  border: 3px solid transparent;
}

a {
  border-bottom: 3px solid transparent;
  transition: all 0.1s;
}

a:hover {
  font-size: 15px;
  color: #46a358;
  font-weight: 700;
  border-bottom: 3px solid #46a358;
}
</style>
