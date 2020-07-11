import {GETGOODSLIST} from '../actionType/goodsType'

const initState ={
    goods:[]
}
export default (state=initState,action)=>{
    switch(action.type){
        case GETGOODSLIST:
            return {
                ...state,
                goods:action.goods
            }
        default:
            return state;
    }
}