import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import { SearchInput } from '../components/index'
import classnames from 'classnames'


import { connect } from 'react-redux'
import { loadCate } from '../store/action/loadAction'

import '../assets/styles/Cate.scss'

class Cate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
      ]
    }
  }
  componentDidMount() {
    this.props.loadCate()

  }
  render() {
    let cates = this.props.cates ? this.props.cates.map(v => {
      return {
        ...v,
        title: v.name.split('').length > 5 ? v.name.split('').slice(0, 4).join('') + '...' : v.name
      }
    }) : []
    return (
      <div className='cate-page' style={{ background: '#fff' }}>
        <div style={{}}>
          <SearchInput />
        </div>

        {
          <div className="cate-body">
            <Tabs className="tabs"
              tabs={cates}
              initalPage={0}
              useOnPan={true}
              tabBarTextStyle={
                {
                  width: '86px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  backgroundColor: '#f7f7f7'
                }
              }
              renderTabBar={props => <Tabs.DefaultTabBar {...props} page={12} />}
              tabBarPosition="left"
              tabDirection="vertical"
            >
              {
                cates && cates.map((item, i) => {
                  return (
                    <div className="tabs-r" key={item.id}>
                      {
                        item.childs.length > 0 ? item.childs.map((jtem, j) => {
                          return (
                            <div key={j} className="tabs-r-box">
                              <div className="tabs-r-title">{jtem.name}</div>
                              <div className="tabs-r-body">
                                {
                                  jtem.childs.length > 0 ? jtem.childs.map((ktem, k) => {
                                    return (
                                      <div key={k} className={classnames({
                                        'tabs-r-item': true,
                                        'flex': ktem.logo ? false : true
                                      })}>
                                        {
                                          ktem.logo ?
                                            <img src={`http://exotic.gzfenzu.com/${ktem.logo}`} alt="" />
                                            : null
                                        }
                                        {
                                          ktem.logo ?
                                            <span>{ktem.name}</span>
                                            : <span className="border">{ktem.name}</span>
                                        }
                                      </div>
                                    )
                                  })
                                    : <div style={{ margin: '10px 0', textAlign: 'center', width: '100%' }}>暂无分类</div>
                                }

                              </div>
                            </div>
                          )
                        })
                          : <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>暂无该分类</div>
                      }
                    </div>
                  )
                })
              }
            </Tabs>
          </div>
        }
      </div>
    )
  }
}

export default connect(
  ({ loadReducer }) => {
    return {
      cates: loadReducer.cates
    }
  },
  (dispatch) => {
    return {
      loadCate: () => {
        dispatch(loadCate())
      }
    }
  }
)(Cate)