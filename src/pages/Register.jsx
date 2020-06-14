import React, { Component,Fragment } from 'react'
import { InputItem } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import axios from "../utils/request"
import "../assets/styles/Register.scss"


 class Index extends Component {
  state = {
    type: 'password',
    username: '',
    password: '',
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
  register = async () => {
    const { username, password } = this.state;
    let res = await axios.post('/user/registered',{
      body: {
        username,
        password
      }
    })
    console.log(res);
  }
  render() {
    return (
      <Fragment>
        <div className='bg'>
          <span onClick={()=>this.props.history.push('/login')}>X</span>
        </div>
        <div className='login'>
          <div className='registered'>
            <h3>注册</h3>
            <span style={{color: '#005980'}} onClick={()=>{
              this.props.history.push('/register')
            }}></span>
          </div>
          <div className='userName'>
            <InputItem
              placeholder="账号"
              clear
              onChange={this.getUsername}
            ></InputItem>
          </div>
          <div className='password'>
            <InputItem
              type={this.state.type}
              placeholder="请输入密码"
              clear
              onChange={this.getPassword}
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
export  default withRouter(Index)