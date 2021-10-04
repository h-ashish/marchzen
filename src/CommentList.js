function CommentList({comment,comment1})
{
	return(
		<div>
		{
		comment.map(function(val){
			return <div>{val}</div>
		})

	}
	{
		!comment1?null:comment1.map(function(val){
			return <div>{val}</div>
		})
	}
	</div>
	)
}
export default CommentList;