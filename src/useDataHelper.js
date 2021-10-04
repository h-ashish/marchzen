import {useState, useEffect} from 'react';
import axios from 'axios';

const useDataHelper = (url) =>{
    const [data, setData] = useState({});
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return [data, setData]
}
export default useDataHelper;