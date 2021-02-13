
import React, { Component } from 'react'
import MyFromCreate from './FromCreate'

// 校验规则
const nameRules = { required: true, message: "请输入姓名" }
const passwordRules = { required: true, message: "请输入密码" }


export default MyFromCreate(
    class MyFromPage extends Component {
        submit = () => {
            const { getFieldsValue, getFiledValue, validateFields } = this.props

            console.log(getFieldsValue(), getFiledValue('name'))
            validateFields((err, values) => {
                if (err) {
                    console.error(err)
                } else {
                    console.log(values)
                }
            })
        }

        render() {
            console.log("props", this.props)
            const { getFieldDecorator } = this.props

            return (
                <div>
                    <h3>MyFromPage</h3>
                    {getFieldDecorator('name', { rules: [nameRules] })(
                        <input type="text" placeholder="请输入用户名"></input>
                    )}

                    {
                        getFieldDecorator('password', { rules: [passwordRules] })(
                            <input type="password" placeholder="请输入密码"></input>
                        )
                    }

                    <button onClick={this.submit}>提交</button>
                </div>
            )
        }
    }
)