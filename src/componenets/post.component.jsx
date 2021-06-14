import React  from 'react';
import useFetch from '../componenets/effects/use-fetch';

const Post =({postId})=>{

    const post = useFetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`);
            
    return (<div>
        {
        post ? (
        <div>   
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
        </div>):
        null    
        }
    </div>)

}


export default Post;