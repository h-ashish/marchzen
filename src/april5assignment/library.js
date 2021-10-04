import { useEffect, useState} from 'react';
function Library (){
    const [initalVal, finalVal] = useState([]);
    const [no, setNo] = useState([0])
    let Obj;
    let res;
    let output;
    function createLibrary(event){
        event.preventDefault();
        Obj = {
            name: event.target.name.value,
            authorname: event.target.authorname.value,
            dateofPub: event.target.date.value
        }
        res = initalVal.concat(Obj);
        finalVal(res);
        localStorage.setItem("Library Array", JSON.stringify(res));
    }
    console.log(initalVal);
    useEffect(() =>{
        let output = JSON.parse(localStorage.getItem('Library Array'));
        setNo(output);
    },[])
    function removeAll(){
        finalVal([]);
        localStorage.clear();
    } 
    function removeElement(indextoRemove){
        let newArr = initalVal.filter(function(val,index){
            if(index == indextoRemove)
                return false;
            return true;
        })
        finalVal(newArr);
        console.log(newArr);
        localStorage.setItem("Library Array", JSON.stringify(newArr));
        
    }
    return (
        <div>
            <h1> Todo List</h1>
            <form onSubmit ={createLibrary}>
                <input type="text" name="name" placeholder="Enter name"></input><br/>
                <input type="text" name="authorname" placeholder="Enter Author name"></input><br/>
                <label for="date">Select Date of publish:</label><br/>
                <input type="date" name="date" ></input><br/>
               
                <button>add library</button>
            </form>
            <button onClick={removeAll}>Delete All</button><br/>
            {
                initalVal.map(function(val,index){
                    return <div> <strong>Name: </strong>{val.name} , 
                    <strong>The status is :</strong> {val.authorname} ,
                    <strong>The date of publish is: </strong>{val.dateofPub}
                    <button onClick={()=>{removeElement(index)
                    } }> delete</button></div>
                })
            }
            Local storage Values<br/>
            {
                !no ? null : no.map(function(val ){
                    return <div>  <strong>The date of publish is:</strong> {val.dateofPub} </div>
                })
            }
        </div>
    )
}
export default Library;