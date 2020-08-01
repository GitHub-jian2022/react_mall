import { LOGIN } from '../actionType/usersType'
import { GET_USER_INFO } from '../actionType/usersType'
import { Api, axios } from '../../api/api'
import { Cookie } from '../../utils/storage'

export const login = ({phone,password}) => async(dispatch)=>{
    const res = await axios.post(Api.login,{phone,password})
    // console.log('res',res)
    const action = {
        type: LOGIN,
        data: res.data
    }
    dispatch(action)
    Cookie.setItem('token',JSON.stringify(res.data),2)
    dispatch(getUserInfo(res.data))
}

export const getUserInfo = (token) => async(dispatch)=>{
    const res = await axios.post(Api.getUserInfo,{token})
    // console.log('res',res)
    const { data } = res
    localStorage.setItem('user',JSON.stringify(data))
    const action = {
        type: GET_USER_INFO,
        data
    }
    dispatch(action)
}