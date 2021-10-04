import {useState} from 'react'
import Blogform from './BlogForm'
import Blog from './Blog'

export default function BlogMain(){
const [blog,setblog]=useState([])
	const onlogin=(e)=>{
	e.preventDefault()
	let newobj={
		title:e.target.title.value,
		blogtext:e.target.blogtetxt.value,
	    author:e.target.myUL.value,
	    date:e.target.date.value,
	    mil:new Date().getTime()
	}
	let res=blog.concat(newobj);
	setblog(res)
}
console.log(blog)
const deleteone=(indextodelete)=>{
	let out=blog.filter(function(val,index){
		if(indextodelete==index)
			return false;
		return true;
	})
	setblog(out)
}
const deleteall=()=>{setblog([])}
const showblog=()=>{
let day=new Date().getTime();
let currentday=Math.floor(day/1000/60);
console.log(currentday)
let asd=blog.filter(function(val)
{
	if(Math.floor(val.mil/1000/60)<=currentday-60)
		return false
	return true
	
})
setblog(asd);
}
	return (
		<div>
		<Blog onlogin={onlogin}/>
		<Blogform blog={blog} deleteone={deleteone} deleteall={deleteall}/>
		<button onClick={showblog}>show blog of 1 hr</button>
		
		</div>)
}