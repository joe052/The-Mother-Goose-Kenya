import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueSplide from '@splidejs/vue-splide';

/**styling */
//import "./style.css";
import '@splidejs/vue-splide/css';
import "./assets/tailwind.css"; //tailwind

const app = createApp(App);
app.use(router);
app.use( VueSplide );
app.mount("#app");
