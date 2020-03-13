import React, { Component } from 'react'
import PersonList from './PersonList'

function NameList(){

  const person= [{name:'kyle',age:"2"},{name:'wew',age:"3"}]

    return (
       
           <div>
              {person.map(person => <PersonList key={person.name}  person={person} />)}
           </div>
        
        
    )

}

export default NameList