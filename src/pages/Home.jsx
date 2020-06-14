import React, { Component } from 'react'
import { WhiteSpace  } from 'antd-mobile';
import { SearchInput, Banner, Nav, Adverts, GoodsList } from '../components/index'

import '../assets/styles/Home.scss'

export default class Home extends Component {
  // fn = (str) => {
  //   const regx = /[a-zA-Z1-9][A-Z0-9]{13}/
  //   return regx.test(str)
  // }
  state = {
    banners: [
      'https://img12.360buyimg.com/pop/s590x470_jfs/t1/135712/34/1910/75328/5ee1e77dEe0887f42/7075c561e4fe38f3.jpg.webp',
      'https://img11.360buyimg.com/pop/s590x470_jfs/t1/121393/3/4435/46604/5edeecb0E0d91c9d2/818735bd52904c26.jpg.webp',
      'https://imgcps.jd.com/ling/11620810/5Yqo5ryr55WF6ZSA5aW95Lmm/5q-P5ruhMTAw5YePNTA/p-5bd8253082acdd181d02fa47/e9ca4c85.jpg'
    ]
  }
  componentDidMount() {
    
  }
  render() {
    const { banners } = this.state
    return (
      <div className='home'>
        <SearchInput />

        <Banner banners={banners} />

        <Nav />

        <WhiteSpace size='md'/>
        <Adverts imgSrc='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591805169658&di=40562fd200e2c5d437a48a03b9260502&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1322055778%2C263727870%26fm%3D214%26gp%3D0.jpg'/>
        <WhiteSpace size='md'/>
        <Adverts imgSrc='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2312352634,1015272000&fm=26&gp=0.jpg'/>
        <WhiteSpace size='md'/>

        <GoodsList />
      </div>
    )
  }
}
