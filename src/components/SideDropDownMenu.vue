<template>
    <!-- component -->

    <div class="w-width-24">
        <div class="bg-primary py-4 flex justify-center items-center gap-3" @click="toggleContent">
            <span class="text-white font-bold">Products Category</span>
            <font-awesome-icon :icon="['fas', 'bars']" size="lg"  />
            <font-awesome-icon :icon="['fas', 'caret-down']" size="lg" color="#fff" :class="[`${showContent ? 'rotate-360' : 'rotate-180'}`]" />
        </div>
        <div class="ps-6 border transition ease-out duration-1000" :class="{ 'h-0': !showContent }" v-if="showContent">
            <ul class="flex flex-col py-5 gap-3" v-for="category in categories" :key="category" >
                <li>{{ category }}</li>
                <!-- <li>A second item</li>
                <li>A third item</li>
                <li>A fourth item</li>
                <li>And a fifth one</li>
                <li>An item</li>
                <li>A second item</li>
                <li>A third item</li>
                <li>A fourth item</li>
                <li>And a fifth one</li> -->
            </ul>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '@/store/ProductStore';

export default {
    name: "SideDropDownMenu",
    setup(){
      const productStore = useProductStore(); 
      return{productStore}
    },
    data() {
        return {
            showContent: true,
        };
    },
    methods: {
        toggleContent() {
            this.showContent = !this.showContent;
        },
        
    },
    computed:{
        categories(){
            this.productStore.uniqueCategories
        }
    }
};
</script>
