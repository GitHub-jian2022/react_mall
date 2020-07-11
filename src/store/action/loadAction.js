import {LOADCATE} from '../actionType/loadType'
import axios from '../../utils/request'

export const loadCate = () => async (dispatch) => {
    let {data} = await axios.get('/cate').then(res=>res)
    console.log('data: ', data);
    const action = {
        type:LOADCATE,
        cates:data
    }
    dispatch(action)
}