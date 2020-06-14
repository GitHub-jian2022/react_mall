import React, { Component } from 'react'
import { MySearchBar, GoodsList_Two } from '../components/index'

import { connect } from "react-redux";
import { searchByKeyWord } from '../store/action/searchAction'

class ListPage extends Component {
    goodsItemClick = (id) => {
        this.props.history.push('/goodsDetail/' + id)
    }
    onSubmit = (value) => {
        //更新store中的state值
        this.props.searchByKeyWord(value)
    }
    render() {
        return (
            <div>
                <div>
                    <MySearchBar onSubmit={this.onSubmit} />
                </div>
                {/* <WhiteSpace /> */}

                {/* 筛选器 */}

                {/* <WhiteSpace /> */}

                {/* 列表 */}
                <GoodsList_Two goodsItemClick={this.goodsItemClick} />
            </div>
        )
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
export default connect(null, mapDispatchToProps)(ListPage)