import React, { Component } from 'react'
import { InputItem, Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import "../assets/styles/Login.scss"

import { connect } from "react-redux";
import { login } from '../store/action/usersAction'
import store from '../store'
import { encrypt } from '../utils/Tool'

class Login extends Component {
  constructor(props){
    super(props);
    store.subscribe(() => {
      // const { token, user } = state.usersReducer
      const { token } = store.getState().usersReducer
      // console.log('token',token)
      if(token) {
        this.props.history.push('/index')
      }
    })
    this.state = {
      phone: '10086100108',
      password: '123456'
    }
  }

  login = async () => {
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
    this.props.login({ phone, password: encrypt(password) })
  }

  render() {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <div className='bg'>
          {/* <span onClick={() => this.props.history.go(-1)}>X</span> */}
        </div>
        <div className='login'>
          <div className='registered'>
            <h3>登录</h3>
            <span onClick={()=>{
              this.props.history.push('/register')
            }}>点此注册</span>
          </div>

          <div className='phone'>
            <InputItem
              value={this.state.phone}
              placeholder="手机号"
              clear
              onChange={phone => this.setState({ phone })}
            ></InputItem>
          </div>
          <div className='password'>
            <InputItem
              value={this.state.password}
              type='password'
              placeholder="请输入密码"
              clear
              onChange={password => this.setState({ password })}
            ></InputItem>
          </div>
          {/* <div className='yzm'>
            短信验证码登录
          </div> */}
          <div className='login_btn' onClick={this.login}>
            登录
          </div>
          <div className='login_forget'>
            已有账号，忘记密码？
          </div>
        </div>
      </div>
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
export default withRouter(connect(null, mapDispatchToProps)(Login))