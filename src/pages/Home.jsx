import React, { Component, Fragment } from 'react'
import { withRouter } from "react-router-dom"
import { Toast } from 'antd-mobile'
import { SearchInput, Banner, Nav, Adverts, GoodsListItem } from '../components/index'
import '../assets/styles/Home.scss'
import 'react-virtualized/styles.css';
import { AutoSizer, List, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { Api, axios } from '../api/api'
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true });

class Home extends Component {
  state = {
    banners: [],
    Navs: [],
    adverts: [],
    goodsList: [],
    isMore: true
  }
  Qparams = {
    page: 1,
    limit: 10
  }

  //防止请求多次加载
  loading = false;

  async  componentDidMount() {
    const res1 = await axios.get(Api.getBanners)
    const banners = res1.data.map(item => {
      item.src = item.url
      return item
    })
    const res2 = await axios.get(Api.getNavs)
    const res3 = await axios.get(Api.getAdverts)
    this.setState({
      banners: banners,
      Navs: res2.data,
      adverts: res3.data
    })
    this.getGoodsList()

  }

  //获取商品
  getGoodsList = async () => {
    this.loading = true;
    // console.log(this.Qparams)
    const res = await axios.get(Api.getGoodsList, {
      params: this.Qparams
    })
    if (res.data.length < this.Qparams.limit) {
      Toast.info('没有更多了', 2, null, true)
      this.setState({ isMore: false })
    }
    this.setState({
      goodsList: [...this.state.goodsList, ...res.data]
    })
    this.loading = false;
  }

  cellRenderer = ({ index, key, parent, style }) => {
    let item = this.state.goodsList[index];
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div
          style={style}
        >
          <GoodsListItem
            item={item}
            key={key}
            goodsItemClick={(id) => this.props.history.push('/goodsDetail/' + id)}
          />
        </div>
      </CellMeasurer>
    );
  }

  //记录上次滚动距离
  scrollTop = 0;
  //列表滚动刷新
  handleScorll = ({ clientHeight, scrollHeight, scrollTop }) => {
    //clientHeight 外组件的最大高度
    //scrollHeight 这里列表的最大高度
    //scrollTop这里滚动的距离
    console.log(scrollHeight, clientHeight, scrollTop)
    //初始化不请求
    if (scrollHeight === 0 && clientHeight === 0 && scrollTop === 0) return
    //下拉不再请求
    if(this.scrollTop > scrollTop) return

    if ((scrollHeight - clientHeight - scrollTop) < 20) {
      this.scrollTop = scrollTop;
      //上拉已经触底了 发请求了
      if (!this.loading && this.state.isMore) {
        this.Qparams.page += 1;
        this.getGoodsList();
      }

    }

  }

  render() {
    const { banners, Navs, adverts, goodsList } = this.state
    return (
      <Fragment>

        <div className='home'>
          <SearchInput />

          <Banner banners={banners} onClickBanner={(i) => console.log(i)} />

          <Nav
          Navs={Navs}
          onClickNav={(keyword) => {
            this.props.history.push({
              pathname: '/listpage/' + keyword
            })
          }} />

          <Adverts imgs={adverts} />

          {/* 渲染列表方法开始 */}
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                rowCount={goodsList.length}
                rowHeight={158}
                deferredMeasurementCache={cache}
                rowRenderer={this.cellRenderer}
                width={width}
                onScroll={this.handleScorll}
              />
            )}
          </AutoSizer>
          {/* 渲染列表方法结束 */}
        </div>

      </Fragment>

    )
  }
}

export default withRouter(Home)