// 1 引入 合并reducer的对象
import { combineReducers } from "redux";
import usersReducer from './usersReducer'
import searchReducer from "./searchReducer";
import goodsReducer from './goodsReducer'
import orderReducer from './orderReducer'
import routerReducer from "./routerReducer";
import loadReducer from './loadReducer'
// 2 对象的形式传入 要合并的reducer
const rootReducer = combineReducers({ 
    usersReducer,
    searchReducer,
    goodsReducer,
    orderReducer,
    routerReducer, 
    loadReducer
});
export default rootReducer;