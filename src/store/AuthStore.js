import { loginUser } from "@/services/AuthService";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    // Initialize state from local storage to enable the user to stay logged in
    token: JSON.parse(localStorage.getItem("token")),
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

        // Update Pinia state
        this.token = user.data.token;

        // Store user details and JWT in local storage to keep the user logged in between page refreshes
        localStorage.setItem("token", JSON.stringify(this.token));

        // Redirect to the previous URL or default to the home page
      } catch (error) {
        // Handle the error here, e.g., show an error message or perform some other action
        console.error("Login failed:", error);
        // You can throw the error again or return an error object to indicate the failure to the calling component
        throw error;
      }
    },
  },
});
