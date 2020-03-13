import React, { Component } from 'react'
import HOC from './HOC'

class Hover extends Component {
   

    render(){
        const {counter , incrementcount} = this.props
    return (
            <div>
            <h1>{counter}</h1>
            <h1 onMouseOver={ incrementcount}> Change</h1>
              </div>
        
        );
    }
}
export default HOC(Hover)