import {useState,useEffect} from 'react';
import axios from 'axios';
import Author from './Author';
import AuthorForm from './AuthorForm';
function Authors(){ 
	const[authorsList,setAuthorList]=useState([{}]);
	useEffect(()=>
	{
		getAuthors();
	},[]);
	const getAuthors=()=>{
		axios.get('/author')
		.then((res)=>
		{

			setAuthorList(res.data);
		})
		.catch((err)=>{
			handlError(err);
		})
	}
	console.log(authorsList)
	const handlError=(err)=>{
		console.log()
		alert(err.toString());
	}
	const deleletAuthor=(id)=>{
		axios.delete('/author/'+id)
		.then((res)=>{
			getAuthors();
		})
		.catch((err)=>
		{
			handlError(err)
		})
	}
	console.log(authorsList)
	const addAuthor=(e)=>{
		e.preventDefault();
		const{first_name,last_name,dob,dod}=e.target;
		let authorOb={
			first_name:first_name.value,
			last_name:last_name.value,
			dob:dob.value,
			dod:dod.value
			}
			axios.post('/author',authorOb)
			.then((res)=>
			{
				axios.get('/author')
				.then((res)=>
				{
					setAuthorList(res.data);
				})
				.catch((err)=>
				{
					handlError(err);
				})
			});
		}
		return(
			<div>
				

	{
			authorsList.map(function(val){
			return <div>	<Author deleletAuthor={deleletAuthor} val={val}/></div>
			
			})
	}

	<AuthorForm addAuthor={addAuthor}/>
			</div>
			);
}
export default Authors;