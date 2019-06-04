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
    }
}
