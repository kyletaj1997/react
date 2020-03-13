import React, { Component } from 'react'
import PersonList from './PersonList'

function NameList(){

  const person= ['kyle','tajores']

    return (
       
           <div>
              {person.map((person , index ) => <h1 key={index}> {index} {person} </h1> )}
           </div>
        
        
    )

}

export default NameList