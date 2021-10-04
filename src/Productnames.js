import {useEffect,useState} from 'react';
import axios from 'axios';

export default function ProductNames () {
    const [product, setProduct] = useState({products:[]});
    useEffect(()=>{
        axios.get('/productnames.json')
        .then(function(res){
            console.log(res);
            setProduct(res.data);
        })
    },[])
    return(
        <div>
            <h1>The product names are: </h1>
            Product name: {product.products}<br/>
        </div>
    )
}