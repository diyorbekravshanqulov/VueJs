<template>
  <div class="container px-[10%]">
    <!-- Flex container for aligning items -->
    <div class="flex items-center py-[100px] justify-end gap-[13px]">
      <!-- Loop to generate 4 buttons -->
      <button
        v-for="item in 4"
        :key="item"
        class="px-[15px] py-[10px] hover:bg-[#46A358] border border-black hover:border-transparent rounded-[4px] hover:text-white text-[18px] font-bold"
      >
        {{ item }}
      </button>
      <!-- Button with '>' character -->
      <button
        class="px-[15px] py-[10px] hover:bg-[#46A358] border border-black hover:border-transparent rounded-[4px] hover:text-white text-[18px] font-bold"
      >
        &gt;
      </button>
    </div>
  </div>
</template>
