<template>
  <!-- Main navigation container -->
  <!-- Main navigation container -->
  <nav
    class="relative flex w-full flex-wrap items-center justify-between bg-[#f5f5f5] text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 py-1"
    data-te-navbar-ref>
    <div class="flex w-full flex-wrap items-center  px-3">
      <div class="relative flex items-center w-width-60 justify-between mx-auto">
        <div class="flex items-center">
          <span v-if="authStore.isUserLoggedIn" class="flex items-center pr-3">
            <i class="material-icons pr-2">mail</i> {{ authStore.user.email }}
          </span>

          <!-- Twitter Icon -->
          <span>
            | Free shipping for all orders of $99
          </span>
        </div>
        <!-- Cart Icon -->


        <!-- Dropdown -->
        <button @click="handleAuthAction">
          {{ authStore.isUserLoggedIn ? 'Logout' : 'Login' }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from '@/store/AuthStore';

export default {
  name: "TheTopHeader",
  setup() {
    const authStore = useAuthStore();
    return { authStore }
  },
  methods: {
    redirectToLogin() {
      this.$router.push({ path: "/login" })
    },
    logout() {
      this.authStore.logout();
      this.redirectToLogin();
    },
    handleAuthAction() {
      if (this.authStore.isUserLoggedIn) { // Access the computed property using .value
        this.authStore.logout();
      } else {
        // Redirect to the login page or perform login action
 
        this.$router.push({ path: "login" });
      }
    },
    beforeCreate() {
      console.log("this.authStore.isUserLoggedIn", this.authStore.isUserLoggedIn)
    }
  }
}
</script>