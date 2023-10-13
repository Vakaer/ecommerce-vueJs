import { getAllProducts, getProductsByCategory } from "@/services/productService";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
	state: () => ({
		productByCategory: [],
		products: [],
		error: null,
		loading: false, // Add an error property to store error information
	}),

	actions: {
		async getProducts() {
			this.loading = true;
			try {
				const response = await getAllProducts();
				console.log("response", response);
				if (response) {
					this.products = response;
					this.error = null; // Reset the error if the request was successful
				} else {
					this.error = "Server returned a non-200 status code"; // Handle non-200 status codes
				}
			} catch (error) {
				this.error = "An error occurred while fetching products"; // Handle network or other errors
			} finally {
				this.loading = false;
			}
		},
		async addProduct(data) {
			try {
				const response = await this.addProduct(data);
			} catch (error) {}
		},
		async getCategorySpecificProducts(category) {
			debugger
			this.loading = true;
			try {
				const response = await getProductsByCategory(category);
				if (response) {
					this.productByCategory = response.data;
					this.error = null; // Reset the error if the request was successful
				} else {
					this.error = "Server returned a non-200 status code"; // Handle non-200 status codes
				}
			} catch (error) {
				this.error = "An error occurred while filtering products by category"; // Handle network or other errors
			} finally {
				this.loading = false;
			}
		},
	},
});
