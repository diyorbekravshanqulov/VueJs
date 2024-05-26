<script setup>
import { ref } from "vue";

const items = ref(["All Plants", "New Arrivals", "Sale"]);
</script>

<template>
  <div class="container">
    <div class="right">
      <a v-for="item in items" :key="item" href="">{{ item }}</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 310px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  /* padding: 26px 10%; */
  gap: 20px;
  position: relative; 
  
}
</style>
