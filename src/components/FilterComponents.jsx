import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

//搜索结果页条件筛选组件
export default class FilterComponents extends Component {
  state = {
    list: [
      {
        title: '综合',
        conditions: [
          {
            desc: '综合', iconType: 'down'
          },
          {
            desc: '价格升序', iconType: 'up'
          },
          {
            desc: '价格降序', iconType: 'down'
          },
        ]
      },
      {
        title: '销量'
      },
      {
        title: '店铺'
      },
      {
        title: '筛选'
      },
    ],
    showConditions: false,
    activeIndex: -1,
    iconType: 'down'
  }
  onClickItem = (activeIndex) => {
    const { showConditions } = this.state
    this.setState({ activeIndex })
    if (activeIndex === 0) {
      //显示隐藏蒙层
      this.setState({ showConditions: !showConditions })
    }

  }

  renderConditions = () => {
    let { list, iconType } = this.state
    const { conditions } = list[0]
    return (
      <div className='mask' style={{ position: 'absolute', top: 40, left: 0, width: '100%' }}>
        {
          conditions.map((item, i) => (
            <div key={i} style={{ padding: 10, backgroundColor: '#f7f7f7' }}
              onClick={() => {
                // 选中条件
                list[0].title = item.desc.substring(0, 2)
                // 切换icon图标
                iconType = item.iconType
                this.setState({
                  showConditions: false,
                  list,
                  iconType
                })
              }}
            >{item.desc}</div>
          ))
        }
        {/* 遮罩层部分 */}
        <div
          onClick={() => this.setState({ showConditions: false })}
          style={{ backgroundColor: '#000', opacity: 0.6, height: '100vh' }}></div>
      </div>
    )
  }

  render() {
    const { list, showConditions, activeIndex, iconType } = this.state
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', height: 40, backgroundColor: '#fff', marginBottom: 2 }}>
          {
            list.map((item, index) => (
              <div className='item' style={{
                flex: 1,
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}
                onClick={this.onClickItem.bind(this, index)}
                key={index}
              >
                <span style={{ color: activeIndex === index ? '#f00' : '' }}>{item.title}</span>
                {
                  index === 0 ? <Icon type={iconType} /> : null
                }
              </div>
            ))
          }
        </div>
        {
          showConditions ? this.renderConditions() : null
        }

      </div>
    )
  }
}
