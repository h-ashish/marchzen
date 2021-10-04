import {useState} from 'react';
import UserProfileDetails from './UserProfileDetails';
import UserProfileForm from './UserProfileForm';
export default function UserProfile (){
    const [user,setUser] = useState({name:'', location: ''});
    const changeName = (e) => {
        setUser({name: e.target.value, location:user.location});
    }
    const changeLocation = (e) => {
        setUser({name:user.name, location: e.target.value});;
    }
    return (
        <div>
            <UserProfileDetails userObject = {user}/>
           <UserProfileForm changeName = {changeName} changeLocation = {changeLocation}/>
        </div>
    )
}




// import {useState} from 'react';
// export default function UserProfile (){
//     const [initialVal, finalVal] = useState('');
//     function show () {
//         let output = JSON.parse(localStorage.getItem("UserObj"))
//         finalVal(output);
        
//     }
//     console.log(initialVal)
//     return(
//         <div>
//             <button onClick={show}>show local storage details</button>
//             <table style={{ border: "2", paddingTop: "10px",
//   paddingBottom: "10px",
//   textAign: "center",
//   backgroundColor: "teal",
//   color: "maroon"}} >
//                 <tr>
//                     <th> Name </th>
//                     <th> Username </th>
//                     <th> Date of birth </th>
//                     <th> Date of joining </th>
//                     <th> Date of graduating </th>
//                     <th> Favorite color </th>
//                     <th> City </th>
//                     <th> Password </th>
//                 </tr>
//                 <tr>
//                     <td>{initialVal.name}</td>
//                     <td>{initialVal.username}</td>
//                     <td>{initialVal.dob}</td>
//                     <td>{initialVal.joindate}</td>
//                     <td>{initialVal.graddate}</td>
//                     <td>{initialVal.favoritecolor}</td>
//                     <td>{initialVal.city}</td>
//                     <td>{initialVal.password}</td>
//                 </tr>
//             </table>
//         </div>
//     )
// }