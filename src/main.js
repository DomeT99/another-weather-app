import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

/**Router */
import router from "./router/index.js";

/**CSS*/
import "bulma/css/bulma.css";
import "./assets/scss/global.scss";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
