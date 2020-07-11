import {GETORDERSLIST} from '../actionType/orderType'
import axios from '../../utils/request'

export const getOrderList = (status) => async(dispatch)=>{
    const res = await axios.post('/alliance/order/list',{status})

    const { data: order_list } = res.data
    dispatch({type:GETORDERSLIST,order_list})
}