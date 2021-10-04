import {useState} from 'react';
function TodoObject (){
    const [initialVal, finalVal] = useState([]);
    let myObj;
    let res;
    function createTodo(event){
        event.preventDefault();
        myObj = {
            thingstodo: event.target.input.value,
            status: event.target.complete.value,
        }
        res= initialVal.concat(myObj);
        finalVal(res);
    }
    console.log(initialVal);
    function removeTodo(){
        finalVal([]);
    }

    function removeElement(indexToDelete){
        let newArr = initialVal.filter(function(val,index){
            if(index == indexToDelete)
                return false;
            return true;
        })
        finalVal(newArr)
    }
    return(
        <div>
            <h1>Todo list</h1><br/>
            <form onSubmit={createTodo}> <input type="text" name = "input" placeholder="enter title of todo"></input><br/>
            <p>Select Status:</p>
            <input type="radio" id="status1" name="complete" value = "complete"/>
            <label for="status1">Complete</label><br/>
            <input type="radio" id="status2" name="complete" value = "incomplete"/>
            <label for="status2">InComplete</label><br/>
            <button>add todo</button> </form>
            <button onClick={removeTodo}>delete all</button>
            {
            initialVal.map(function(val,index){
                return <div> <strong>Things to do are:</strong> {val.thingstodo} , <strong>Status:</strong> {val.status}  
                 <button onClick={()=>{removeElement(index)}}>delete</button> </div>
                
            })
        }
        </div>
    )
}
export default TodoObject;