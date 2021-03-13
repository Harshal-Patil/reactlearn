import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
    }
    clickHandler(){
       this.setState({
           message:'GoodBye'
       })
       console.log(this)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>OnClick</button>
            </div>
        )
    }
}

export default EventBind
