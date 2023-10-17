<template>
    <div>
        <div class="container mx-auto mt-10">
            <div class="flex  my-10 justify-center">
                <div class="w-3/4 bg-white px-10 py-10">
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-bold  uppercase w-2/5">Product</h3>
                        <h3 class="font-bold   uppercase w-1/5 text-center">
                            Quantity</h3>
                        <h3 class="font-bold   uppercase w-1/5 text-center">
                            Price</h3>
                        <h3 class="font-bold   uppercase w-1/5 text-center">
                            Total</h3>
                    </div>
                    <hr>
                    <div v-if="cartStore.loading">
                        <BaseListLoader />
                    </div>
                    <div v-else>
                        <div v-for="item in cartStore.cartItems" :key="item.id">
                            <CartItem :cartItem="item" />
                        </div>
                    </div>
                    <button class="bg-[#f5f5f5] py-2 px-5 mt-10 font-bold text-[#6f6f6f]">Continue Shopping</button>
                </div>
                <div id="summary" class="w-1/4 px-8 py-10">
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Items 3</span>
                        <span class="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select class="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div class="py-10">
                        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full">
                    </div>
                    <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button
                            class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/CartStore';
import CartItem from './CartItem.vue';
import BaseListLoader from '../BaseListLoader.vue';

export default {
    components: { CartItem, BaseListLoader },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    }
}
</script>