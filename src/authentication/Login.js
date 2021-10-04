import axios from 'axios';
import {router, useHistory} from 'react-router-dom';

const Login =()=>
{
	let history = useHistory();
	const doLogin =(e)=>{
		e.preventDefault();
		let userDetails = {
			email:e.target.email.value,
			password:e.target.password.value,
		}
		axios.post('/users/login',userDetails)
		.then((res)=>{
			console.log(res.data)
			localStorage.setItem('usertoken',res.data.token);
			history.push('/member');
		})
	}
	return(<div>
		<form onSubmit = {doLogin}>
		<input type = "email" placeholder ="email" name = "email" />
		<input type = "password" placeholder ="password" name = "password" />
		<button>Login</button> 
		</form>
		</div>
			)
}
export default Login;