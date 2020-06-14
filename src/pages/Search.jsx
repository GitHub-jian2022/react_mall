import React, { Component, Fragment } from 'react'
import { MySearchBar } from '../components/index'
import { connect } from "react-redux";
import { searchByKeyWord } from '../store/action/searchAction'

class Search extends Component {
    state = {
        history_list: []
    }

    componentDidMount() {
        //获取本地存储搜索记录
        let history_list = JSON.parse(localStorage.getItem('history_list')) || [
            '手机', '电脑', '耳机', '投影仪', '办公设备', '手表', '宠物', '花卉'
        ]
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
    render() {
        const { history_list } = this.state
        return (
            <Fragment>
                <MySearchBar onSubmit={this.onSubmit} />
                {/* 最近搜索部分 */}
                <div style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ color: '#f00' }}>最近搜索</h3>
                        <span className="iconfont" style={{ fontSize: 20, color: '#f00' }}
                            onClick={() => this.setState({ history_list: [] })}
                        >&#xe604;</span>
                    </div>
                    <div className='clearfix'>
                        {history_list.map((item, index) => (
                            <div
                                style={{
                                    float: 'left', padding: 10, background: '#ddd',
                                    borderRadius: 5, marginRight: 10, marginBottom: 10
                                }}
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
            </Fragment>
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