import axios from 'axios';
import {useEffect,useState} from 'react';
import {router, useHistory} from 'react-router-dom';
const Member =()=>{

const [companyName,setCompanyName] = useState('default');
let history = useHistory();
useEffect(()=>{
	axios.get('/users/restrictedpage',{

		headers:{
			'token':localStorage.getItem('usertoken')
		}
	})
	.then((res)=>{
		console.log(res.data)
		setCompanyName(res.data.company);
	})
	.catch((err)=>{
		console.log(err);
	})
},[])
const logout =()=>{
	localStorage.removeItem('usertoken');
	history.push('/login');
	alert("you are logged out");
}
	return(<div>
		see request in console first
		<h2> {companyName}</h2>
		<button onClick = {logout}>logout</button>
		</div>)
}

export default Member;