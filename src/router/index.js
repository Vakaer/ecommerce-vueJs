import { createRouter, createWebHistory } from "vue-router";

import { HOME, BLOGS, CONTACT_US, LOGIN, SHOPPING_CART, NOT_FOUND } from "./routePaths";
import { BlogsView, ContactUsView, HomeView, LoginVue, NotFound, ShoppingCartView } from "./routeComponents";

const routes = [
	{
		path: HOME,
		component: HomeView,
	},
	{
		path: BLOGS,
		name: "blogs",
		component: BlogsView,
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: CONTACT_US,
		name: "ContactUs",
		component: ContactUsView,
	},
	{
		path: LOGIN,
		name: "Login",
		component: LoginVue,
	},
	{
		path: SHOPPING_CART,
		name: "ShoppingCart",
		component: ShoppingCartView,
	},
	{
		path: NOT_FOUND,
		name: "NotFound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
		const token = localStorage.getItem("token");
		if (token) {
			// User is authenticated, proceed to the route
			next();
		} else {
			// User is not authenticated, redirect to login
			next(LOGIN);
		}
	} else {
		// Non-protected route, allow access
		next();
	}
});

export default router;
