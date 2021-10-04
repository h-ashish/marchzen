function  Author({val,deleletAuthor}){
	return(
		<div>
		
		<div>First Name:{val.first_name}</div>
		<div>last nam:{val.last_name}</div>
		<div>DOB:{val.dob}</div>
		<div>DOD:{val.dod}</div>
		<button onClick={()=>{deleletAuthor(val._id)}}>delete</button>
		</div>
		)
}
export default Author;