import {useEffect,useState} from 'react';

const useFetch = (url) =>{

    const [data,setData] = useState(null);

    useEffect(()=>{
        const asyncFunc = async () =>{
            const postResp = await fetch(url);
            const resp =await postResp.json();
            setData(resp[0]) 
               
        }
        asyncFunc();
    },[url])

    return data;
    
}

export default useFetch;