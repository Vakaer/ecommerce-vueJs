<template>
   <!-- Main navigation container -->
<!-- Main navigation container -->
<nav
  class="relative flex w-full flex-wrap items-center justify-between bg-[#f5f5f5] text-neutral-500  hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 py-1"
  data-te-navbar-ref>
  <div class="flex w-full flex-wrap items-center  px-3">
    <div class="relative flex items-center w-width-60 justify-between mx-auto">
      <div class="flex items-center">
        <span class="flex items-center pr-3">
          <i class="material-icons pr-2">mail</i> abc@gmail.com
        </span>
  
      <!-- Twitter Icon -->
      <span>
      | Free shipping for all orders of $99
      </span>
      </div>
      <!-- Cart Icon -->
      

      <!-- Dropdown -->
      <button @click="redirectToLogin" >
        Login
      </button>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        name:"TheTopHeader",
        methods:{
          redirectToLogin(){
            this.$router.push({path:"/login"})
          }
        }
    }
</script>