import React, { Component } from 'react'
import { SearchHeader, Banner } from '../components'
import { Stepper, Toast } from 'antd-mobile'
import { PhotoSlider } from 'react-photo-view';
import 'react-photo-view/dist/index.css';
import '../assets/styles/goodsdetail.scss'
import { REACT_APP_STATIC_URL } from '../utils/urls'
import { Api, axios } from '../api/api'


export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      val: 1,
      goodId: props.match.params.id,
      stockNum: null,
      stockId: null,
      popPrice: null,
      standard: null,
      productName: null,
      //图片缩放
      visible: false,
      photoIndex: 0
    }
  }
  componentDidMount() {
    this.getGoodsInfo()
  }
  //获取商品信息
  getGoodsInfo = async () => {
    let res = await axios.get(Api.getGoodInfo)
    let data = res.data
    console.log('data', data)
    this.setState({
      data
    })
    this.filterData(data)
  }

  //设置初始
  setAllDataStandard = (sku) => {
    //统一处理点击后的规格处理
    let that = this;
    let stockNum = sku.stockNum;
    let popPrice = sku.price.toFixed(2);
    let skuId = sku.id;
    let productName = sku.productName;
    that.setState({
      stockNum: stockNum,
      stockId: skuId,
      popPrice: popPrice,
      standard: '颜色 . 尺码',
      productName: productName,
    })
  }

  //过滤规格数据
  filterData = (result) => {
    //刚开始进来的时候先显示一部分内容
    let that = this;
    let skuData = result.sku[0];
    that.setState({
      sku: result.sku
    })
    //第一次进来设置数据
    that.setAllDataStandard(skuData);
  }

  //数量改变
  stepperChange = (e) => {
    if (e > this.state.stockNum) {
      this.setState({
        val: this.state.stockNum
      })
      Toast.info('库存不足', 1);
      return;
    }
    this.setState({
      val: e
    })
  }

  addGoodToCart = () => {
    console.log('addGoodToCart')
  }

  render() {
    const { data } = this.state
    return (
      <div className="goods-page">
        {
          data && <PhotoSlider
          images={data.imgs_url.map(item => ({ src: REACT_APP_STATIC_URL + item.src }))}
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })
          }
          index={this.state.photoIndex}
          onIndexChange={(photoIndex) => this.setState({ photoIndex })}
        />
        }

        <SearchHeader returnbtn={true} text='商品详情'></SearchHeader>

        <div className="goods-main">
          {/* <--商品图片 */}
          {
            data && <Banner banners={data.imgs_url}
              onClickBanner={(i) => {
                this.setState({ visible: true })
              }}
            />

          }

          {/* <--商品详情 */}
          <div className="buy-wrap">
            <div className="goods-name">
              <div className="goods-title">
                {data && data.productName}
              </div>
              <div className="goods-favour">
                分享
                </div>
            </div>
            <div className="goods-desc">
              {data && data.desc}
            </div>
          </div>
          {/* 商品详情--> */}

          {/* <--价格 */}
          <div className="price-wrap">
            <div className="price">
              <span><i>￥</i>{data && this.state.popPrice}</span>
              <span>￥{data && data.originaPrice}</span>
            </div>
            <div className="scoket">
              库存 <span>{data && this.state.stockNum}</span>
            </div>
          </div>
          {/* 价格--> */}

          <div className="item-list">
            <h3>选择</h3>
            <div className="item-content">
              {this.state.standard}
            </div>
          </div>

          {/* <--规格 */}
          <div className="sku-wrap">


            {/* 商品数量 */}
            <div className="sku-num">
              <div className="sku">
                <h3>数量</h3>
                <div className="sku-list">
                  <Stepper
                    className="stepper"
                    showNumber
                    min={1}
                    value={this.state.val}
                    onChange={(e) => {
                      this.stepperChange(e)
                    }}
                  />
                </div>
              </div>
            </div>
            {/* 商品数量 */}
          </div>
          {/* 规格--> */}
          <div className="info-wrap">
            <div className="info-header">商品详情</div>
            <div className="info-body" dangerouslySetInnerHTML={{ __html: data && data.introduction }}>
            </div>
          </div>
        </div>

        {/* body-> */}
        <div className="fixed-btns">
          <div style={{ width: 140, display: 'flex' }}>
            <div className="icon">
              <img src={require(`../assets/images/msg@default.png`)} alt="客服" />
              <span>客服</span>
            </div>
            <div className="icon">
              <img src={require(`../assets/images/msg@default.png`)} alt="客服" />
              <span>收藏</span>
            </div>
          </div>
          <button className="btn-orange" onClick={this.addGoodToCart}>加入购物车</button>
          <button onClick={() => {
             this.props.history.push('/createOrder/' + this.state.goodId)
          }}>购买</button>
        </div>
      </div>
    )
  }
}
