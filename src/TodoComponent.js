import TodoShow from './TodoShow'
function TodoComponent({todo,deleteOne})
{
	
	return(
			<div>

			
			{
			
			todo.map(function(val,index){
				return <TodoShow val ={val} index ={index} deleteOne ={deleteOne}/>
			})
			}



			</div>
		)
}

export default TodoComponent;