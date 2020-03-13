import React, { Component } from 'react';
import LifeB from './LifeB'

class LifeA extends Component {

    constructor(props){
        super(props)
            this.state={
              name:"Kyle"
            }

            console.log("A")
     }
   
     static getDeriveStateFromProps(props,state){
        console.log("A")
         return null
     }

     componentDidMount(){
        console.log("A")
     }
    render() {
        return (
            <div>
                <LifeB></LifeB>
            </div>
        );
    }
}


export default LifeA;