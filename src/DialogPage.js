import React, { Component } from 'react'
import Diallog from './Diallog'

export default class DialogPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isShowDialog: false
        }
    }

    render() {
        const { isShowDialog } = this.state;
        return (
            <div>
                <h3>DialogPage</h3>
                <button onClick={() => this.setState({
                    isShowDialog: !isShowDialog
                })}>
                    toggle
                </button>
                {isShowDialog && <Diallog children="hello" hideDialog={() => this.setState({
                    isShowDialog: false
                })} />}
            </div>
        )
    }
}