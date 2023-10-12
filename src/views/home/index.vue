<template>
  <intercept>
    <home-layout>
      <router-view />
    </home-layout>
  </intercept>
</template>

<script>
import HomeLayout from "@/Layouts/HomeLayout.vue";
import Intercept from "@/utils/Intercept.vue";

export default {
  components: {
    "home-layout": HomeLayout,
    intercept: Intercept,
  },
};
</script>
