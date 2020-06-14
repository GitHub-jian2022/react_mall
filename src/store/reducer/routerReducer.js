import {CHANGEPATH} from '../actionType/routerType'
const initState={
    path:null,
    paths:['/','/index','/cate','/cart','/my']
}
export default (state=initState,action)=>{
    switch(action.type){
        case CHANGEPATH:
            return {
                ...state,
                path:action.path
            }
        default:
            return state
    }
}