import React, { Component } from 'react'
import { SearchInput, Banner, Nav, Adverts, GoodsList } from '../components/index'

import '../assets/styles/Home.scss'

import { connect } from "react-redux";
import { getGoodsList } from '../store/action/goodsAction'

import axios from '../utils/request'

class Home extends Component {
  // fn = (str) => {
  //   const regx = /[a-zA-Z1-9][A-Z0-9]{13}/
  //   return regx.test(str)
  // }
  state = {
    banners: [],
    adverts: []
  }
  async  componentDidMount() {
    const res1 = await axios.get('/home/getBanners')
    const res2 = await axios.get('/home/getAdverts')
    console.log(res2)
    await this.props.getGoodsList()
    if(res1.code === 200 && res2.code === 200) {
      this.setState({ 
        banners: res1.data,
        adverts: res2.data
      })
    }
  }
  render() {
    const { banners,adverts } = this.state
    const goodsList = this.props.goods
    return (
      <div className='home'>
        <SearchInput />

        <Banner banners={banners} />

        <Nav />

        <Adverts imgs={adverts} />

        {
          goodsList && <GoodsList
          goodsList={goodsList}
          goodsItemClick={(id) => console.log(id)}
        />
        }
        
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  goods: state.goodsReducer.goods
})
const mapDispatchToProps = (dispatch) => {
  return {
    getGoodsList: (search) => {
      dispatch(getGoodsList(search))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)