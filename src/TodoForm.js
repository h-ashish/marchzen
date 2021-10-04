function TodoForm({TodoAdd,removeAll})
{
	return(
		<div>

			<form onSubmit ={TodoAdd}>
			<input tyep = "text" name = "tex" placeholder ="Enter Todo "/><br/>
			<textarea rows="5" cols="26" name= "name"  placeholder="Enter todo Description"/><br/>
			<button>Add Todo</button>
			</form>
			<button onClick ={removeAll}>Remove All Todo</button>
		</div>

		   )
}
export default TodoForm;