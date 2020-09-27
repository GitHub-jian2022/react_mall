import React, { Component } from 'react'
import { Tabs } from 'antd-mobile';
import { Layout,SearchInput } from '../components/index'
import classnames from 'classnames'
import { withRouter } from "react-router-dom"

import { Api,axios } from '../api/api'
import '../assets/styles/Cate.scss'

class Cate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
      ],
      cates: []
    }
  }
  componentDidMount() {
    // this.props.getCate()
    this.getCate()

  }
  async getCate(){
    let {data:cates} = await axios.get(Api.getCate)
    this.setState({
      cates
    })
  }
  render() {
    let cates = this.state.cates ? this.state.cates.map(v => {
      return {
        ...v,
        title: v.name.split('').length > 5 ? v.name.split('').slice(0, 4).join('') + '...' : v.name
      }
    }) : []
    return (
      <Layout>
        <div className='cate-page' style={{ background: '#fff' }}>
          <div>
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
                                              <div className='img_box'>
                                                <img src={ktem.logo} alt="" />
                                              </div>
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
      </Layout>
    )
  }
}

export default withRouter(Cate)