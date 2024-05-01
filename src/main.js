import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.axios = axios
app.config.globalProperties.HOST = "http://localhost:8000"
app.mount('#app');
