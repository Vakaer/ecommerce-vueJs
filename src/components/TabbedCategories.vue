<template>
	<div>
		<div v-if="loading">
			<BaseListLoader />
		</div>
		<div v-else>
			<div v-if="isProductsEmpty">
				<h1 class="text-f28 text-center font-bold py-44">Oops..No products found</h1>
			</div>
			<div v-else>
				<!-- <div class="grid grid-cols-5 gap-5 py-10">
					<button v-for="category in allCategoriesList" :key="category"
						class="cursor-pointer border border-primary p-4 rounded text-primary font-bold shadow-md hover:bg-primary hover:text-white"
						@click="selectCategory(category)" :class="{ active: category === selectedCategory }">
						<a class="flex justify-center">{{ category }}</a>
					</button>
				</div> -->
				<BaseTabs @handle-category-click="handleCategoryClick" />
				<div class="flex flex-wrap gap-3">
					<div v-for="product in filteredProducts" :key="product.id" class="w-width-24 mt-5">
						<ProductListItem :product="product" @handle-add-items-to-cart="addItemsToCart" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useProductStore } from "@/store/ProductStore";
import ProductListItem from "./product/ProductListItem.vue";
import BaseListLoader from "./BaseListLoader.vue";
import { storeToRefs } from "pinia";
import BaseTabs from "./BaseTabs.vue";
import { useAuthStore } from "@/store/AuthStore";
import { useCartStore } from "@/store/CartStore";
import { date } from "yup";

export default {
	components: { ProductListItem, BaseListLoader, BaseTabs },
	setup() {
		const productStore = useProductStore();
		const cartStore = useCartStore();
		const authStore = useAuthStore();
		const { productByCategory, products, loading, error } = storeToRefs(productStore)
		const { getCategorySpecificProducts, getProducts } = productStore;
		const { addCartItems } = cartStore;
		return { cartStore, authStore, productByCategory, products, loading, error, getCategorySpecificProducts, getProducts, addCartItems }
	},
	data() {
		return {
			selectCategory: "All"
		}
	},
	watch: {
		selectCategory: {
			immediate: true,
			handler(newCategory, oldCategory) {
				// This code will run when the component is created, setting the initial value for category
				console.log('Category changed to:', newCategory);
				if (newCategory === "All") {
					this.getProducts();
				} else {
					// this.getProdByCategory(newCategory);
					console.log(this.selectCategory)
					this.products.filter((product) => product.category === this.selectCategory);
				}
			},
		}
	},
	computed: {
		filteredProducts() {
			if (this.selectCategory === "All") {
				return this.products;
			} else {
				return this.products.filter((product) => product.category === this.selectCategory);
				// return this.productByCategory
			}
		},
		allCategoriesList() {
			return ["All", ...this.categories];
		},
		isProductsEmpty() {
			return (this.products && this.products.length === 0) || this.products === undefined;
		},
		formattedDate() {
			const currentDate = new Date();
			// Format the date as "YYYY-MM-DD"
			return currentDate.toISOString().split('T')[0];
		}
	},
	methods: {
		handleCategoryClick(category) {
			this.selectCategory = category
		},
		getProdByCategory(category) {
			this.getCategorySpecificProducts(category)
		},
		async addItemsToCart(id) {
			const productData = {
				productId: id,
				quantity: 1
			}
			const currentDate = this.formattedDate
			const userId = this.authStore.user.id
			// const cartItem = {
			// 	userId: userId,
			// 	date: currentDate,
			// 	product: productData
			// }
			// console.log('product', cartItem)
			this.cartStore.addCartItems(userId, productData, currentDate)
		}
	}
};
</script>

<style scoped>
.active {
	background-color: #7fad39;
	color: white;
}
</style>
