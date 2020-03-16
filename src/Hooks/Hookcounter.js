import React, { useState,useEffect } from 'react';

function Hookcounter() {
  
    const[count,setCount] = useState(0)
    
    useEffect(()=>{
        document.title = 'you Click'+count+'times'
    }
    )

        return (
            <div>
                <button onClick={()=>setCount(count+1)}>Count {count}</button>
            </div>
        )
    
}

export default Hookcounter;