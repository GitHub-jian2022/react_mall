import React, { Component } from 'react'
import { AntdSearchBar } from '../components/index'
import { connect } from "react-redux";
import { searchByKeyWord } from '../store/action/searchAction'
import '../assets/styles/Search.scss'

class Search extends Component {
  state = {
    // ['手机', '电脑', '耳机', '投影仪', '办公设备', '手表', '宠物', '花卉']
    history_list: [] 
  }

  componentDidMount() {
    //获取本地存储搜索记录
    let history_list = JSON.parse(localStorage.getItem('history_list')) || []
    this.setState({
      history_list
    })
    //模拟数据
    localStorage.setItem('history_list', JSON.stringify(history_list))
  }
  onSubmit = (value) => {
    //更新store中的state值
    this.props.searchByKeyWord(value)
    // 跳转列表页
    this.props.history.push({
      pathname: '/listpage/' + value
    })
    //获取本地存储搜索记录
    let history_list = JSON.parse(localStorage.getItem('history_list')) || []
    if (history_list.includes(value)) return
    //添加新的搜索到本地存储
    history_list.unshift(value)
    localStorage.setItem('history_list', JSON.stringify(history_list))
  }

  delHistory = () => {
    this.setState({ history_list: [] })
    localStorage.removeItem('history_list')
  }

  render() {
    const { history_list } = this.state
    return (
      <div className='Search'>
        <AntdSearchBar onSubmit={this.onSubmit} />
        {/* 最近搜索部分 */}
        <div className='recent_search' style={{ paddingLeft: 10, paddingRight: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 className='title' style={{ color: '#f00' }}>最近搜索</h3>
            <span className="iconfont del" onClick={this.delHistory}
            >&#xe604;</span>
          </div>
          <div className='history_list'>
            {history_list.map((item, index) => (
              <div
                className='history_list_item'
                key={index}
                onClick={() => {
                  this.props.searchByKeyWord(item)
                  this.props.history.push({
                    pathname: '/listpage/' + item
                  })
                }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    routes: state.routerReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchByKeyWord: (value) => {
      dispatch(searchByKeyWord(value));
    }
  }
}

// 用 connect 将store中的数据通过props的方式传递到App上
export default connect(mapStateToProps, mapDispatchToProps)(Search)