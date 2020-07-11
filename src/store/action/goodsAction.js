import {GETGOODSLIST} from '../actionType/goodsType'
import axios from '../../utils/request'

export const getGoodsList = (search) => async(dispatch)=>{
    let params={
        search
    }
    const res = await axios.get('/goods/list',{params})
    const { data } = res.data
    dispatch({type:GETGOODSLIST,goods: data})
}