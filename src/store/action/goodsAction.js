import {GETGOODSLIST} from '../actionType/goodsType'
import { Api, axios } from '../../api/api'

export const getGoodsList = (params) => async(dispatch)=>{
    
    const res = await axios.get(Api.getGoodsList,{
        params
    })
    dispatch({type:GETGOODSLIST,goods: res.data})
}