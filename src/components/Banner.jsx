import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import { REACT_APP_STATIC_URL } from '../utils/urls'

export default class Banner extends Component {
    state = {
        imgHeight: 176,
      }
      componentDidMount() {
       
      }
      render() {
        const { banners } = this.props
        return (
            <Carousel
              autoplay={true}
              infinite
            >
              {banners.map((item,i) => (
                <a
                  key={i}
                  href="#"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={REACT_APP_STATIC_URL + item.src}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onClick={() => this.props.onClickBanner(i)}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 176 });
                    }}
                  />
                </a>
              ))}
            </Carousel>
        );
      }
}
