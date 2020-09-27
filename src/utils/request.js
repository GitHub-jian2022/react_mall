
import Axios from "axios"
import { REACT_APP_API_URL } from "./urls";
import { Toast } from 'antd-mobile'
import { Cookie } from './storage'

//1.添加通用前缀
const axios = Axios.create({
    baseURL: REACT_APP_API_URL,
  });
//2.添加请求和返回的拦截
//3.加遮罩
axios.interceptors.request.use(function (config) {
    // Toast.loading('Loading...', 0, null,true);
    config.timeout = 20000;
    const token = Cookie.getItem('token') || ''
    if(token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
  }, function (error) {
    console.log('error: ', error);
    // Do something with request error
    // Toast.hide();
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Toast.hide();
    console.log('response.data: ', response.data);
    if(response.data.code === 403){
      Toast.fail(response.data.msg, 2, null, true)

    }else if(response.data.code === 500){
      Toast.fail(response.data.msg, 2, null, true)
      
    }
    return response.data;

  }, function (error) {
    // Toast.fail('请求失败', 2, null, true)
    Toast.fail(error.response.msg, 2, null, true)
    return Promise.reject(error);
  });


export default axios