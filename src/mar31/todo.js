import {useState} from 'react';
function Todo(){
    const [initialVal,finalVal] = useState([]);
    let newTodo;
    let res;
    function createTodo(){
        newTodo = document.getElementById('input').value;
        res = initialVal.concat(newTodo);
        finalVal(res);
        document.getElementById('input').value = '';
    }
    
    console.log(initialVal);
    function deleteTodo(){
        initialVal.length = 0;
        finalVal(initialVal);
        createTodo();
        
    }
    return(
        <div>
            <h1>Todo List</h1>
            <textarea rows="20" cols="25" id="input" placeholder="Enter things to do"/><br/>
            <button onClick={createTodo}>create todo</button>
            <button onClick={deleteTodo}>delete</button>
            {
            initialVal.map(function(val){
                return <div> {val}</div>
            })
        }
        </div>
    )
}
export default Todo;