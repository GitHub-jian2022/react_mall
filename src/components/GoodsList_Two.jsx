import React, { Component } from 'react'
import '../assets/styles/GoodsList_Two.scss'

export default class GoodsList_Two extends Component {
    state = {
        goodsList: [
            {
                id: 1,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/119318/8/9460/461031/5eda3782E0bd259f6/57fd6c6ef45a1fec.jpg!q70.jpg',
                goods_title: 'realme 真我X2 Pro 6400万变焦四摄 高通骁龙855Plus 50W闪充 90Hz电竞屏 8GB+128GB 海',
                price: 1899,
                sales: 100
            },
            {
                id: 2,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/94428/33/6843/129595/5df752ecE819fc2d2/164854c9f2f007a5.jpg!q70.jpg',
                goods_title: 'vivo X30 5G 秘银 8GB+128GB 双模5G 20倍变焦 50mm专业人像镜头 全网通智慧旗舰手机',
                price: 1599,
                sales: 300
            },
            {
                id: 3,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/108980/3/12678/141499/5e998722Ea82b8ffb/b433a525b09a98e9.jpg!q70.jpg',
                goods_title: '三星 Galaxy A51 5G 双模5G Super AMOLED屏 4800万后置四摄 3200万前置 双卡双待手机 8G',
                price: 2199,
                sales: 200
            }, {
                id: 4,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/40269/5/14761/192059/5d5b615fE08973f49/d9418330ab754826.jpg!q70.jpg',
                goods_title: 'vivo X50 5G手机 8+128GB 液氧 超感光夜摄 后置4800W像素 90Hz超薄柔性屏  双模5G全网通手机',
                price: 2599,
                sales: 500
            },
            {
                id: 5,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/119318/8/9460/461031/5eda3782E0bd259f6/57fd6c6ef45a1fec.jpg!q70.jpg',
                goods_title: 'realme 真我X2 Pro 6400万变焦四摄 高通骁龙855Plus 50W闪充 90Hz电竞屏 8GB+128GB 海',
                price: 1899,
                sales: 100
            },
            {
                id: 6,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/94428/33/6843/129595/5df752ecE819fc2d2/164854c9f2f007a5.jpg!q70.jpg',
                goods_title: 'vivo X30 5G 秘银 8GB+128GB 双模5G 20倍变焦 50mm专业人像镜头 全网通智慧旗舰手机',
                price: 1599,
                sales: 300
            },
            {
                id: 7,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/108980/3/12678/141499/5e998722Ea82b8ffb/b433a525b09a98e9.jpg!q70.jpg',
                goods_title: '三星 Galaxy A51 5G 双模5G Super AMOLED屏 4800万后置四摄 3200万前置 双卡双待手机 8G',
                price: 2199,
                sales: 200
            }, {
                id: 8,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/40269/5/14761/192059/5d5b615fE08973f49/d9418330ab754826.jpg!q70.jpg',
                goods_title: 'vivo X50 5G手机 8+128GB 液氧 超感光夜摄 后置4800W像素 90Hz超薄柔性屏  双模5G全网通手机',
                price: 2599,
                sales: 500
            },
            {
                id: 9,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/119318/8/9460/461031/5eda3782E0bd259f6/57fd6c6ef45a1fec.jpg!q70.jpg',
                goods_title: 'realme 真我X2 Pro 6400万变焦四摄 高通骁龙855Plus 50W闪充 90Hz电竞屏 8GB+128GB 海',
                price: 1899,
                sales: 100
            },
            {
                id: 10,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/94428/33/6843/129595/5df752ecE819fc2d2/164854c9f2f007a5.jpg!q70.jpg',
                goods_title: 'vivo X30 5G 秘银 8GB+128GB 双模5G 20倍变焦 50mm专业人像镜头 全网通智慧旗舰手机',
                price: 1599,
                sales: 300
            },
            {
                id: 11,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/108980/3/12678/141499/5e998722Ea82b8ffb/b433a525b09a98e9.jpg!q70.jpg',
                goods_title: '三星 Galaxy A51 5G 双模5G Super AMOLED屏 4800万后置四摄 3200万前置 双卡双待手机 8G',
                price: 2199,
                sales: 200
            }, {
                id: 12,
                goods_img: 'https://m.360buyimg.com/babel/jfs/t1/40269/5/14761/192059/5d5b615fE08973f49/d9418330ab754826.jpg!q70.jpg',
                goods_title: 'vivo X50 5G手机 8+128GB 液氧 超感光夜摄 后置4800W像素 90Hz超薄柔性屏  双模5G全网通手机',
                price: 2599,
                sales: 500
            },
        ]
    }
    goodsItemClick = (id) => {
        this.props.goodsItemClick(id)
    }
    render() {
        const { goodsList } = this.state
        return (
            <div className='list' style={{ padding: 10 }}>
                {goodsList.map((item, index) => (
                    <div
                        className='list_item'
                        style={
                        {  
                            borderRightWidth: (index%2===0) ? 8:0,
                            borderRightStyle: 'solid',
                            borderRightColor: '#eee',
                        }
                        }
                        key={index}
                        onClick={this.goodsItemClick.bind(this, item.id)}
                    >
                        <div className='img_box'>
                            <img alt='' src={item.goods_img} style={{ width: 130, height: '100%' }}></img>
                        </div>
                        <div className='list_item_content'>
                            <div className='title'>{item.goods_title}</div>
                            <div
                             style={{ color: 'red',display: 'flex',justifyContent: 'space-between' }}>
                                <div style={{ fontSize: 12 }}>
                                    ¥<span style={{ fontSize: 16 }}>{item.price}</span>
                                </div>
                                <div style={{ fontSize: 12 }}>
                                    销量<span style={{ fontSize: 16 }}>{item.sales}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
