import React, { Component } from 'react'
import { WingBlank, WhiteSpace  } from 'antd-mobile';
import { withRouter } from "react-router-dom"

 class SearchInput extends Component {
    state = {
        value: '',
      };
      onChange= (value) => {
        this.setState({ value });
      };
      render() {
        return (<WingBlank>
          <WhiteSpace size="md" />
          <div 
          style={{lineHeight: '30px', background: '#eee', color: '#ccc',textAlign: 'center',borderRadius: 10 }}
          onClick={() => this.props.history.push('/search')}
          >请输入关键词</div>
          <WhiteSpace size="md" />
        </WingBlank>);
      }
}

export default withRouter(SearchInput)
