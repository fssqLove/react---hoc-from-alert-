
import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

export default class FromPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    submit() {
        console.log("submit", this.state)
    }

    render() {
        const { name, password } = this.state;

        return (
            <div>
                <h3>FromPage</h3>

                <Form>
                    <Form.Item label="姓名">
                        <Input placeholder="请输入姓名"
                            value={name}
                            onChange={e => {
                                this.setState({ name: e.target.value })
                            }}>
                        </Input>
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input type='password' placeholder="请输入密码"
                            value={password}
                            onChange={e => {
                                this.setState({ password: e.target.value })
                            }}>
                        </Input>
                    </Form.Item>

                    <Button type='primary' onClick={this.submit.bind(this)}>提交</Button>
                </Form>
            </div>
        )
    }
}