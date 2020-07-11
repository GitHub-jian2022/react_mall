import React, { useState } from 'react'

export default function Adverts(props) {
    const [imgHeight,setImgHeight] = useState(176)
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
              src={item.img_url}
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