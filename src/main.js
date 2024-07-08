import { createApp } from 'vue'
import App from './App.vue'
import '../tailwind.css'
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount('#app')
