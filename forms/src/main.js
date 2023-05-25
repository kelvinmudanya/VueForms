import { createApp } from 'vue'
import App from './App.vue'

import HeaderComp from './components/HeaderFooter/HeaderComp';
import FooterComp from './components/HeaderFooter/FooterComp';

const app = createApp(App);
app.component('app-header', HeaderComp);
app.component('app-footer', FooterComp);

app.mount('#app')
