import React, { Component } from 'react'
import { AntdSearchBar, GoodsListImg, ScrollToTop } from '../components/index'
import { connect } from "react-redux";
import { searchByKeyWord } from '../store/action/searchAction'
import { getGoodsList } from '../store/action/goodsAction'
import '../assets/styles/ListPage.scss'

class ListPage extends Component {
  state = {

  }

  Qparams = {
    page: 1,
    limit: 10
  }

  async  componentDidMount() {
    const { keyword } = this.props.match.params
    this.props.getGoodsList(this.Qparams)
  }
  goodsItemClick = (id) => {
    this.props.history.push('/goodsDetail/' + id)
  }
  onSubmit = (value) => {
    //更新store中的state值
    this.props.searchByKeyWord(value)
  }
  
  render() {
    const goodsList = this.props.goods
    return (
      <div id='ListPage' className='ListPage'>
        <div>
          <AntdSearchBar onSubmit={this.onSubmit} />
        </div>

        {/* 筛选器 */}

        {/* 列表 */}
        {
          goodsList.length > 0 ?
            <GoodsListImg
              goodsItemClick={this.goodsItemClick}
              goodsList={goodsList}
            />
            : <div style={{ padding: 20, fontSize: 18, textAlign: 'center', color: '#888' }}>
              没有搜索数据
            </div>
        }
        <ScrollToTop />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  goods: state.goodsReducer.goods
})
const mapDispatchToProps = (dispatch) => {
  return {
    searchByKeyWord: (value) => {
      dispatch(searchByKeyWord(value));
    },
    getGoodsList: (search) => {
      dispatch(getGoodsList(search))
    }
  }
}

// 用 connect 将store中的数据通过props的方式传递到App上
export default connect(mapStateToProps, mapDispatchToProps)(ListPage)