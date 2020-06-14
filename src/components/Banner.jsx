import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Banner extends Component {
    state = {
        data: ['1', '2', '3'],
        banners: [],
        imgHeight: 176,
      }
      componentDidMount() {
       
      }
      render() {
        const { banners } = this.props
        return (
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
            >
              {banners.map(val => (
                <a
                  key={val}
                  href=" http://47.100.138.242:8080/#/login"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 176 });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        );
      }
}
