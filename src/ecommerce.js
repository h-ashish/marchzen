import {useState} from 'react';

function Ecommerce(){
    let [initalProd, finalProd] = useState([]);
    let res;
    function createProduct(event){
        event.preventDefault();
        let myObj = {
            productname: event.target.name.value,
            productprice: event.target.price.value,
            productstatus: event.target.status.value
        }
        res = initalProd.concat(myObj);
        finalProd(res);
    }
    console.log(initalProd);
    function removeAll(){
        finalProd([]);
    }
    function removeElement(indexToDelete){
        let newArr = initalProd.filter(function(val,index){
            if(index == indexToDelete)
                return false;
            return true;
        })
        finalProd(newArr)
    }
    return(
        <div> <form onSubmit={createProduct}>
        <input type="text" name = "name" placeholder="Enter name of product"/> <br/>
        <input type="number" name = "price" placeholder="Enter price of product"/><br/>
        <p>Choose availability status:</p>
        <input type="radio" id="id1" name="status" value = "available"/>
        <label for="id1">available</label>
        <input type="radio" id="id2" name="status" value = "not available"/>
        <label for="id2">not available</label><br/>
        <button>create product</button>
        </form> 
        <button onClick={removeAll}>delete all</button>
        {
            initalProd.map(function(val,index){
                return <div> <strong>Product name :</strong> {val.productname} , <strong>Product price:</strong> {val.productprice}
                <strong>Product status:</strong> {val.productstatus}  
                 <button onClick={()=>{removeElement(index)}}>delete</button> </div>
                
            })
        }
        </div>
    )
}
export default Ecommerce;