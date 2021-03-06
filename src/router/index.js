import Vue from 'vue';
import VueRouter from 'vue-router';
import TopLeftContent from './topLeftContent'
import storege from '@/storege'; 


const Layout = () => import('@/views/layout/layout')
const Login = () => import('@/views/site/login')


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Layout,
            meta:{
                needLogin:true
            },
            children:TopLeftContent
        },
        {
            path:'/site/login',
            name:'登录',
            component: Login,
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
});

router.beforeEach((to, from, next)=>{
    const token = storege.getItem('accessToken');
    if(to.meta.needAuth && !token){
        router.replace('/site/login')
    }
    next();
})

export default router