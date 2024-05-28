<template>
  <div class="container px-[10%]">
    <!-- Flex container for aligning items -->
    <div class="flex items-center py-[100px] justify-end gap-[13px]">
      <!-- Loop to generate 4 buttons -->
      <button
        v-for="item in 4"
        :key="item"
        class="md:px-[15px] md:py-[10px] px-[10px] py-[5px] hover:bg-[#46A358] border text-[#777] border-[#777] hover:border-transparent rounded-[4px] hover:text-white text-[18px] font-bold"
      >
        {{ item }}
      </button>
      <!-- Button with '>' character -->
      <button
        class="md:px-[15px] md:py-[10px] px-[10px] py-[5px] hover:bg-[#46A358] border text-[#777] border-[#777] hover:border-transparent rounded-[4px] hover:text-white text-[18px] font-bold"
      >
        &gt;
      </button>
    </div>
  </div>
</template>
