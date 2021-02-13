import React, { Component } from 'react'


// hoc:是一个函数，接受一个组件，返回另一个组件
const foo = Cmp => props => {
    return (
        <div className='border'>
            <Cmp {...props} />
        </div>
    )
}

const foo2 = Cmp => props => {
    return (
        <div className="hotpinkBorder">
            <Cmp {...props} />
        </div>
    )
}

// 从下往上
@foo2
@foo
@foo
class Child extends Component {
    render() {
        return <div>Child</div>;
    }
}
// const Foo = foo2(foo(foo(Child))); 


export default class HocPage extends Component {
    render() {
        return (
            <div>
                <h3>hocPage</h3>
                {/* <Foo name="msg"></Foo> */}
                <Child name="msg" />
            </div>
        )
    }
}
