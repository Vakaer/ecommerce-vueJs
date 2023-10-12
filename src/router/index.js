import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/home.vue";
import NotFound from "@/views/error/NotFound.vue";
import AuthLayoutVue from "@/Layouts/AuthLayout.vue";
import LoginVue from "@/views/auth/Login.vue";

const routes = [
	{
		path: "/",
		component: HomeView,
	},
	{
		path: "/blogs",
		name: "blogs",
		component: () => import(/* webpackChunkName: "about" */ "../views/blogs/blogs.vue"),
		meta:{
			requiresAuth:true
		}
	},
	{
		path: "/contactUs",
		name: "ContactUs",
		component: () => import("../views/contactUs/contactUs.vue"),
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/auth/Login.vue"),
	},
	
	{
		path: "/:catchAll(.*)",
		name: "NotFound",
		component: NotFound
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});


router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth) {
	  const token = localStorage.getItem('token');
	  if (token) {
		// User is authenticated, proceed to the route
		next();
	  } else {
		// User is not authenticated, redirect to login
		next('/login');
	  }
	} else {
	  // Non-protected route, allow access
	  next();
	}
  });
export default router;
