import {useState,useEffect} from 'react'
import CommentForm from './CommentForm.js';
import CommentList from './CommentList.js';
function MainCommentComponent()
{
const [comment,setcomment]=useState([]);
const [comment1,setcomment1]=useState([]);
	const submit=(e)=>
	{
	e.preventDefault();
	let val=e.target.commenttxt.value;
   let result=comment.concat(val)
    setcomment(result)
   localStorage.setItem('comments',JSON.stringify(result));
	}
	console.log(comment);
	useEffect(()=>{
	let ans1=JSON.parse(localStorage.getItem('comments'));
setcomment1(ans1)
},[])

	return(
		<div>
        <CommentForm submit = {submit}/>
		<CommentList comment={comment}  comment1={comment1}/>
		</div>
		)
}
export default MainCommentComponent;