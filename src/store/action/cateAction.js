import { GET_CATE } from '../actionType/cateType'
import { Api, axios } from '../../api/api'

export const getCate = () => async (dispatch) => {
    let {data} = await axios.get(Api.getCate).then(res=>res)
    // console.log('data: ', data);
    const action = {
        type: GET_CATE,
        cates:data
    }
    dispatch(action)
}