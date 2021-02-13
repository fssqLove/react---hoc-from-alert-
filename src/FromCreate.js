import React, { Component } from 'react'

export default function kFromCreate(Cmp) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {};
            this.options = {};
        }

        handleChange = e => {
            let { name, value } = e.target

            this.setState({ [name]: value })
        };

        getFieldDecorator = (field, option) => {
            this.options[field] = option;

            return InputCmp =>
                React.cloneElement(InputCmp, {
                    name: field,
                    value: this.state[field] || "",
                    onChange: this.handleChange
                })
        }

        getFieldsValue = () => {
            return { ...this.state }
        }

        getFiledValue = (field) => {
            return this.state[field]
        }

        validateFields = callback => {
            let errors = {};

            const state = { ...this.state };

            console.log(state, this.options)
            for (const key in this.options) {
                if (state[key] === undefined) {
                    errors[key] = "error"
                }
            }

            if (JSON.stringify(errors) === "{}") {
                callback(undefined, state)
            } else {
                callback(errors, state);
            }
        }

        render() {
            return (
                <div className='border'>
                    <Cmp
                        {...this.props}
                        getFieldDecorator={this.getFieldDecorator}
                        getFieldsValue={this.getFieldsValue}
                        getFiledValue={this.getFiledValue}
                        validateFields={this.validateFields} />
                </div>
            )
        }
    }
}