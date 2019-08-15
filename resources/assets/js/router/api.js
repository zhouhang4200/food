import { post, get } from './axios';

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
    // h5 菜肴
    h5DishList(params) {
        return post('/h5/dish/list', params);
    },
    h5Category(params) {
        return post('/h5/category/list', params);
    },
    h5Banner(params) {
        return post('/h5/category/banner', params);
    },
    // h5 点餐详情
    h5CustomerDishDetail(params) {
        return post('/h5/customer/detail', params);
    },
    // 获取openid
    getOpenId(params) {
        return post('/h5/openid', params);
    },
    // h5 支付
    h5Pay(params) {
        return post('/h5/pay', params);
    },
    // 获取类目
    category(params) {
        return post('/category', params);
    },
    // 餐桌
    tableList(params) {
        return post('/tables/list', params);
    },
    // 菜单
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
    // 类目
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
    // 客户点餐列表
    customerDishDetailList(params) {
        return post('/customer/dish/detail/list', params);
    },
    // 客户点餐状态修改（上菜）
    customerDishDetailServed(params) {
        return post('/customer/dish/detail/served', params);
    },
    // 客户点餐上菜状态
    customerDishDetailStatus(params) {
        return post('/customer/dish/detail/status', params);
    },
    // 财务流水列表
    financeList(params) {
        return post('/finance/list', params);
    },
    // 财务子类型
    financeSubType(params) {
        return post('/finance/sub/type', params);
    },
    // 订单列表
    orderList(params) {
        return post('/order/list', params);
    },
    //订单支付状态
    orderPayStatus(params) {
        return post('/order/pay/status', params);
    },
    // 订单支付渠道
    orderChannel(params) {
        return post('/order/channel', params);
    },
    // 订单详情
    orderShow(params) {
        return post('/order/show', params);
    },
    // 门店列表
    storeList(params) {
        return post('/store/list', params);
    },
    // 门店添加
    storeAdd(params) {
        return post('/store/add', params);
    },
    // 门店修改
    storeUpdate(params) {
        return post('/store/update', params);
    },
    // 数据统计
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
}
