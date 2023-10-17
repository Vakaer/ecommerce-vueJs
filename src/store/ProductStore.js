import { getAllProducts, getProductsByCategory, getProductsById } from "@/services/productService";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
	state: () => ({
		productByCategory: [],
		productDetails: null,
		products: [],
		error: null,
		loading: false, // Add an error property to store error information
	}),

	actions: {
		async getProducts() {
			this.loading = true;
			try {
				const response = await getAllProducts();
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
		async getProductById(id) {
			debugger;
			this.loading = true;
			try {
				const response = await getProductsById(id);
				if (response) {
					this.productDetails = [...this.productDetails, response];
					this.error = null; // Reset the error if the request was successful
				} else {
					this.error = "Server returned a non-200 status code"; // Handle non-200 status codes
				}
			} catch (error) {
				this.error = "An error occurred while fetching product details"; // Handle network or other errors
			} finally {
				this.loading = false;
			}
		},
	},
});
