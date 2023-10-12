<template>
    <HomeLayout>
        <div class="w-width-60 mx-auto">
            <h1 class="text-2xl text-center py-10">HomeView</h1>
            <div class="flex flex-wrap gap-3">
                <div v-for="product in productStore.products" :key="product.id" class="w-width-24">
                    <ProductListItem :product="product" />
                </div>
            </div>
        </div>
    </HomeLayout>
</template>

<script>
import { useProductStore } from '@/store/ProductStore';
import ProductListItem from '@/components/product/ProductListItem.vue';
import HomeLayout from '@/Layouts/HomeLayout.vue';


export default {
    name: "HomeView",
    components: {
        ProductListItem,
        HomeLayout
    },
    setup() {
        const productStore = useProductStore();
        return { productStore }
    },
    data() {
        return {
            products: []
        }
    },
    methods: {
        async getAllProduct() {
            this.productStore.getProducts()
        }
    },
    created() {
        this.getAllProduct()
    }

}
</script>