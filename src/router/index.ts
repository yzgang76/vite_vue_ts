import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Child1 from "../components/Child1.vue";
const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect:'/login'  //访问 '/' 会自动跳转到 '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Child1
    },
    {
        path: '/home',
        name: 'home',
        component: () =>import ('../components/Child2.vue')
    },
    {
        path:'/user',
        children:[
            {
                path:'byQuery',
                name:'userByQuery',
                component:() => import('../components/UserDetails.vue')
            },
            {
                path:'byParams',
                name:'userByParams',
                component:() => import('../components/UserDetails2.vue')
            },
            {
                path:':id',
                name:'userByPath',
                component:() => import('../components/UserDetails2.vue')
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(), //路由模式
    routes:routers
})

export default router