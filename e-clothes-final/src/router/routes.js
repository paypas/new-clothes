import Login from '@/components/Login.vue';
import Dashboard from '@/components/Customer/Dashboard.vue';
import Register from '@/components/Register.vue';

const routes = [
    { path: '/', component: Dashboard, name:'dashboard'},
    { path: '/login', component: Login, name:'login'},
    { path: '/register', component: Register, name:'register'},

];

export default routes;