<template>
    <!-- component -->

    <div class="w-width-24">
        <div class="bg-primary py-4 flex justify-center items-center gap-3 cursor-pointer" @click="toggleContent">
            <span class="text-white font-bold">Products Category</span>
            <font-awesome-icon :icon="['fas', 'caret-down']" size="lg" color="#fff"
                :class="[`${showContent ? 'rotate-360' : 'rotate-180'}`]" />
        </div>
        <div class="ps-6 border transition ease-out duration-1000" :class="{ 'h-0': !showContent }" v-if="showContent">
            <ul class="flex flex-col py-5 gap-3" v-for="category in categories" :key="category">
                <li>{{ category }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useCategoryStore } from '@/store/CategoryStore';
import { storeToRefs } from 'pinia';

export default {
    name: "SideDropDownMenu",
    setup() {
        const categoryStore = useCategoryStore();
        const { getCategories } = categoryStore;
        const { categories } = storeToRefs(categoryStore);
        return { categories, getCategories };
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
    created() {
        this.getCategories();
    }

};
</script>
