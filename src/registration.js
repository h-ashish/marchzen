function Regis(){
    return(
        <div id="assign2">
            <h1>Registration</h1>
        <input type="text" placeholder="Enter Username"/><br/>
        <input type="password" placeholder="Enter password"/><br/>
        <input type="text" placeholder="Enter fullname"/><br/>       
        <input type="date"/><br/>        
        <input type="text" placeholder="Enter education"/><br/>        
        <textarea rows="15" cols="20" placeholder="Describe"> </textarea><br/>
        <label for="gender">Select gender:</label>
        <input type="radio" value="male" name="gender"/>male     
        <input type="radio" value="female" name="gender"/>female <br/>
        <button> Submit </button>    
    </div>
    )
}
export default Regis;