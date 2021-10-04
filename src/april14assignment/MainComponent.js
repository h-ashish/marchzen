import {useState} from 'react';
import TodoComponent from './TodoComponent';
import TodoForm from './TodoForm';




function MainComponent()
{
	const [todo,settodo] = useState([]);

		
		const TodoAdd=(e)=>
		{
			e.preventDefault();
			let todoObj = {
			input1:e.target.tex.value,
			input2:e.target.name.value,
		};
			let newTodo = todo.concat(todoObj);
			settodo(newTodo);
			
		}
		console.log(todo);


		function removeAll()
		{
			settodo([]);
		}
		const deleteOne=(indexTODelete)=>
		{
			let DelteIn = todo.filter(function(val,index){ 

				 if(indexTODelete==index)
				 	return false;
				 return true;
			})
				settodo(DelteIn);
		}



	return(
			<div>
			<h1>Todo list</h1>
			
			<TodoForm TodoAdd={TodoAdd} removeAll={removeAll}/>
			<TodoComponent todo={todo} deleteOne={deleteOne}/>

			
			

			</div>
		)
}
export default MainComponent;