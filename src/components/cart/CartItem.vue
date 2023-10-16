<template>
    <div>
        <h1>List</h1>
        <div v-for="(productItem, index) in productDetails" :key="index">
            <div>
                <h2>Product ID: {{ productItem.id }}</h2>
                <p>Product Name: {{ productItem.name }}</p>
                <p>Price: {{ productItem.price }}</p>
                <!-- Add more details you want to display -->
            </div>
        </div>
    </div>
</template>
  
<script>
import { useProductDetails } from "@/composables/useProductDetails";
import { useCartStore } from "@/store/CartStore";
import { useProductStore } from "@/store/ProductStore";

export default {
    props: ["cartItem"],
    setup() {
        const cartStore = useCartStore();
        const productStore = useProductStore();
        const { fetchProductDetails, productDetails } = useProductDetails();
        return { cartStore, fetchProductDetails, productDetails, productStore };
    },
    data() {
        return {
            productDetails: [],
        };
    },
    async created() {
        for (const item of this.cartStore.cartItems) {
            for (const product of item.products) {
                const details = await this.fetchProductDetails(product.productId);
                // console.log(details)
                // if (details) {
                //     // return [...this.productDetails, details];
                //     this.productDetails.push(details)
                // }
            }
        }
        // console.log("this.productDetails", this.productDetails)
    },

    methods: {
        async fetchProductDetails(productId) {
            // Make an API call to get product details by productId
            try {
                const response = await this.productStore.getProductById(productId);
                console.log('data ok', response.data)
                return response.data; // Replace this with how you access the product data in the API response
            } catch (error) {
                console.error("Error fetching product details okay?:", error);
                return null;
            }
        },
    },
};
</script>
  