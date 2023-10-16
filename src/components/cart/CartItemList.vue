<template>
    <div>
        <div v-for="item in cartStore.cartItems" :key="item.id">
            <CartItem :cartItem="item" />
        </div>
    </div>
</template>

<script>
import { useCartStore } from '@/store/CartStore';
import CartItem from './CartItem.vue';

export default {
    components: { CartItem },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    }
}
</script>