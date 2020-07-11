import React, {Component} from 'react'
//引入antd-mobile组件
import { Icon,Popover } from 'antd-mobile'
//支持路由跳转
import {withRouter} from 'react-router-dom'

import './search_header.scss'

const Item = Popover.Item;

class SearchHeader extends Component {
    //默认参数
    static defaultProps={
        returnbtn:false,
        value:'',
        pathname:'/'
    }
    //构造函数
    constructor(props){
        super(props);
        this.state={
            visible:false,
            selected: '',
        }
    }
    //返回某个页面
    returnPage(){
        this.props.history.push(this.props.pathname||'/')
        sessionStorage.setItem('__search_prev_path__',this.props.pathname||'/')
    }
    //选择下拉菜单
    onSelect(opt){
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        //跳转到页面
        this.props.history.push(opt.props.path)
        sessionStorage.setItem('__search_prev_path__',opt.props.path)
    }
    //隐藏下拉菜单
    handleVisibleChange(visible){
        this.setState({
            visible,
        });
    }

    render() {
        //下拉菜单列的图片
        const myImg = src => <img key={src} src={require(`../../assets/images/${src}.png`)} className="am-icon am-icon-xs" alt="" />;
        //下拉菜单组
        let menuArr = [
            (<Item path="/index" value="首页" icon={myImg('index')}>首页</Item>),
            (<Item path="/cate" value="分类" icon={myImg('cate')}>分类</Item>),
            (<Item path="/cart" value="购物车" icon={myImg('cart')}>购物车</Item>),
            (<Item path="/my" value="个人中心" icon={myImg('my')}>个人中心</Item>),
        ]
        return (
            <div className="search-head">
                {/* 判断是否需要返回按钮 */}
                {
                    this.props.returnbtn
                    ?
                    <div className="left" onClick={()=>{
                        // 返回某个页面
                        this.props.history.go(-1)
                    }}>
                        <img src={require("../../assets/images/return.png")} alt="return"/>
                    </div>
                    :null
                }
                {/* 搜索框 */}
                <div className="center">
                    {this.props.text}
                </div>
                <div className="right">
                    {/* 下拉菜单 */}
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={menuArr}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange.bind(this)}
                        onSelect={this.onSelect.bind(this)}
                    >
                        <Icon key="1" onClick={()=>{
                            this.setState({
                                visible:true
                            })
                        }} type="ellipsis" />
                    </Popover>
                </div>
            </div>
        )
    }
}
//路由跳转装饰这个类
export default withRouter(SearchHeader)