import { loginUser } from "@/services/AuthService";
import { getUserById } from "@/services/UserService";
import parseJwt from "@/utils/PasrseJwt";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
	state: () => ({
		// Initialize state from local storage to enable the user to stay logged in
		token: JSON.parse(localStorage.getItem("token")),
		user: JSON.parse(localStorage.getItem("user")) || {},
		returnUrl: null,
	}),
	actions: {
		async login(username, password) {
			try {
				const data = {
					username: username,
					password: password,
				};
				const user = await loginUser(data);
				const jwtDecoded = parseJwt(user.data.token);
				const userData = await getUserById(jwtDecoded.sub);

				// Store user details and JWT in local storage to keep the user logged in between page refreshes
				this.token = user.data.token;
				this.user = userData;
				// Update Pinia state

				// Store user details and JWT in local storage to keep the user logged in between page refreshes
				localStorage.setItem("token", JSON.stringify(user.data.token));
				localStorage.setItem("user", JSON.stringify(userData));

				// Redirect to the previous URL or default to the home page
			} catch (error) {
				// Handle the error here, e.g., show an error message or perform some other action
				console.error("Login failed:", error);
				// You can throw the error again or return an error object to indicate the failure to the calling component
				throw error;
			}
		},
		async logout() {
			this.token = null;
			this.user = {};
			localStorage.clear();
		},
	},
	getters: {
		isUserLoggedIn() {
			return this.token !== null;
		},
	},
});
