import { getAllCategories } from "@/services/CategoryService";
import { addProductToCart, getCartItemByUserId } from "@/services/CartService";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
	state: () => ({
		cartItems: [],
		error: null,
		loading: false, // Add an error property to store error information
	}),

	actions: {
		async addCartItems(userId, product, date) {
			this.loading = true;
			try {
				const cartData = {
					userId: userId,
					date: date,
					products: product,
				};
				console.log("cartData", cartData);
				const response = await addProductToCart(cartData);
				console.log("response", response);
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
		async getCartItemsByUser(id) {
			this.loading = true;
			try {
				const response = await getCartItemByUserId(id);
				if (response) {
					this.cartItems = response;
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
	getters:{
		
	}
});
