  function CommentForm ({submit}){
    return(
        <div>
            <h2>Comment Box</h2>
            <form onSubmit={submit}>
            <textarea rows="22" cols="22" placeholder="Enter some comments" name="commenttxt"/><br/>
            <button >save</button>
            </form>
            
        </div>
    )
}
export default CommentForm;