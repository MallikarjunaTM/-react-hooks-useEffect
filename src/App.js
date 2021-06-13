
import './App.css';
import Card from './componenets/card.component';

import React ,{useState,useEffect} from 'react';



const App=(props)=> {
  const [user,setUser] = useState('Bret');
  const [query,setQuery]=useState(null);

  useEffect(()=>{
    if(query.length>0){
    const asyncFunc= async ()=>{
      const resp=await fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`)
      const response=await resp.json()
      setUser(response[0])
     }
     asyncFunc();
  } 
},[query])
  
  return (
    <div>
      <Card>
        
        <input type='text' onChange={(e)=>setQuery(e.target.value)}/>
        {user?
        <div>
          <h1>{user.id}</h1>
          <h1>{user.name}</h1>
        </div> :
        null}
        
      </Card>
    </div>
  );
}


export default App;
