<template>
  <!-- Main navigation container -->
  <nav
    class="relative flex w-full flex-nowrap items-center justify-between py-2 text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
    data-te-navbar-ref>
    <div class="flex flex-wrap items-center justify-between px-3 w-width-60 mx-auto">
      <div>
        <router-link to="/" class="text-f28 text-primary font-bold  ">FASHIONISTA</router-link>
      </div>
      <!-- Hamburger button for mobile view -->
      <button
        class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
        type="button" data-te-collapse-init data-te-target="#navbarSupportedContent3"
        aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
        <!-- Hamburger icon -->
        <span class="[&>svg]:w-7">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
            <path fill-rule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>

      <!-- Collapsible navbar container -->
      <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
        id="navbarSupportedContent3" data-te-collapse-item>
        <!-- Left links -->
        <div class="list-style-none mr-auto gap-10 flex flex-col pl-0 lg:mt-1 lg:flex-row ms-60" data-te-navbar-nav-ref>
          <!-- Home link -->
          <div class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
            <router-link class=" text-f16 font-bold text-black lg:px-2 [&.active]:text-primary " to="/">Home
            </router-link>
          </div>
          <!-- Features link -->
          <div class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <router-link class="text-f16 font-bold text-black lg:px-2 [&.active]:text-primary" to="/blogs"
              data-te-nav-link-ref>Blog</router-link>
          </div>
          <!-- Pricing link -->
          <div class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
            <router-link class="text-f16 font-bold text-black lg:px-2 [&.active]:text-primary" to="/contactUs"
              data-te-nav-link-ref>Contact Us</router-link>
          </div>
        </div>
      </div>
      <div v-if="authStore.isUserLoggedIn">
        <div class="flex gap-3 items-center">
          <span>
            <font-awesome-icon icon="cart-shopping" class="fa-lg cursor-pointer" @click="redirectToShoppingCart" />
          </span>
          <span>
            <font-awesome-icon :icon="['fas', 'heart']" class="fa-lg cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script >
import { useAuthStore } from '@/store/AuthStore';
export default {
  name: "TheMainHeader",
  setup() {
    const authStore = useAuthStore();
    return { authStore }
  },
  methods: {
    redirectToShoppingCart() {
      this.$router.push({ path: 'shoppingCart' })
    }
  },
};
</script>

<style scoped>
.fa-cart-shopping:hover {
  color: green;
}

.fa-heart:hover {
  color: red;
}
</style>