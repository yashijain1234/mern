import axios from 'axios'
import React,{useState,useEffect} from 'react'

function Apicallingusinghooks() {
    const[posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> {
          console.log(response.data);
          setPosts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    })
    return (
        <div>
            <ul>
                {
                    posts.map(post=> <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Apicallingusinghooks
