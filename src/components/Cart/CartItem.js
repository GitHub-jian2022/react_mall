import React, {Component} from 'react'
import {Checkbox, Stepper, SwipeAction, Toast} from 'antd-mobile'


class CratItem extends Component{
    //构造函数
    constructor(props){
        super(props)
        this.state={
            val:props.item.value
        }
    }
    onChange(e,id){
        let checked = e.target.checked;
        // console.log(checked,id)
        this.props.checkChange(id,checked)
    }
    render(){
        let item = this.props.item
        return (
            <SwipeAction
            style={{ backgroundColor: '#f5f5f9',paddingBottom:'10px' }}
            right={[
                {
                text: '删除',
                onPress: () =>{
                    console.log('delete')
                    return false;
                },
                style: { backgroundColor: '#F4333C', color: 'white' },
                },
            ]}
            onOpen={() => console.log('global open')}
            onClose={() => {
                console.log('global close')
                return false;
            }}
        >
            <div className="cart-c-item" >
                <div className="cart-c-check">
                    <Checkbox checked={item.check} onChange={(e) => {
                        this.onChange(e,item.id)
                    }}/>
                </div>
                {/* 商品图片 */}
                <div className="cart-ci-left">
                    <img src={item.img} alt={item.label}/>
                </div>
                {/* 商品信息 */}
                <div className="cart-ci-right">
                    <div className="r-title"><span>{item.lable}</span></div>
                    <div className="r-step">
                        <span className="r-price"><span>￥</span>{item.price.toFixed(2)}</span>
                        <span className="span-stepper">
                            {/* 加减步进器 */}
                            <Stepper
                                style={{ maxWidth: '100px',height:'30px' }}
                                showNumber
                                max={item.stockNum}
                                min={1}
                                value={item.value}
                                onChange={(val)=>{
                                    if(val>item.stockNum){
                                        Toast.info("库存不足",1)
                                        this.props.changeStock(item.id,item.stockNum)
                                    }else{
                                        this.props.changeStock(item.id,val)
                                    }
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </SwipeAction>
        )
    }
}
export default CratItem