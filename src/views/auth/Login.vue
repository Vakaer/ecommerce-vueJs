<template>
  <div class="h-screen">
    <div class="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl mx-auto">
      <form @submit.prevent="login" class="p-12 md:p-24">
        <label>Username</label>
        <input type="text" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" v-model="username" />
        <label>Password</label>
        <input type="password" class="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" v-model="password" />
        <button type="submit"
          class="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full mt-5">Login</button>
      </form>
    </div>

  </div>
</template>

<script >
import { useAuthStore } from '@/store/AuthStore';
export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      username: "johnd",
      password: "m38rmF$",
    };
  },
  methods: {
    async login() {
      debugger
      await this.authStore.login(this.username, this.password)
      this.$router.push({path:'/'});
    },
  },
};
</script>