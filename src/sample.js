/*This is the json. 
[
	{
		"name":"Jatin",
		"location":"chennai",
		"hobbies":["reading","Writing"],
		"personalInfo":{
			"age":22,
			"bankacc":12312,
			"pan":"asfas12",	
		}
	},
	{
		"name":"Kashyap",
		"location":"Chennai",
		"hobbies":["reading","Writing","Cricket"],
		"personalInfo":{
			"age":23,
			"bankacc":12311212,
			"pan":"asfas12as",	
		}
	},
	{
		"name":"Pooja",
		"location":"Pune",
		"hobbies":["MOvies","Writing","Music"],
		"personalInfo":{
			"age":22,
			"bankacc":1212312,
			"pan":"asfds12",	
		}
	}
]
In the above Json, dont show data when the component loads. 
Instead create a button show Users. on clicking the button, you should get data from axios and show it. show a loader and delay using setTimeout. 

Now all users should be shown. show each user inside a div. 
create a button "show total users." . on clicking this button, you shold show the count of total users in alert box. 
create a button delete. on clicking delete you should be able to delete a user. 
create clearall, on clicking you should be able to delete all users.

create a button "show chennai users". on clicking show all the user names in a table who are in chennai. 

create a textbox where you can enter the hobby. on clicking search button, you should show all users in a table who have the hobby that u entered in table. if you entered a hobby and no users are found, then display message, "no users found."*/
import {useState,useEffect} from 'react';
import axios from 'axios';
import loader from './loader.gif'	

function Detailsofjson()
{
	const[loader1,setloader]=useState(false);
	const[details,setdetails]=useState([]);
	const[details1,setdetails1]=useState([]);
	const[details2,setdetails2]=useState([]);

	useEffect(()=>
	{
		setloader(true);
		setTimeout(()=>{
			setloader(false)

		},3000);
		
	},[]);
	const showdate=()=>
	{
		axios.get('/componentsdata.json')
			.then(function(res)
			{
				console.log(res.data);
				setdetails(res.data);
			})
	}
	let a;
	const totaluser=()=>
	{
		setdetails1(details.length);

	}
	const remove=(indextodelete)=>{
	let vals=details.filter(function(val,index)
	{
	if(index==indextodelete)
			 return false;
		return true;
	})
	setdetails(vals);
	

	}
	const clearall=()=>
	{
		setdetails([]);
	}
	const seeuser=()=>
{
	let ans=details.filter(function(val){
		console.log(val.location);
if(val.location=='Chennai' || val.location=='chennai')
	
		return val;
	})
setdetails2(ans)
	
}
const changehoby=(e)=>
{
	e.preventDefault();
	let qqq=e.target.name1.value;
let values=details.filter(function(val1)
{
			console.log(val1.hobbies);

if(val1.hobbies[0]==qqq||val1.hobbies[1]==qqq||val1.hobbies[2]==qqq)	
		return val1;

})
setdetails(values)
}

	return(
 <div>
	{details1}
	
    {loader1?<img src={loader}/>: <div>
    <button onClick={showdate}>show data</button>
    <button onClick={totaluser}>count totaluser</button>
    <button onClick={clearall}>clear all</button>
    <button onClick={seeuser} >see user</button>
    <form   onSubmit={changehoby}>
     <input type="search" name="name1" />
	<button>show hobby</button>
	</form>
    <table border="1px"><tr>
    <th>name</th>
    <th>location</th>
    <th>hobbies</th>
    <th>age</th>
    <th>bankacc</th> 
    <th>pan</th> 
    <th>button</th>
    </tr>
    {
    details.map(function(val,index){
    	return	<tr><td>{val.name}</td><td>{val.location}</td><td>{val.hobbies}</td><td>{val.personalInfo.age}</td><td>{val.personalInfo.bankacc}</td><td>{val.personalInfo.pan}</td><td><button onClick={()=>remove(index)}>delete</button></td></tr>
    })
}
    {
    details2.map(function(val,index){
    	return	<tr><td>{val.name}</td></tr>
    })
   }
   </table>
   </div>}
 </div>
		)
} 
export default Detailsofjson;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import loaderr from "./loader.gif";
// function Sample() {
//   let [users, usersFx] = useState([
//     {
//       name: "",
//       location: "",
//       hobbies: [],
//       personalInfo: {
//         age: "",
//         bankacc: "",
//         pan: "",
//       },
//     },
//   ]);
//   let [imgFlag, imgFlagFx] = useState(false);
//   let [hidder, hidderFx] = useState(false);
//   let [ChennaiArr, ChennaiArrFx] = useState([]);
//   let [hArr, hArrFx] = useState([]);

//   function showUser() {
//     imgFlagFx(true);
//     hidderFx(false);
//     usersFx([
//       {
//         name: "",
//         location: "",
//         hobbies: [],
//         personalInfo: {
//           age: "",
//           bankacc: "",
//           pan: "",
//         },
//       },
//     ]);
//     setTimeout(() => {
//       axios
//         .get("/details.json")
//         .then((res) => {
//           usersFx(res.data);
//           console.log(res.data);
//         })
//         .catch((err) => {
//           alert("unable to fetch api");
//         })
//         .finally(() => {
//           hidderFx(true);
//           imgFlagFx(false);
//         });
//     }, 3000);
//   }
//   function deleteUser(del) {
//     let arr = users.filter((val, i) => {
//       if (i === del) {
//         return false;
//       } else {
//         return true;
//       }
//     });
//     usersFx(arr);
//   }
//   function countUsers() {
//     let count = 0;
//     users.forEach(() => {
//       count++;
//     });
//     alert(`The total number of users is/are ${count}`);
//   }
//   function chennaiUsers() {
//     let arr = users.filter((val) => {
//       //   if (val.hobbies[0] === "Chennai" || val.hobbies[1] === "chennai"||val.hobbies[2] === "chennai") {
//       if (val.location === "Chennai" || val.location === "chennai") {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     console.log(arr);
//     ChennaiArrFx(arr);
//   }
//   function hobbySearch() {
//     let arr = [];
//     let inp = document.getElementById("x").value;
//     arr = users.filter((val) => {
//       if (
//         val.hobbies[0] === inp ||
//         val.hobbies[1] === inp ||
//         val.hobbies[2] === inp
//       ) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     console.log(arr);
//     hArrFx(arr);
//     if (arr[0] == undefined) {
//       alert("No user found");
//     }
//   }
//   return (
//     <div>
//       {imgFlag ? <img src={loaderr} /> : ""}
//       <button onClick={showUser}>Show User</button>
//       <div>
//         {hidder
//           ? users.map((val, i) => {
//               return (
//                 <div>
//                   {" "}
//                   <div>
//                     Name:{val.name}
//                     <br />
//                     Location:{val.location}
//                     <br />
//                     Hobbies:
//                     {val.hobbies.map((val) => {
//                       return (
//                         <div>
//                           {val}
//                           <br />
//                         </div>
//                       );
//                     })}
//                     <br />
//                     <br />
//                     Personal Details:
//                     <br />
//                     Age:{val.personalInfo.age}
//                     <br />
//                     Account Number:{val.personalInfo.bankacc}
//                     <br />
//                     Pan Number:{val.personalInfo.pan}
//                     <br />
//                     <button
//                       onClick={() => {
//                         deleteUser(i);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <br />
//                   <hr />
//                 </div>
//               );
//             })
//           : ""}
//       </div>
//       <button
//         onClick={() => {
//           usersFx([
//             {
//               name: "",
//               location: "",
//               hobbies: [],
//               personalInfo: {
//                 age: "",
//                 bankacc: "",
//                 pan: "",
//               },
//             },
//           ]);
//           hidderFx(false);
//         }}
//       >
//         Clear User
//       </button>
//       <button onClick={countUsers}>Show Total Users</button>
//       <br />
//       <br />
//       <br />

//       <button onClick={chennaiUsers}>Show Chennai users</button>
//       <ol>
//         {ChennaiArr.map((val) => {
//           return <li>{val.name}</li>;
//         })}
//       </ol>
//       <br />
//       <input placeholder="Enter the Hobby to search" id="x" />
//       <br />
//       <button onClick={hobbySearch}>Search (Hobby based)</button>
//       <table>
//         {hArr.map((val) => {
//           return <td>{val.name}</td>;
//         })}
//       </table>
//     </div>
//   );
// }
// export default Sample;
