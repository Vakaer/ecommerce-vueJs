<template>
  <AuthLayout>

    <div class="flex mt-40 items-center justify-center">
      <div class="bg-gray lg:w-6/12 md:7/12 w-8/12 shadow-3xl mx-auto bg-secondary">
        <form @submit.prevent="login" class="p-12 md:p-24">
          <label>Username</label>
          <input type="text" class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full" v-model="username" />
          <label>Password</label>
          <input type="password" class="bg-gray-200 pl-2 py-2 md:py-4 focus:outline-none w-full" v-model="password" />
          <button type="submit"
            class="bg-gradient-to-b text-white bg-primary font-medium p-2 md:p-4  uppercase w-full mt-5">Login</button>
        </form>
      </div>

    </div>
  </AuthLayout>
</template>

<script >
import AuthLayout from '@/Layouts/AuthLayout.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useUserStore } from '@/store/UserStore';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  setup() {
    const authStore = useAuthStore();
    const userStore = useUserStore();
    return { authStore, userStore };
  },
  data() {
    return {
      username: "johnd",
      password: "m38rmF$",
    };
  },
  methods: {
    async login() {
      await this.authStore.login(this.username, this.password);
      this.$router.push({ path: '/', replace: true });
      toast.success(`Welcome ${this.authStore.user.username}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000
      });
    },
  },
  components: { AuthLayout }
};
</script>