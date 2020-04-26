const Index = () => import('@/views/home/index');
const UserList = () => import('@/views/user/list');
const UserAdd = () => import('@/views/user/add');
const DriverList = ()=> import('@/views/driver/list');
const DriverAdd = ()=> import('@/views/driver/add')


export default [
    {
        path:'/',
        name:'首页',
        component: Index,
        meta:{
            needAuth: true
        }
    },
    {
        path:'/user/list',
        name:'用户列表',
        component: UserList,
        meta:{
            needAuth: true
        }
    },
    {
        path:'/user/add',
        name:'新增用户',
        component: UserAdd,
        meta:{
            needAuth: true
        }
    },
    {
        path:'/driver/list',
        name:'设备列表',
        component: DriverList,
        meta:{
            needAuth: true
        }
    },
    {
        path:'/driver/add',
        name: '添加设备',
        component: DriverAdd,
        meta:{
            needAuth: true
        }
    }
]