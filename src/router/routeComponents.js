const HomeView = () => import('../views/home/home.vue');
const NotFound = () => import('../views/error/NotFound.vue');
const AuthLayoutVue = () => import('../Layouts/AuthLayout.vue');
const LoginVue = () => import('../views/auth/Login.vue');
const BlogsView = () => import('../views/blogs/blogs.vue');
const ContactUsView = () => import('../views/contactUs/contactUs.vue');
const ShoppingCartView = () => import('../views/shoppingCart/shoppingCart.vue');

export {
  HomeView,
  NotFound,
  AuthLayoutVue,
  LoginVue,
  BlogsView,
  ContactUsView,
  ShoppingCartView,
};
