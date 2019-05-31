// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import api from './router/api.js';
import Vant from 'vant';
import 'vant/lib/index.css';
import './iconfont/iconfont.css';

Vue.use(Vant);

Vue.config.productionTip = false;
Vue.use(ElementUI, {size:"small"});
Vue.use(VueRouter);

// 挂载 api
Vue.prototype.$api = api;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
    // components: { App },
    // template: '<App/>'
})

