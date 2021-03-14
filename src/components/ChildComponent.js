import React, { Component } from 'react'
 
class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.greetHandler}>GreetParent</button>
            </div>
        )
    }
}

export default ChildComponent
