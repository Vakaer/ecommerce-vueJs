<template>
  <div>
    <TheTopHeader />
    <TheMainHeader />
    <div class="flex items-start justify-between w-width-60  mx-auto">
      <SideDropDownMenu />
      <div class="flex flex-col gap-5 w-width-73">
        <div class="flex items-center gap-10">
          <SearchBar />
          <div class="flex items-center">
            <div class="rounded-full bg-gray px-5 py-4">
              <font-awesome-icon color="#7fad39" :icon="['fas', 'phone']" />
            </div>
            <div>
              <div class="font-bold">+65 11.188.888</div>
              <div>support 24/7</div>
            </div>

          </div>
        </div>
        <HomeBanner />
      </div>
    </div>
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




  