<template>
    <div>
      <h1>404</h1>
      <button
        type="submit"
        variant="primary"
        size="lg"
        class="btn-shadow"
        @click="goBack"
      >
        go back
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
      methods: {
      goBack() {
        this.$router.push("/");
      }
    },
  }
  </script>
  
  