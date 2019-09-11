import Login from '@/components/Login.vue';
import Dashboard from '@/components/Customer/Dashboard.vue';
import Register from '@/components/Register.vue';
import CommodityOwner from '@/components/owner/commodity/CommodityContainer.vue';
import TransactionOwner from '@/components/owner/transaction/TransactionContainer.vue';
import OwnerDashboard from '@/components/owner/Dashboard.vue';
import OwnerProfile from '@/components/owner/Profile.vue';

const routes = [
    { path: '/', component: Dashboard, name:'dashboard'},
    { path: '/login', component: Login, name:'login'},
    { path: '/register', component: Register, name:'register'},
    { path: '/owner/commodity', component: CommodityOwner, name:'commodityOwner'},
    { path: '/owner/transaction', component: TransactionOwner, name:'transactionOwner'},
    { path: '/owner', component: OwnerDashboard, name:'ownerDashboard'},
    { path: '/owner/profile', component: OwnerProfile, name:'ownerProfile'},
];

export default routes;