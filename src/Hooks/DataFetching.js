import React, { useState,useEffect } from 'react';
import axios from 'axios'

function DataFetching(props) {
  const [post , setPost] = useState([])
 
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
     setPost(res.data)
  }).catch(error=>{
        console.log(error)
    })
  })

    return (
        <div>
            {post.map(post=>(
                <h2>{post.title}</h2>
            ))}
        </div>
    );
}

export default DataFetching;