import {GETORDERSLIST} from '../actionType/orderType'

const initState ={
    order_list:[]
}
export default (state=initState,action)=>{
    const { type, order_list } = action
    switch(type){
        case GETORDERSLIST:
            return {
                ...state,
                order_list: order_list
            }
        default:
            return state;
    }
}