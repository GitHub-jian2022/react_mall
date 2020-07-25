// 1 引入 合并reducer的对象
import { combineReducers } from "redux";
//用户
import usersReducer from './usersReducer'
//搜索
import searchReducer from "./searchReducer";
//商品
import goodsReducer from './goodsReducer'
//订单
import orderReducer from './orderReducer'
//路由
import routerReducer from "./routerReducer";
//分类
import cateReducer from './cateReducer'

// 2 对象的形式传入 要合并的reducer

const rootReducer = combineReducers({ 
    usersReducer,
    searchReducer,
    goodsReducer,
    orderReducer,
    routerReducer, 
    cateReducer
});
export default rootReducer;