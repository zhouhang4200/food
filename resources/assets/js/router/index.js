import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const App = resolve => void (require(['../App'], resolve));

Vue.use(Router)

const App = resolve => void (require(['../components/Main'], resolve));

const router = new Router({
    mode:'history',
    routes: [
        {
            name: "login",
            menu: false,
            path: "/login",
            meta:{title:'登录'},
            component: resolve => void(require(['../components/auth/Login'], resolve)),
        },
        {
            name: "register",
            menu: false,
            path: "/register",
            meta:{title:'注册'},
            component: resolve => void(require(['../components/auth/Login'], resolve)),
        },
        {
            name: "h5",
            menu: false,
            path: "/h5/order",
            meta:{title:'h5订单'},
            component: resolve => void(require(['../components/h5/Order'], resolve)),
        },
        {
            name: "dish",
            icon: "el-icon-goods",
            path: '/dish/',
            redirect: '/dish/list',
            component: App,
            // canReuse: false,
            meta: {title: '菜肴管理'},
            menu: true,
            children: [
                {
                    name: "dishList",
                    menu: true,
                    path: "list",
                    meta: {title: '菜肴信息'},
                    component: resolve => void (require(['../components/dish/List'], resolve)),
                }
            ]
        },
        {
            name: "order",
            icon: "el-icon-goods",
            path: '/order/',
            redirect: '/order/list',
            component: App,
            // canReuse: false,
            meta: {title: '订单管理'},
            menu: true,
            children: [
                {
                    name: "orderList",
                    menu: true,
                    path: "list",
                    meta: {title: '订单信息'},
                    component: resolve => void (require(['../components/order/List'], resolve)),
                }
            ]
        }
    ]
})

// 访问权限
function canVisit(to) {
    return true;
}

//vue-router 前置拦截器
router.beforeEach((to, from, next) => {
    if(to.name === 'login' || to.name === 'register' || to.path === '/login') {
        next();
    } else {
        if (! sessionStorage.getItem('token') || sessionStorage.getItem('token') == null) {
            // next({path:'/login'});
            Vue.component('App', require('../components/Main.vue'));
            next();
        } else  {
            Vue.component('App', require('../components/Main.vue'));
            next();
        }
    }
});

// 后置拦截器
router.afterEach((to, from, next) => {

});
export default router;
