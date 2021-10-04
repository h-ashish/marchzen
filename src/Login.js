import{showDate} from './mu'
function Login(){
    let name = "ashish";
    let age = 23;
    function doLogin(){
        alert('wow! you just tried logging in')
    }
    return(
        <div className="mylogin">
            <h2>The name is {name} and age is {age}</h2>
            <input type="text" placeholder="Enter username"/>
            <input type = "text" placeholder = "Enter password"/>
            <button onClick = {doLogin} >login</button>
        </div>
    )
}
export default Login;