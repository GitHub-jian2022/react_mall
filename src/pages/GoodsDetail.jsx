import React, { Component } from 'react'

export default class Detail extends Component {
    state = {
        id: null
    }
    componentDidMount() {
        const { id } = this.props.match.params
        console.log('goodsId: ', id);
        this.setState({
            id
        })
    }
    render() {
        return (
            <div>
                Detail
            </div>
        )
    }
}
