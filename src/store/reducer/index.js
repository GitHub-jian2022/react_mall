// 1 引入 合并reducer的对象
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import routerReducer from "./routerReducer";
import loadReducer from './loadReducer'
// 2 对象的形式传入 要合并的reducer
const rootReducer = combineReducers({ routerReducer, searchReducer, loadReducer });
export default rootReducer;