import {useState} from 'react';
import UserProfileDetails from './UserProfileDetails'

function UserProfile(){

	const [user,setUser]=useState({name:" " , age: " "});

	const changeName=(e)=>{
		setUser({name:e.target.value, age:user.age})
	}

	const changeAge=(e)=>{
		setUser({name:user.name, age:e.target.value})
	}
	return(
		<div>
		  <UserProfileDetails userObject={user}/>
		  <input type="text" placeholder="Name" onChange={changeName}/>
		  <input type="text" placeholder="Age" onChange={changeAge}/>
		 </div>

		)
} 
export default UserProfile;

