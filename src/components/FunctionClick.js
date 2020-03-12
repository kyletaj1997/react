import React, { Component } from 'react'

function FunctionClick(){

    function ButtonClick(){
      console.log("wew")
    }
    return (
        <div>
        <button onClick= {ButtonClick}> Click</button>
          </div>

    )

}

export default FunctionClick