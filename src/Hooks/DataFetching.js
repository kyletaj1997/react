import React, { useState,useEffect } from 'react';
import axios from 'axios'

function DataFetching(props) {
  const [post , setPost] = useState({})
  const [id , setID] = useState(1)

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res=>{
     setPost(res.data)
  }).catch(error=>{
        console.log(error)
    })
  },[id])

    return (
        <div> 
            <input type="text" value={id} onChange={e=>setID(e.target.value)}></input>
            <div>title : {post.title}</div>
            {/*post.map(post=>(
                <h2>{post.title}</h2>
            ))*/}
        </div>
    );
}

export default DataFetching;