<template>
    <div>
        <div v-for="(productItem, index) in cartProducts" :key="index">
            <!-- Product -->
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div class="flex w-2/5">
                    <div class="w-20">
                        <img class="h-24" :src="productItem.image" alt="">
                    </div>
                    <div class="flex flex-col justify-between ml-4 flex-grow">
                        <span class="font-bold text-sm">{{ productItem.title }}</span>
                        <span class="text-red-500 text-xs">{{ productItem.category }}</span>
                        <a href="#" @click="removeProduct(productItem.id)"
                            class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a>
                    </div>
                </div>
                <div class="flex justify-center w-1/5">
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                        @click="decreaseQuantity(productItem)">
                        <!-- Decrease quantity icon -->
                        <font-awesome-icon :icon="['fas', 'minus']" />
                    </svg>
                    <input class="mx-2 border text-center w-8" type="text" :value="productItem.quantity" readonly>
                    <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"
                        @click="increaseQuantity(productItem)">
                        <!-- Increase quantity icon -->
                        <font-awesome-icon :icon="['fas', 'plus']" />
                    </svg>
                </div>
                <span class="text-center w-1/5 font-semibold text-sm">${{ productItem.price }}</span>
                <span class="text-center w-1/5 font-semibold text-sm">${{ productItem.totalPrice }}</span>
            </div>
            <hr>
        </div>
    </div>
</template>
  
<script>
import { useProductDetails } from "@/composables/useProductDetails";
import { useProductStore } from "@/store/ProductStore";
import { useCartStore } from "@/store/CartStore";

import { ref, onMounted, computed } from "vue";

export default {
    props: ["cartItem"],
    setup(props) {
        const cartStore = useCartStore();
        const productStore = useProductStore();
        const { fetchProductDetails } = useProductDetails();
        const cartProducts = ref([]); // Use ref for cartProducts to make it reactive
        const totalAmount = ref(0); // Total price for all products

        const fetchProduct = async () => {
            await productStore.getProducts();
        };
        const calculateTotalPrice = () => {
            totalAmount.value = cartProducts.value.reduce((total, product) => total + product.totalPrice, 0);
        };

        const updateTotalPrice = (product) => {
            // Update the total price for the specific product
            product.totalPrice = product.price * product.quantity;
        };
        const getProductDetails = async (productId) => {
            try {
                // Make an API call to get product details by productId
                const productDetails = await productStore.products.find((product) => product.id === productId);
                return productDetails;
            } catch (error) {
                console.error("Error fetching product details:", error);
                return null;
            }
        };

        const updateCartProducts = (product) => {
            const updatedCartProducts = cartProducts.value.map((item) => {
                if (item.id === product.id) {
                    return product;
                }
                return item;
            });
            cartProducts.value = updatedCartProducts;
            calculateTotalPrice();
        };

        const decreaseQuantity = (product) => {
            if (product.quantity > 1) {
                product.quantity--;
                updateTotalPrice(product);
                updateCartProducts(product);
            }
        };

        const increaseQuantity = (product) => {
            product.quantity++;
            updateTotalPrice(product);
            updateCartProducts(product);
        };

        const updateQuantity = (product, event) => {
            const newQuantity = parseInt(event.target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                product.quantity = newQuantity;
                updateTotalPrice(product);
                updateCartProducts(product);
            }
        };

        const removeProduct = async (productId) => {
            // Implement removal logic here
            // await cartStore.removeCartItem(productId) //api call
            // Display a confirmation dialog
            const confirmed = window.confirm("Are you sure you want to remove this item from the cart?");
            try {
                await cartStore.removeCartItem(productId);

                // After successful removal, you can update the list of cart products
                const updatedCartProducts = cartProducts.value.filter((product) => product.id !== productId);
                cartProducts.value = updatedCartProducts;

                // Recalculate the total price after removal
                calculateTotalPrice();
            } catch (error) {
                console.error("Error removing product from the cart:", error);
            }
        };

        // Load products and set up cartProducts when the component is created
        onMounted(async () => {
            await fetchProduct();
            const resultsWithQuantity = [];
            for (const product of props.cartItem.products) {
                const productId = product.productId;
                const quantity = product.quantity;
                const details = await getProductDetails(productId);
                if (details) {
                    const totalPrice = details.price * quantity;
                    const result = { ...details, quantity, totalPrice };
                    resultsWithQuantity.push(result);
                }
            }
            cartProducts.value = resultsWithQuantity;
            calculateTotalPrice();
        });

        return {
            cartProducts,
            totalAmount,
            decreaseQuantity,
            increaseQuantity,
            updateQuantity,
            removeProduct,
        };
    },
};
</script>
  