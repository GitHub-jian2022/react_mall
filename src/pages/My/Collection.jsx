import React, { Component } from 'react'
import { SearchHeader } from '../../components'
import { Tabs } from 'antd-mobile';
import '../../assets/styles/Collection.scss';

const tabs = [
  { title: '按时间查看' },
  { title: '按店铺查看' },
  { title: '看降价' },
];


export default class Collection extends Component {
  
  render() {
    return (
      <div className='collection-page'>
        <SearchHeader returnbtn={true} text='收藏'></SearchHeader>
        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {  }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ backgroundColor: '#fff' }}>
            
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

