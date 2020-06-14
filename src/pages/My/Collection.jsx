import React, { Component } from 'react'
import { SearchHeader } from '../../components'
import { Tabs, Checkbox } from 'antd-mobile';
import '../../assets/styles/Collection.scss';

const CheckboxItem = Checkbox.CheckboxItem;

const tabs = [
    { title: '按时间查看' },
    { title: '按店铺查看' },
    { title: '看降价' },
];

const Tab1 = (props) => {
    let list1 = [
        {
            date: '一个月前',
            goodsList: [
                {
                    id: 1,
                    goods_img: 'https://m.360buyimg.com/babel/jfs/t1/119318/8/9460/461031/5eda3782E0bd259f6/57fd6c6ef45a1fec.jpg!q70.jpg',
                    goods_title: 'realme 真我X2 Pro 6400万变焦四摄 高通骁龙855Plus 50W闪充 90Hz电竞屏 8GB+128GB 海',
                    price: 1899,
                    sales: 100
                }
            ]
        },
        {
            date: '三个月前',
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
                }
            ]
        },
    ]
    const goodsItemClick = (id) => {
        // console.log('id: ', id);
    }
    const onChange = (index1, index2) => {
        list1 = list1.map((v, i) => {
            if (i === index1) {
                v.goodsList[index2].checked = !v.goodsList[index2].checked
                return v
            } else {
                return v
            }
        })
        console.log('list1: ', list1);
    }
    return (
        <div>
            {list1.map((item1, index1) => (
                <div key={index1}>
                    <div style={{ background: '#eee', padding: 10 }}>{item1.date}</div>
                    {item1.goodsList.map((item2, index2) => (
                        <div
                            style={styles.list_item}
                            key={index2}
                            onClick={goodsItemClick(item2.id)}
                        >
                            <div style={styles.img_box}>
                                <img alt='' src={item2.goods_img} style={{ width: 100, height: '100%' }}></img>
                            </div>
                            <div style={styles.list_item_content}>
                                <div className='content_wrap_3'>{item2.goods_title}</div>
                                <div style={{ color: 'red' }}>¥{item2.price}</div>
                            </div>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    )
}

export default class Collection extends Component {
    state = {
        showCheckboxItem: false,
    }
    edit = () => {
        const { showCheckboxItem } = this.state
        this.setState({
            showCheckboxItem: !showCheckboxItem,
        })
    }
    render() {
        const { showCheckboxItem } = this.state
        return (
            <div style={{ position: 'relative' }}>
                <SearchHeader returnbtn={true} edit={this.edit} text='收藏'></SearchHeader>
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ backgroundColor: '#fff' }}>
                        <Tab1 showCheckboxItem={showCheckboxItem} />
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>

                    </div>
                    <div style={{ backgroundColor: '#fff' }}>

                    </div>
                </Tabs>
            </div>
        )
    }
}

const styles = {
    list_item: {
        padding: 15,
        display: 'flex',
        background: '#fff',
        // borderBottomWidth: 8,
        // borderBottomColor: '#eee',
        // borderBottomStyle: 'solid'
    },
    img_box: {
        height: 120,
        marginRight: 15,
    },
    list_item_content: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    }
}
