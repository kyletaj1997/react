import React, { Component } from 'react'
import HOC from './HOC'

class Counter extends Component {
     
    render(){
      const {counter , incrementcount} = this.props
    return (
            <div>
            <h1>{counter}</h1>
            <button onMouseOver={incrementcount}> Change</button>
              </div>
        
        );
    }
}
export default HOC(Counter)