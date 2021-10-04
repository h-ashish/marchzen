function Registration (){
    function regis(event){
        event.preventDefault();
        let username = event.target.name.value;
        let userage = event.target.age.value;
        let userloc = event.target.location.value;
        let userinterest = event.target.interest.value;
        let userwebsite = event.target.website.value;
        let userdesc = event.target.description.value;

        document.getElementById('mytable').innerHTML =  ` 
        <tr> <th> Name </th> 
        <th> Age </th> 
        <th> Location </th> 
        <th> Interest </th> 
        <th> Website </th> 
        <th> Description </th> </tr>
        <tr> <td> ${username} </td> 
        <td> ${userage} </td> 
        <td> ${userloc} </td> 
        <td> ${userinterest} </td> 
        <td> ${userwebsite} </td> 
        <td> ${userdesc} </td> </tr>
        `
    }
    return (
        <div>
            <form onSubmit= {regis}>
                <input type="text" name="name" placeholder="Enter name"/><br/>
                <input type="number" name="age" placeholder="Enter age"/><br/>
                <input type="text" name="location" placeholder="Enter location"/><br/>
                <label for="interest">Select interests</label><br/>
                <select name="interest" id="interest">
                    <option value ="HTML">HTML</option>
                    <option value ="CSS">CSS</option>
                    <option value ="Javascript">Javascript</option>
                    <option value ="React">React</option>
                </select><br/>
                <input type="text" name="website" placeholder="Enter website"/><br/>
                <textarea rows="15" cols="20" name="description" placeholder="Describe yourself"></textarea> <br/>
                <button>Submit</button>
                <table id="mytable" border="2"></table>
            </form> 
        </div>
    )
}
export default Registration