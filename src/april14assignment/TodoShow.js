function TodoShow({val,index,deleteOne})
{
	return(
			<div>


			ToDo Heading = {val.input1} ToDo Description ={val.input2} 
			<button onClick ={()=>{deleteOne(index)}}>Delete</button>
			</div>


		)
}
export default TodoShow;