import React, { Component } from 'react'

function NameList(){

  const names = ['awdawd','kyle']

    return (
       
           <div>
              {names.map(name => <h1>{name}</h1>)}
           </div>
        
        
    )

}

export default NameList