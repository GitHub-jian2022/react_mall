import React, { useState } from 'react'
import { REACT_APP_STATIC_URL } from '../utils/urls'

export default function Adverts(props) {
    const [imgHeight,setImgHeight] = useState(200)
    return (
      <div>
        {
          props.imgs.map((item,index) => (
          <a
            key={index}
            href="#"
            style={{ display: 'inline-block', width: '100%', height: imgHeight, marginBottom: 10 }}
          >
            <img
              src={REACT_APP_STATIC_URL + item.url}
              alt="暂无图片"
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                setImgHeight('auto')
              }}
            />
          </a>
          ))
        }
      </div>
    )
  }