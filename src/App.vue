<script setup>
import Header from "./components/Header.vue";
import Top_side from "./components/Top_side.vue";
import Category from "./components/category.vue";
import Menu from "./components/Menu.vue";
import Flowers from "./components/Flowers.vue";
import Pagination from "./components/pagination.vue";
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
    <Flowers></Flowers>
    </div>

    <Pagination />
  </div>
</template>
