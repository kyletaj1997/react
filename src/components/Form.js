import React, { PureComponent } from 'react';


class Form extends PureComponent {
    constructor(props){
        super(props)
            this.state={
               username:'',
               select:'' 
            }
     }

     handler = (event) =>{
         this.setState({
            username:event.target.value
         })
     }

     handler1 = (event) =>{
        this.setState({
           topic:event.target.value
        })
    }
  

        render() {
            return (
                <div>
                    <input type="text" value={this.state.username} onChange={this.handler.bind(this)}></input>
                    <select value={this.state.topic} onChange={this.handler1.bind(this)}>
                        <option value="react"> awd</option>
                        <option value="wow"> aaa</option>
                    </select>
                    <button onClick={this.handler1.bind(this)}>click</button>
                </div>
            );
        }
}

export default Form;