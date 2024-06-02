<template>
  <div>
    <div class="container">
      <button @click="backPage">Back</button>
      <h1 class="text-3xl">Product Details id: {{ route.params.id }}</h1>
      <button @click="handleClick">Home</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();

const handleClick = () => {
  router.push("/");
};

const backPage = () => {
    router.go(-1)
}

console.log("router:", route);
</script>
