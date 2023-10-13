<template>
    <div>
      <TheTopHeader />
      <TheMainHeader />
      <dialog></dialog>
      <slot></slot>
      <TheFooter />
    </div>
  </template>
    
    
  <script>
  import TheMainHeader from "@/components/TheMainHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
  import TheTopHeader from "@/components/TheTopHeader.vue";
  import SearchBar from "@/components/SearchBar.vue";
  import HomeBanner from "@/components/HomeBanner.vue";
  import SideDropDownMenu from "@/components/SideDropDownMenu.vue";
  export default {
    name: 'Intercept',
    components: {
      TheMainHeader,
      TheTopHeader,
      TheFooter,
      SearchBar,
      HomeBanner,
      SideDropDownMenu,
    },
    data() {
      return {
        msg: "",
        type: "",
        modal: false,
        loading: false,
      };
    },
  };
  </script>
  
  
  
  
    