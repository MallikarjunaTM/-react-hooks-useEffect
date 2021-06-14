import React from 'react';
import useFetch from '../componenets/effects/use-fetch';

const User =({userId})=>{

    const user = useFetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
            
    return (<div>
        {
            user ?
            (<div>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </div>) :
            null
        }
        
    </div>)

}


export default User;