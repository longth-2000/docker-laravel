import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/App.vue'
import Welcome from './components/Welcome.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Welcome
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
