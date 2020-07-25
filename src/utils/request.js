
import Axios from "axios"
import { REACT_APP_API_URL } from "./urls";
import { Toast } from 'antd-mobile'
import { Cookie } from './storage'
const token = Cookie.getItem('token');

//1.添加通用前缀
const axios = Axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
      "authorization": token
    }
  });
//2.添加请求和返回的拦截
//3.加遮罩
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //Toast.loading(content, duration, onClose, mask)
    // Toast.show("Loading....",1*60*60,null,true);
    // Toast.show("Loading....",20,null,true);
    Toast.loading('Loading...', 0, null,true);
    config.timeout = 20000; 
    return config;
  }, function (error) {
    // Do something with request error
    Toast.hide();
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.hide();
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.fail('请求失败', 2, null, true)

    return Promise.reject(error);
  });


export default axios