<script setup>
import Header from "../components/Header.vue";
import Email from "../components/Email.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import shop_root from "../components/shop_root.vue";
import shop_flowers from "../components/shop_flowers.vue";
import Text from "../components/Text.vue";
</script>
<template>
  <div class="flex flex-wrap justify-center">
    <Header />
    <shop_root />
    <shop_flowers />
    <Text />
    <Email />
    <Contact />
    <Footer />
  </div>
</template>
