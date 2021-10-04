import { useEffect, useState} from 'react';
function TodoLocalStorage (){
    const [initalVal, finalVal] = useState([]);
    const [no, setNo] = useState([0])
    let Obj;
    let res;
    let output;
    function createTodo(event){
        event.preventDefault();
        Obj = {
            thingstodo: event.target.input.value,
            status: event.target.status.value
        }
        res = initalVal.concat(Obj);
        finalVal(res);
        localStorage.setItem("Todo Array", JSON.stringify(res));
    }
    console.log(initalVal);
    useEffect(() =>{
        let output = JSON.parse(localStorage.getItem('Todo Array'));
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
        localStorage.setItem("Todo Array", JSON.stringify(newArr));
        
    }
    return (
        <div>
            <h1> Todo List</h1>
            <form onSubmit ={createTodo}>
                <input type="text" name="input" placeholder="Enter name of todo"></input><br/>
                <label>Select status: </label><br/>
                <input type="radio" id="status1" name="status" value="complete"/>
                <label for="status1">Complete</label>
                <input type="radio" id="status2" name="status" value="incomplete"/>
                <label for="status2">Incomplete</label><br/>
                <button>add todo</button>
            </form>
            <button onClick={removeAll}>Delete All</button><br/>
            {
                initalVal.map(function(val,index){
                    return <div> <strong>Things to do are: </strong>{val.thingstodo} , 
                    <strong>The status is :</strong> {val.status} <button onClick={()=>{removeElement(index)
                    } }> delete</button></div>
                })
            }
            Local storage Values<br/>
            {
                !no ? null : no.map(function(val ){
                    return <div> <strong>Things to do are: </strong>{val.thingstodo} , 
                    <strong>The status is :</strong> {val.status} </div>
                })
            }
        </div>
    )
}
export default TodoLocalStorage;