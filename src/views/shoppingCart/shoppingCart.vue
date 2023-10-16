<template>
    <HomeLayout>
        <div class="h-screen">
            <div class="w-full py-6 font-bold mt-4 flex items-center justify-center bg-slate-200 text-f44">
                <h1>Shopping Cart</h1>
            </div>
            <div>
                <CartItemList />
            </div>
        </div>
    </HomeLayout>
</template>

<script>
import HomeLayout from '@/Layouts/HomeLayout.vue';
import CartItemList from '@/components/cart/CartItemList.vue';
import { useAuthStore } from '@/store/AuthStore';
import { useCartStore } from '@/store/CartStore';
export default {
    components: {
        HomeLayout,
        CartItemList
    },
    setup() {
        const authStore = useAuthStore();
        const cartStore = useCartStore();
        return { authStore, cartStore }
    },
    methods: {
        getCartItems(id) {
            this.cartStore.getCartItemsByUser(id)
        }
    },
    created() {
        if (this.authStore.isUserLoggedIn && this.authStore.user.id) {
            this.getCartItems(this.authStore.user.id)
        } else {
            throw Error("User not logged in")
        }
    }
}
</script>