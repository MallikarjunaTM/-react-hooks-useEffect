
import './App.css';
import Card from './componenets/card.component';

import React ,{useReducer,useEffect} from 'react';



const App=(props)=> {

  const INITIAL_STATE={
    user:'',
    query:''
  }

  const userReducer = (state,action)=>{
    switch(action.type){
      case 'QUERY_CHANGE':
          return {
            ...state,
            query:action.payload
          }
      case 'USER_CHANGE':
        return {
          ...state,
          user:action.payload
        }    
      default :return state
    }
  }

  const setUser =user =>({
    type:'USER_CHANGE',
    payload:user
  })

  const setQuery = query =>({
    type:'QUERY_CHANGE',
    payload:query
  })
 
  const [state,dispatch] =useReducer(userReducer,INITIAL_STATE)
  const {user,query}=state

  useEffect(()=>{
    if(query.length>0){
    const asyncFunc= async ()=>{
      const resp=await fetch(`https://jsonplaceholder.typicode.com/users?username=${query}`)
      const response=await resp.json()
      dispatch(setUser(response[0]))
     }
     asyncFunc();
  } 
},[query])
  
  return (
    <div>
      <Card>
        
        <input type='text' onChange={(e)=>dispatch(setQuery(e.target.value))}/>
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
