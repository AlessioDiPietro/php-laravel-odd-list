import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from './pages/Home';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Product from './pages/Product';

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/i-nostri-servizi',
            name: 'service',
            component: Service
        },
        {
            path: '/i-nostri-contatti',
            name: 'contact',
            component: Contact
        },
        {
            path: '/i-nostri-prodotti',
            name: 'product',
            component: Product
        }
    ]
});
export default router;
