import {post, get} from './axios';

// 获取订单数据
export default {
    login(params) {
        return post('/login', params);
    },
    logout(params) {
        return post('/logout', params);
    },
    register(params) {
        return post('/register', params);
    },
    // h5 路由
    h5DishList(params) {
        return post('/h5/dish/list', params);
    },
    h5Category(params) {
        return post('/h5/category/list', params);
    },
    h5Banner(params) {
        return post('/h5/category/banner', params);
    },
    h5CustomerDishDetail(params) {
        return post('/h5/customer/detail', params);
    },
    getOpenId(params) {
        return post('/h5/openid', params);
    },
    h5Pay(params) {
        return post('/h5/pay', params);
    },

    // 后台vue路由
    category(params) {
        return post('/category', params);
    },
    tableList(params) {
        return post('/tables/list', params);
    },
    dishList(params) {
        return post('/dish/list', params);
    },
    dishAdd(params) {
        return post('/dish/add', params);
    },
    dishUpdate(params) {
        return post('/dish/update', params);
    },
    dishDelete(params) {
        return post('/dish/delete', params);
    },
    categoryList(params) {
        return post('/category/list', params);
    },
    categoryAdd(params) {
        return post('/category/add', params);
    },
    categoryUpdate(params) {
        return post('/category/update', params);
    },
    categoryDelete(params) {
        return post('/category/delete', params);
    },
    customerDishDetailList(params) {
        return post('/customer/dish/detail/list', params);
    },
    customerDishDetailServed(params) {
        return post('/customer/dish/detail/served', params);
    },
    customerDishDetailStatus(params) {
        return post('/customer/dish/detail/status', params);
    },
    financeList(params) {
        return post('/finance/list', params);
    },
    financeSubType(params) {
        return post('/finance/sub/type', params);
    },
    orderList(params) {
        return post('/order/list', params);
    },
    orderPayStatus(params) {
        return post('/order/pay/status', params);
    },
    orderChannel(params) {
        return post('/order/channel', params);
    },
    orderShow(params) {
        return post('/order/show', params);
    },
    storeList(params) {
        return post('/store/list', params);
    },
    storeAdd(params) {
        return post('/store/add', params);
    },
    storeUpdate(params) {
        return post('/store/update', params);
    },
    dishWeekData(params) {
        return post('/static/dish/week/data', params);
    },
    dishMonthData(params) {
        return post('/static/dish/month/data', params);
    },
    dishYearData(params) {
        return post('/static/dish/year/data', params);
    },
    orderWeekData(params) {
        return post('/static/order/week/data', params);
    },
    orderMonthData(params) {
        return post('/static/order/month/data', params);
    },
    orderYearData(params) {
        return post('/static/order/year/data', params);
    },
    financeWeekData(params) {
        return post('/static/finance/week/data', params);
    },
    financeMonthData(params) {
        return post('/static/finance/month/data', params);
    },
    financeYearData(params) {
        return post('/static/finance/year/data', params);
    },
    static(params) {
        return post('/static', params);
    },
}
