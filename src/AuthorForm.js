const AuthorForm=({addAuthor})=>
<form onSubmit={addAuthor}>

<input type="text" name="first_name"/>
<input type="text" name="last_name"/>
<input type="date" name="dob"/>
<input type="date" name="dod"/>
<button>addAuthor</button>
</form>
export default AuthorForm;