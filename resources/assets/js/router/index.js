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
            name: "h5Auth",
            menu: false,
            path: "/h5/auth",
            meta:{title:'身份认证'},
            component: resolve => void(require(['../components/h5/Auth'], resolve)),
        },
        {
            name: "wechatOrder",
            menu: false,
            path: "/h5/wechat/order",
            meta:{title:'h5订单'},
            component: resolve => void(require(['../components/h5/WechatOrder'], resolve)),
        },
        {
            name: "alipayOrder",
            menu: false,
            path: "/h5/alipay/order",
            meta:{title:'h5订单'},
            component: resolve => void(require(['../components/h5/AlipayOrder'], resolve)),
        },
        {
            name: "h5Order",
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
    if(to.name === 'login' || to.name === 'register') {
        next();
    } else if(to.name === 'h5Auth') {
        // var ua = window.navigator.userAgent.toLowerCase();
        // //判断是不是微信
        // if (ua.match(/MicroMessenger/i) == 'micromessenger' ) {
        //     let merchant_id = to.query.merchant_id;
        //     let table_id = to.query.table_id;
        //     let seat_id = to.query.seat_id;
        //
        //     next({
        //         name:'wechatOrder',
        //         query:{
        //             merchant_id:merchant_id,
        //             table_id:table_id,
        //             seat_id:seat_id
        //         }
        //     });
        // }
        // //判断是不是支付宝
        // if (ua.match(/AlipayClient/i) == 'alipayclient') {
        //     next({
        //         name:'alipayOrder',
        //         query:{
        //             merchant_id:1,
        //             table:1,
        //             seat:1
        //         }
        //     });
        // }
        // // console.log(to.query.merchant_id);
        // // 当前路由的merchant_id
        // let merchant_id = to.query.merchant_id;
        // let table_id = to.query.table_id;
        // let seat_id = to.query.seat_id;
        next();

        // next({
        //     name:'wechatOrder',
        //     query:{
        //         merchant_id:merchant_id,
        //         table_id:table_id,
        //         seat_id:seat_id
        //     }
        // });
    } else if(to.name === 'h5Order') {
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
