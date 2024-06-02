<script setup>
import { ref } from "vue";

const cate = ref([
  "House Plants",
  "Potter Plants",
  "Seeds",
  "Small Plants",
  "Big Plants",
  "Succulents",
  "Terrariums",
  "Gardening",
  "Gardening",
]);
const inside_cate = ref([
  "(33)",
  "(12)",
  "(65)",
  "(39)",
  "(23)",
  "(17)",
  "(19)",
  "(13)",
  "(18)",
]);

const cate_size = ref(["Small", "Medium", "Large"]);
const inside_cate_size = ref(["(119)", "(86)", "(78)"]);
</script>

<template>
  <div class="container ">
    <div class="general">
      <div class="top">
        <h2>Categories</h2>
        <div v-for="(item, index) in cate" :key="item" class="cate">
          <div class="inside_cate">
            <p>{{ item }}</p>
            <p>{{ inside_cate[index] }}</p>
          </div>
        </div>
      </div>
      <div class="middle">
        <h2>Price Range</h2>
        <div class="sm">
          <input type="range" />
          <p>Price: <span>$39 - $1230</span></p>
          <button>Filter</button>
        </div>
      </div>
      <div class="bottom">
        <h2>Size</h2>
        <div v-for="(item, index) in cate_size" :key="item" class="cate">
          <div class="inside_cate">
            <p>{{ item }}</p>
            <p>{{ inside_cate_size[index] }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="sale">
      <h2>Super Sale</h2>
      <p class="mb-6">UP TO 75% OFF</p>
      <img class="mx-auto" src="../../public/sale.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container {
  /* margin-top: 12px; */
  display: flex;
  flex-direction: column; /* Modified for vertical layout */
  /* padding: 26px 0; */
  gap: 20px; /* Modified for spacing between categories */
  position: relative;
  /* padding-right: 0; */
}

.general {
  padding: 0 20px;
}

.top {
  width: 100%;
}

.inside_cate {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.cate {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
}

p {
  transition: all 0.1s;
}
.inside_cate:hover p {
  color: #46a358;
  font-size: 15px;
  font-weight: 700;
  line-height: 40px;
  text-align: left;
}

h2 {
  margin-bottom: 20px;
  color: #3d3d3d;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
}

.middle {
  margin-top: 36px;
}

.sm {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  padding: 0 12px;
}

.sm input {
  margin-top: 29px;
}

.sm p {
  margin-top: 21px;
  font-size: 15px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #3d3d3d;
}
.sm span {
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  color: #46a358;
}

.sm button {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  background: #46a358;
  border-radius: 6px;
  padding: 8px 25px;
  color: #fff;
}

.bottom {
  margin-top: 46px;
}

@font-face {
  font-family: "Hanging Letters";
  src: url("../../public/font/hanging_letters/Hanged\ Letters.ttf");
}

.sale h2 {
  text-align: center;
  font-family: "Hanging Letters";
  color: #46a358;
  font-size: 65px;
  font-weight: 400;
  line-height: 65px;
}

.sale p {
  margin-top: 11px;
  color: #3d3d3d;
  font-size: 23px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
}


</style>
