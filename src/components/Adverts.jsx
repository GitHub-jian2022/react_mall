import React, { useState } from 'react'
import { WingBlank  } from 'antd-mobile';

export default function Adverts(props) {
    const [imgHeight,setImgHeight] = useState(176)
    return (
      <WingBlank>
        <a
          href="#"
          style={{ display: 'inline-block', width: '100%', height: imgHeight }}
        >
          <img
            src={props.imgSrc}
            alt="暂无图片"
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              setImgHeight('auto')
            }}
          />
        </a>
      </WingBlank>
    )
  }