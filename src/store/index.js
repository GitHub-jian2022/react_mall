// 1 引入 store生成器
import { createStore, applyMiddleware } from "redux";
// 2 引入reducer
import reducer from "./reducer";
import reduxThunk from "redux-thunk";
// 3 创建和对外暴露store 使用中间件连接器将redux-thunk传入 store构造器
export default createStore(reducer, applyMiddleware(reduxThunk));