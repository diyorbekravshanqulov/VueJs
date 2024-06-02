<script setup>
import { ref } from "vue";

const menu = ref(["Home", "Shop", "Plant Care", "Blogs"]);
const icon = ref(["../../public/search.svg", "../../public/cart.svg"]);

const isActive = ref(false);
const close = ref(false);

const modal = () => {
  close.value = true; // Update close ref to open the modal
};
</script>

<template>
  <div class="container mx-[10%] md:mx-0">
    <img src="../../public/greenshop.svg" alt="Green Shop Logo" />
    <div class="menu">
      <router-link
        class="md:flex md:duration-[0.1s] md:hover:font-semibold md:hover:border-b-[3px] md:hover:border-[#46a358] hidden"
        v-for="(item, index) in menu"
        :key="index"
        :to="index === 0 ? '/' : index === 1 ? '/shop' : ''"
      >
        {{ item }}
      </router-link>
    </div>
    <div class="icon">
      <img
        class="md:block hidden"
        v-for="item in icon"
        :key="item"
        :src="item"
        alt="Icon"
      />
      <button class="Login" @click="modal">Login</button>
    </div>

    <div
      @click="close = false"
      :class="{ hidden: !close }"
      class="z-10 bg-black/55 fixed inset-0"
    ></div>

    <div
      :class="{ hidden: !close }"
      class="fixed z-20 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 md:w-[500px] md:h-[600px] bg-white px-3 w-[80%] h-[65%]"
    >
      <button
        @click="close = false"
        class="text-[30px] w-[100%] text-end font-medium"
      >
        &times;
      </button>
      <div
        class="flex flex-wrap items-center justify-center divide-[#999] mt-[10px]"
      >
        <button
          :class="{ 'text-[#46A358]': !isActive }"
          class="font-medium text-2xl text-center w-[94px]"
          @click="isActive = false"
        >
          Login
        </button>
        <button
          :class="{ 'text-[#46A358]': isActive }"
          class="font-medium text-2xl text-center w-[120px]"
          @click="isActive = true"
        >
          Register
        </button>

        <div v-if="!isActive" class="flex flex-wrap">
          <p class="mt-[50px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
          </p>
          <input
            placeholder="almamun_uxui@outlook.com"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[80%] md:w-[60%] mt-[30px]"
          />

          <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] border border-[#46A358] placeholder:text-[#A5A5A5] rounded-md mx-auto w-[80%] md:w-[60%] mt-[30px]"
          />
          <a
            href="mailto:youremail@example.com"
            class="mt-[14px] text-[#46A358] leading-[14px] w-[60%] text-right mx-auto cursor-pointer"
          >
            Forgot Password?
          </a>

          <button
            class="md:px-[100px] py-[14px] text-[16px] font-medium text-[#fff] border rounded-md bg-[#46A358] mt-[27px] w-[80%] md:w-[60%] mx-auto"
          >
            Login
          </button>
          <p class="mt-[36px] text-[13px] w-[60%] mx-auto text-center">
            Or login with
          </p>
          <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Login with Google
          </p>
          <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Login with Facebook
          </p>
        </div>

        <div v-else class="flex flex-wrap">
          <p class="mt-[20px] text-center text-[#3D3D3D] text-[13px] w-[100%]">
            Enter your username and password to login.
          </p>
          <input
            placeholder="Username"
            type="text"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[80%] md:w-[60%] mt-[14px]"
          />
          <input
            placeholder="Email"
            type="email"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[80%] md:w-[60%] mt-4"
          />
          <input
            placeholder="Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[80%] md:w-[60%] mt-4"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name=""
            id=""
            class="px-[14px] py-[10px] placeholder:text-[#A5A5A5] border border-[#46A358] rounded-md mx-auto w-[80%] md:w-[60%] mt-4"
          />
          <button
            class="md:px-[100px] py-[14px] text-[16px] font-medium text-[#fff] text-center border rounded-md bg-[#46A358] mt-[27px] w-[80%] md:w-[60%] mx-auto"
          >
            Register
          </button>
          <p class="mt-[26px] text-[13px] w-[60%] mx-auto text-center">
            Or register with
          </p>
          <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">
            Register with Google
          </p>
          <p class="mt-[20px] text-[13px] w-[60%] mx-auto text-center">
            Register with Facebook
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
}

.menu,
.icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
}

.menu {
  display: flex;
  gap: 50px;
  color: #3d3d3d;
  border: 3px solid transparent;
}

.Login {
  margin-right: 5px;
  padding: 8px 28px;
  background: #46a358;
  border-radius: 6px;
  color: #fff;
  font-weight: 600;
}
</style>
