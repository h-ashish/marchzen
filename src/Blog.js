export default function Blog({onlogin}){
	return(<div>
		
			<form onSubmit={onlogin}>
			<input type="text" name="title" placeholder="Enter the title"/><br/>
			<input type="text" name="blogtetxt" placeholder="Enter the blogtext"/><br/>
			<label name="myUL">select the authour:</label>
			<select name="myUL">

              <option>yogesh</option>
              <option>ashish</option>
              <option>prajwal</option>
              <option>pooja</option>
            </select><br/>
            <input type ="date" name="date"/><br/>
            <button>submit</button>
            </form>
			</div>)
}