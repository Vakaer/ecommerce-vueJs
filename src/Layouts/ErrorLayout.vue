<template>
    <Intercept>
        <slot></slot>
    </Intercept>
</template>

<script>
import Intercept from '@/utils/Intercept.vue';
export default {
    components: {
        Intercept
    }
}
</script>