import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import "./assets/main.css";
import { createPinia } from "pinia";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
	faCartShopping,
	faHeart,
	faPhone,
	faHamburger,
	faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faCartShopping, faHeart, faPhone, faHamburger, faCaretDown);

const app = createApp(App);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(Vue3Toasity);
app.use(router);
app.mount("#app");
