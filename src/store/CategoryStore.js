import { getAllCategories } from "@/services/CategoryService";
import { defineStore } from "pinia";


export const useCategoryStore = defineStore("categoryStore", {
	state: () => ({
		categories: [],
		error: null,
		loading: false, // Add an error property to store error information
	}),

	actions: {
		async getCategories() {
			this.loading = true;
			try {
				const response = await getAllCategories();
				// console.log("response", response);
				if (response) {
					this.categories = response.data;
					this.error = null; // Reset the error if the request was successful
				} else {
					this.error = "Server returned a non-200 status code"; // Handle non-200 status codes
				}
			} catch (error) {
				this.error = "An error occurred while fetching categories"; // Handle network or other errors
				
			} finally {
				this.loading = false;
			}
		},
	},
});
