<template>
    <HomeLayout>
        <div class="w-width-60 mx-auto">
            <h1 class="text-center text-f44 mt-10 font-bold">Fashion Categories</h1>
            <TabbedCategories/>
        </div>
    </HomeLayout>
</template>

<script>
import { useProductStore } from '@/store/ProductStore';
import ProductListItem from '@/components/product/ProductListItem.vue';
import HomeLayout from '@/Layouts/HomeLayout.vue';
import TabbedCategories from '@/components/TabbedCategories.vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
    name: "HomeView",
    components: {
        ProductListItem,
        HomeLayout,
        TabbedCategories
    },
    setup() {
        const productStore = useProductStore();
        return {  productStore }
    },
    methods: {
        async getAllProduct() {
            await this.productStore.getProducts();
        }
    },
    created() {
        this.productStore.getProducts()
    }

}
</script>