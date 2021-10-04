import { useEffect, useState } from "react";
import axios from 'axios';
import loader from './loader.gif';
export default function UserDetails(){
    const [user, setUser] = useState({name:"default name", hobbies:[]});
   
    const [showImg, setShowImg] = useState(false);
    const [title, setTitle] = useState("default title");
    useEffect(() =>{
        setShowImg(true);
        setTimeout(()=>{
            axios.get('/user.json')
            .then(function(res){
                console.log(res);
                setUser(res.data);
            })
            .catch((err)=>{
                console.log("some erroe occured");
                console.log(err.toString());
            })
            .finally(()=>{
                console.log('job done');
                setShowImg(false);
            })
        },4000)
    },[]);
    return (
        <div>
            <h1>{title}</h1>
            <h3>See the user data below</h3>
            { showImg?<img src = {loader} />:""} <br/>
            Name = {user.name} <br/>
            <input type = "text" value= {title} onChange = {(e) => {setTitle(e.target.value)}}/><br/>
            { /* this is the way we write comments in react hmtl */}
        </div>
    )
}

// import {useState, useEffect} from 'react';
// import axios from "axios";
// export default function UserDetails(){
//     const [user, setUser] = useState({name:'default', hobby:[]})
//     useEffect(()=>{
//         axios.get('/user.json')
//         .then(function(res){
//             console.log(res);
//             setUser(res.data);
//         })
//     },[]);
//     return(
//         <div>
//             <h1>See the user data below</h1>
//             Name = {user.name} <br/>
//         </div>
//     )
// }