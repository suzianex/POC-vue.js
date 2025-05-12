import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css'; // Certifique-se que este arquivo existe e contém as diretivas do Tailwind

const app = createApp(App);

app.use(router);

app.mount('#app');

