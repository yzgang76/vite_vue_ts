import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Child1 from "../components/Child1.vue";
import VideoPlayer from "../components/VideoPlayer.vue";
import VidoeRTC from "../components/VidoeRTC.vue";
const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect:'/rtc'  //访问 '/' 会自动跳转到 '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Child1
    },
    {
        path: '/video',
        name: 'video',
        component: VideoPlayer
    },
    {
        path: '/rtc',
        name: 'RTC',
        component: VidoeRTC
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