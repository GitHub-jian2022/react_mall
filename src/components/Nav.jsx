import React, { Component } from 'react'
import '../assets/styles/Nav.scss'
import { REACT_APP_STATIC_URL } from '../utils/urls'

export default class Nav extends Component {

  render() {
    const { Navs } = this.props
    return (
      <div className='Nav'>
        {
          Navs.map((item, index) => (
            <div key={index} className='Nav_item' onClick={() => this.props.onClickNav(item.title)}>
              <div>
                <img alt='' src={REACT_APP_STATIC_URL + item.url}></img>
              </div>
              <span>{item.title}</span>
            </div>
          ))
        }
        <div>

        </div>
      </div>
    )
  }
}
