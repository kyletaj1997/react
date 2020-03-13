import React, { Component } from 'react';


class LifeB extends Component {

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
                
            </div>
        );
    }
}


export default LifeB;