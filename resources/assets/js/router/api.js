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
    // 菜单删除
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
    // 菜单新增
    dishAdd(params) {
        return post('/dish/add', params);
    },
    // 菜单修改
    dishUpdate(params) {
        return post('/dish/update', params);
    },
    // 菜单删除
    dishDelete(params) {
        return post('/dish/delete', params);
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
        return post('/customer/dish/detail/statuses', params);
    },
    // 财务流水列表
    financeList(params) {
        return post('/finance/list', params);
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
}
