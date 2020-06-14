import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export default class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <h1>404 not found page</h1>
        )
    }
}

