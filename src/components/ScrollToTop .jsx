import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

//返回页面顶部组件
export default class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    //show为true时回到顶部按钮显示，false时隐藏
    this.state = ({
      show: false
    })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollTopShow)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScrollTopShow)
  }
  render() {
    const { show } = this.state;
    return (
      <div style={{ position: 'fixed',bottom: 20,right: 20, zIndex: 99,
      backgroundColor: '#000',opacity: 0.2 }}>
        {
          // 逻辑与符号左边的show为true时返回右边的html标签
          show &&
          <div
            className="scrollTop"
            onClick={this.scrollToTop}
          >
            <Icon type="up" size={'lg'} color='#fff'/>
          </div>
        }
      </div>

    )
  }
  //控制show的状态从而控制回到顶部按钮的显示和隐藏
  changeScrollTopShow = () => {
    if (window.pageYOffset < 500) {
      this.setState({
        show: false
      })
    } else {
      this.setState({
        show: true
      })
    }
  }
  //添加动画效果
  scrollToTop = () => {
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20);
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 1);
  }
}
