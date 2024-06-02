<script setup>
import { ref } from "vue";

const topText = ref(["Product Description", "Reviews (19)"]);

const longText = ref([
  "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
  "Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. ",
]);

const h2Text = ref(["Living Room:", "Dining Room:", "Office:"]);
const pText = ref([
  "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.",
  "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
]);
</script>
<template>
  <div class="container flex flex-wrap py-8 md:p-15 mt-[94px]">
    <div class="flex gap-[30px]">
      <h3
        class="text-[#3D3D3D] text-[17px] hover:font-bold hover:text-[#46A358] border-b-transparent border-b-[3px] hover:border-b-[#46A358] duration-300"
        v-for="(item, index) in topText"
        :key="index"
      >
        {{ item }}
      </h3>
    </div>
    <div class="flex gap-10 flex-wrap mt-[30px]">
      <p
        class="text-[#727272] w-full"
        v-for="(item, index) in longText"
        :key="index"
      >
        {{ item }}
      </p>
    </div>
    <div
      v-for="(item, index) in 3"
      :key="index"
      class="flex flex-wrap gap-1 mt-[18px]"
    >
      <h2 class="w-full text-[#3D3D3D] font-bold">{{ h2Text[index] }}</h2>
      <p class="w-full text-[#727272]">{{ pText[index] }}</p>
    </div>
  </div>
</template>
