export default function Bloglist({val,index,deleteone,}){
	return <div>
		<table border="2">
			<tr>
			<td>{val.title}</td>
			<td>{val.blogtext}</td>
			<td>{val.author}</td>
			<td>{val.date}</td>
			<td><button onClick={()=>{deleteone(index)}}>delete</button></td>
			</tr>
			</table>
			</div>
			
}