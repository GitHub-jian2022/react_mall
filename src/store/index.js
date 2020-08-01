//  引入 store生成器
import { createStore, applyMiddleware } from "redux";
//  引入reducer
import reducer from "./reducer";
import reduxThunk from "redux-thunk";

//  引入redux-persist实现redux数据持久化
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer(persistConfig, reducer)

//  创建store 使用中间件连接器将redux-thunk传入 store构造器
// const store = createStore(reducer, applyMiddleware(reduxThunk));
const store = createStore(myPersistReducer, applyMiddleware(reduxThunk));


export const persistor = persistStore(store)
export default store