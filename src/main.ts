import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

import { createPinia } from 'pinia'
import router from '@/router/index'



const pinia = createPinia()



createApp(App).use(router).use(pinia).mount("#app");
