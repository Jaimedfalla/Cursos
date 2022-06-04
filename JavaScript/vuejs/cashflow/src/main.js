import { createApp } from 'vue'
import App from './App.vue'
import { amountCurrency } from './Filters.ts';

const app = createApp(App);
app.mount('#app');
app.config.globalProperties.$filters ={amountCurrency};