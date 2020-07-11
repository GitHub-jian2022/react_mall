import React, { Component } from 'react'
import { withRouter } from "react-router-dom"

class SearchInput extends Component {
  state = {
    value: '',
  };
  onChange = (value) => {
    this.setState({ value });
  };
  render() {
    return (
        <div style={{ marginBottom: '10px' }}>
          <div
            style={{ lineHeight: '35px', background: '#ddd', color: '#888', textAlign: 'center', borderRadius: 20 }}
            onClick={() => this.props.history.push('/search')}
          >
            请输入关键词
          </div>
        </div>
      )
  }
}

export default withRouter(SearchInput)
