import { getAllProducts } from "@/services/productService";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
	state: () => ({
		products: [],
		categories:[],
		error: null,
		loading: false, // Add an error property to store error information
	}),

	actions: {
		async getProducts() {
			this.loading = true;
			try {
				const response = await getAllProducts();
				if (response.status === 200) {
					this.products = response.data;
					this.error = null; // Reset the error if the request was successful
				} else {
					this.error = "Server returned a non-200 status code"; // Handle non-200 status codes
				}
			} catch (error) {
				this.error = "An error occurred while fetching products"; // Handle network or other errors
				console.error("Error fetching products:", error);
			} finally {
				this.loading = false;
			}
		},
		
	},

	getters: {
		// This getter will compute and return an array of unique categories
		uniqueCategories() {
		  const categories = new Set();
		  for (const product of this.products) {
			categories.add(product.category);
		  }
		  return Array.from(categories);
		},
	  },
});
