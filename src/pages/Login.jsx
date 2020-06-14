import React, { Component } from 'react'
import { InputItem } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import axios from "../utils/request"
import "../assets/styles/Login.scss"


 class Login extends Component {
  state = {
    username: '',
    password: '',
    focus: false
  }
  componentDidMount(){
    console.log(this.props);
  }

  componentWillUnmount(){
    this.timer = -1;
  }

  getUsername = (username) => {
    this.setState({
      username
    })
  }

  getPassword = (password) => {
    this.setState({
      password
    })
  }

  login = async () => {
    const { username, password } = this.state;  
    let res = await axios.post('/user/login',{
      body: {
        username,
        password
      }
    })
    console.log(res);
    if(res.status === 200){
      sessionStorage.setItem("token",res.body.token);
      const { pathname } = this.props.location.state.from
      this.props.history.push(pathname)
    }
  }

  timer = -1;
  onFocus = (bl) => {
    // this.timer=setTimeout(() => {
    //   this.setState({
    //     focus: bl
    //   })
    // }, 100);
  }

  render() {
    return (
      <div style={{position: 'relative',height: '100vh'}}>
        <div className='bg'>
          <span onClick={()=>this.props.history.push('/my')}>X</span>
        </div>
        <div className={this.state.focus ? 'login absolute' : 'login'}>
          <div className='registered'>
            <h3>登录</h3>
            <span style={{color: '#005980'}} onClick={()=>{
              this.props.history.push('/register')
            }}>点此注册</span>
          </div>
          <div className='userName'>
            <InputItem
              placeholder="账号"
              clear
              onChange={this.getUsername}
              onFocus={this.onFocus.bind(this,true)}
              onBlur={this.onFocus.bind(this,false)}
            ></InputItem>
          </div>
          <div className='password'>
            <InputItem
              type='password'
              placeholder="请输入密码"
              clear
              onChange={this.getPassword}
              onFocus={this.onFocus.bind(this,true)}
              onBlur={this.onFocus.bind(this,false)}
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
export  default withRouter(Login)