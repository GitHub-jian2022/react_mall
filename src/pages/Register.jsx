import React, { Component,Fragment } from 'react'
import { InputItem, Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { login } from '../store/action/usersAction'
import { axios, Api } from "../api/api"
import "../assets/styles/Register.scss"
import { encrypt } from '../utils/Tool'

 class Register extends Component {
  state = {
    phone: '',
    password: '',
  }
  register = async () => {
    const { phone, password } = this.state;
    if(phone.trim() == '' || phone.length < 11) {
      Toast.fail('手机号格式不正确',1)
      return
    }
    if(password.trim() == '') {
      Toast.fail('密码不能为空',1)
      return
    }else if(password.length < 6) {
      Toast.fail('密码长度应不小于6位数',1)
      return
    }
    let res = await axios.post(Api.register,{
      phone,
      password: encrypt(password)
    })
    if(res.code == 401) {
      Toast.fail(res.msg,1)
    }else {
      this.props.login({ phone, password: encrypt(password) })
    }
  }
  render() {
    return (
      <Fragment>
        <div className='bg'>
          {/* <span onClick={()=>this.props.history.push('/login')}>X</span> */}
        </div>
        <div className='login'>
          <div className='registered'>
            <h3 onClick={()=>{
              this.props.history.push('/login')
            }}>登录</h3>
          </div>
          <div className='userName'>
            <InputItem
              placeholder="手机号"
              clear
              onChange={phone => this.setState({ phone })}
            ></InputItem>
          </div>
          <div className='password'>
            <InputItem
              type='password'
              placeholder="请输入密码"
              clear
              onChange={password => this.setState({ password })}
            ></InputItem>
          </div>
          <div className='login_btn' onClick={this.register}>
            注册
          </div>
        </div>
      </Fragment>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => {
      dispatch(login(value))
    }
  }
}
export default withRouter(connect(null, mapDispatchToProps)(Register))