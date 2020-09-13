import axios from '../utils/request'

const Api = {
    login: '/user/login',
    register: '/user/register',
    getUserInfo: '/user/getUserInfo',

    getBanners: '/home/getBanners',
    getNavs: '/home/getNavs',
    getAdverts: '/home/getAdverts',

    getCate: '/cate',

    getCartList: '/alliance/cartList',

    getGoodsList: '/goods/list',
    getGoodInfo: '/alliance/goodInfo',
    getOrderList: '/alliance/order/list',
}

export {
    Api,
    axios
}