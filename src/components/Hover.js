import React, { Component } from 'react'

class Hover extends Component {
      constructor() {
      super()
    
        this.state = {
            counter: 0
        }
      }
    
      MessageChange(){
          this.setState({
              counter: this.state.counter + 1
          })
      }

    render(){
    return (
            <div>
            <h1>{this.state.counter}</h1>
            <h1 onMouseOver={this.MessageChange.bind(this) }> Change</h1>
              </div>
        
        );
    }
}
export default Hover