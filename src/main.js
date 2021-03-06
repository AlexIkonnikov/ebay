import { createApp } from 'vue';
import store from './store.js';
import App from './App.vue';
import './css/style.scss';
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


createApp(App)
    .use(store)
    .mount('#app');

