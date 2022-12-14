import { createApp } from "vue";
import "tachyons/css/tachyons.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./cloudinary.js";

createApp(App).use(store).use(router).mount("#app");
