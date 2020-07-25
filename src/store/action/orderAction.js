import { GETORDERSLIST } from '../actionType/orderType'
import { Api, axios } from '../../api/api'

export const getOrderList = (status) => async(dispatch)=>{
    const res = await axios.post(Api.getOrderList,{status})

    const { data: order_list } = res.data
    dispatch({type:GETORDERSLIST,order_list})
}