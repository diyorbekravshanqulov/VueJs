<template>
  <div class="container">
    <div v-for="item in 9" class="box">
      <img src="../../public/flower.svg" alt="flower" />
      <p>Barberton Daisy</p>
      <p>$119.00</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 33px; 
  position: relative;
}

.box {
  padding: 30px 4px;
}
p:first-child {
  margin-top: 31px;
  color: #3d3d3d;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
}

p:last-child {
  margin-top: 6px;
  color: #46a358;
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
}
</style>
