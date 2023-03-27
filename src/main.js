import { createApp } from 'vue'
import App from './App.vue'

/**Router */
import router from "./router/index.js";

/**CSS*/
import "bulma/css/bulma.css";
import "./assets/scss/global.scss"


createApp(App).use(router).mount('#app')