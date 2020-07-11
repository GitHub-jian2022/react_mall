import React, { Component } from 'react'
import { SearchBar, Toast, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import store from '../store'

import { connect } from "react-redux";
import { changePath } from '../store/action/routerAction'
import { clear } from '../store/action/searchAction'

import '../assets/styles/AntdSearchBar.scss'

function showToast() {
    Toast.info('请输入想要搜索的商品', 1);
}

class AntdSearchBar extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => {

        })
    }
    state = {
        value: ''
    }
    componentDidMount() {
        //自动获取光标
        this.autoFocusInst.focus();
        const value = store.getState().searchReducer.searchInput.keyword
        this.setState({ value })
    }
    onSubmit = () => {
        const { value } = this.state
        if (!value) {
            showToast()
            return
        }
        this.props.onSubmit(value)

    }
    render() {
        const { value } = this.state
        return (
            <div className="search-head" style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                <Icon type="left" size={'lg'} color='gray' onClick={() => {
                    const { path } = this.props.match
                    this.props.changePath(path)
                    this.props.history.go(-1)
                    this.props.clear()
                }} />
                <div className="center">
                    <SearchBar
                        value={value}
                        placeholder="Search"
                        ref={ref => this.autoFocusInst = ref}
                        onSubmit={this.onSubmit}
                        onChange={value => {
                            this.setState({ value })
                        }}
                        onCancel={() => this.props.history.go(-1)}
                        style={{ flex: 1 }}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePath: (value) => {
            dispatch(changePath(value));
        },
        clear: () => {
            dispatch(clear())
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(AntdSearchBar))
