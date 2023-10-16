import { loginUser } from "@/services/AuthService";
import { getUserById } from "@/services/UserService";
import parseJwt from "@/utils/PasrseJwt";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
	state: () => ({
		// Initialize state from local storage to enable the user to stay logged in
		token: JSON.parse(localStorage.getItem("token")),
		user: {},
		error: "",
		loading: false,
	}),
	actions: {
		async getUserDetails() {
			try {
				const jwtDecoded = parseJwt(this.token);
				const userData = await getUserById(jwtDecoded.sub);

				// Store user details and JWT in local storage to keep the user logged in between page refreshes
				this.user = userData;
				localStorage.setItem("user", JSON.stringify(user));

				// Redirect to the previous URL or default to the home page
			} catch (error) {
				// Handle the error here, e.g., show an error message or perform some other action
				console.error("error fetching user:", error);
				// You can throw the error again or return an error object to indicate the failure to the calling component
				throw error;
			}
		},
	},
});
