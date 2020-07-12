import { LOGIN } from '../actionType/usersType'
import {GET_USER_INFO} from '../actionType/usersType'
import axios from '../../utils/request'

export const login = ({phone,password}) => async(dispatch)=>{
    const res = await axios.post('/user/login',{phone,password})
    // console.log('res',res)
    const action = {
        type: LOGIN,
        data: res.data
    }
    dispatch(action)
    localStorage.setItem('token',JSON.stringify(res.data))
    dispatch(getUserInfo(res.data))
}

export const getUserInfo = (token) => async(dispatch)=>{
    const res = await axios.post('/user/getUserInfo',{token})
    // console.log('res',res)
    const { data } = res
    localStorage.setItem('user',JSON.stringify(data))
    const action = {
        type: GET_USER_INFO,
        data
    }
    dispatch(action)
}