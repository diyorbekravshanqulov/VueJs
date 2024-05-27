<script setup>
import { ref } from "vue";

const menu = ref(["Home", "Shop", "Plant Care", "Blogs"]);
const icon = ref(["../../public/search.svg", "../../public/cart.svg"]);
</script>

<template>
  <div class="container">
    <img src="../../public/greenshop.svg" alt="Green Shop Logo" />
    <div class="menu">
      <a v-for="item in menu" :key="item" href="#">{{ item }}</a>
    </div>
    <div class="icon">
      <img v-for="item in icon" :key="item" :src="item" alt="Icon" />
      <button>Login</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
}

.menu,
.icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}

.menu {
  display: flex;
  gap: 50px;
  color: #3d3d3d;
  border: 3px solid transparent;
}

a {
  transition: all 0.1s;
}

a:hover {
  font-weight: 900;
  border-bottom: 3px solid #46a358;
}

button {
  margin-right: 5px;
  padding: 8px 28px;
  background: #46a358;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
}
</style>
