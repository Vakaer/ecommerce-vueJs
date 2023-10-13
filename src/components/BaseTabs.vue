<template>
    <div class="grid grid-cols-5 gap-5 py-10">
        <button v-for="category in allCategoriesList" :key="category"
            class="cursor-pointer border border-primary p-4 rounded text-primary font-bold shadow-md hover:bg-primary hover:text-white"
            @click="$emit('handleCategoryClick', category)"
            :class="{ active: category === selectedCategory }">
            <a class="flex justify-center">{{ category }}</a>
        </button>
    </div>
</template>

<script>
import { useCategoryStore } from "@/store/CategoryStore";
import BaseListLoader from "./BaseListLoader.vue";
import { storeToRefs } from "pinia";
export default {
    props: {
        categoriesList: Array,
    },
    setup() {
        const categoryStore = useCategoryStore()
        const { categories } = storeToRefs(categoryStore)
        const { getCategories } = categoryStore
        return { categories, getCategories }
    },
    data() {
        return {
            selectedCategory: "All",
        };
    },
    computed: {

        allCategoriesList() {
            // return ["All"];
            return ["All", ...this.categories];
        },

    },
    methods: {
        selectCategory(category) {
            this.selectedCategory = category;
        },
    },
    emits: [
        'handleCategoryClick'
    ]
}
</script>