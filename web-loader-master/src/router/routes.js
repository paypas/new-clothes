import Login from '@/components/Login.vue';
import MainMenu from '@/components/MainMenu.vue';
import UploadAssesment from '@/components/UploadAssesment.vue';
import UploadBerita from '@/components/UploadBerita.vue';
import History from '@/components/History.vue';
import Login2 from '@/components/Login2.vue';
import Register from '@/components/Register.vue';

const routes = [
    { path: '/', component: Login, name:'login'},
    { path: '/mainmenu', component: MainMenu, name:'mainmenu'},
    { path: '/history', component: History, name:'history'},
    { path: '/assesment', component: UploadAssesment, name:'uploadassesment'},
    { path: '/berita', component: UploadBerita, name:'uploadberita'},
    { path: '/login2', component: Login2, name:'login2'},
    { path: '/register', component: Register, name:'register'},

];

export default routes;