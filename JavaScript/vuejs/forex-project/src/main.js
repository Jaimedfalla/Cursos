import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from "@/router";
import { toDollar, toPercent } from "@/filters";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import VueSpinners from "@saeris/vue-spinners";

const app = createApp(App);
app.use(router);

//Se agregan componentes desarrollados por terceros
app.use(VueSpinners);
app.use(VueChartkick);

app.mount("#app");

//Se agregan propiedades globales
app.config.globalProperties.$filters = { toDollar, toPercent };
