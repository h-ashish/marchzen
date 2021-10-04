import {useState} from 'react'
function TodoDelete (){
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
        let out = initialVal.filter(function(val){
            if(val.length == 0)
                return true;
            return false;
        })
        finalVal(out);
    }

    function removeTodo(indexToDelete){
       let newArr = initialVal.filter(function(val,index){
           if(index == indexToDelete)
                return false;
            return true;
       })
       finalVal(newArr);
    }
    return(
        <div>
            <h1>Todo List</h1>
            <textarea rows="20" cols="25" id="input" placeholder="Enter things to do"/><br/>
            <button onClick={createTodo}>create todo</button>
            <button onClick={deleteTodo}>delete all</button>
            {
            initialVal.map(function(val,index){
                return <div> {val} <button onClick={()=>{removeTodo(index)}}>delete</button></div>
            })
        }
        </div>
    )
}
export default TodoDelete;