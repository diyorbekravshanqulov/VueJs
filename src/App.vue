<script setup>
import Header from "./components/Header.vue";
import Top_side from "./components/Top_side.vue";
import Category from "./components/category.vue";
import Sale from "./components/Sale.vue";
import Menu from "./components/Menu.vue";
import Flowers from "./components/Flowers.vue";
</script>

<template>
  <Header />
  <Top_side />
  <div>
    <Category />
    <Menu />
    <Sale />
    <Flowers class="flower"></Flowers>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
Menu,
.flower {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.flower {
  grid-template-rows: repeat(3, 1fr);
}
</style>
