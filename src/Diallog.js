import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export default class Dialog extends Component {
    constructor(props) {
        super(props)

        this.node = document.createElement('div')
        this.node.classList.add("sss")

    }

    componentDidMount() {
        document.body.appendChild(this.node)
    }

    componentWillUnmount() {
        document.body.removeChild(this.node)
    }

    render() {
        const { hideDialog, children } = this.props
        return createPortal(
            <div>
                {children}
                {typeof hideDialog == "function" && (
                    <button onClick={hideDialog}>关闭窗口</button>
                )}
            </div>, this.node)
    }
}