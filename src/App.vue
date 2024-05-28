<script setup>
import Header from "./components/Header.vue";
import Top_side from "./components/Top_side.vue";
import Category from "./components/category.vue";
import Menu from "./components/Menu.vue";
import Flowers from "./components/Flowers.vue";
import Pagination from "./components/pagination.vue";
import Info from "./components/Info.vue";
import Blogs from "./components/Blogs.vue";
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <Header />
    <Top_side />
    <div class="flex justify-end px-[10%] w-screen">
      <Menu />
    </div>
    <div class="md:flex w-screen px-[10%] md:gap-[50px]">
      <Category class="md:w-[calc(100%/4+5%)] w-full" />
      <Flowers />
    </div>

    <Pagination />
    <Info />
    <Blogs />
  </div>
</template>
