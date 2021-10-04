import {useState, useEffect} from 'react';
import axios from 'axios';
import profileimg from './profileimg.jpeg';
import loader from './loader.gif';

export default function April8assign1 (){
    const [user,setUser] =  useState({name:"default", location: "default",hobbies: [], personalInfo:{}});
    const [personal, setPersonal] = useState({personalInfo:{}})
    const [hobbies, setHobbies] = useState({hobbies:[]})
    const [showImg, setShowImg] = useState(true);
    const [load, showLoad] = useState (true)
        useEffect(() => {
            setTimeout(() => {
                axios.get('/user.json')
            .then(function(res){
                console.log(res);
                setUser(res.data);
                
            })
            .catch((err)=>{
                console.log("some error has occured");
                console.log(err.toString());
            })
            .finally (()=>{
                console.log('job done');
                showLoad(false);
            })
            }, 3000);
            
        },[])
        const showPersonal = () => {
            setPersonal(user.personalInfo);     
        }     
        const showHobbies = () => {
            setHobbies(user);
        }
        const hideImg = () =>{
            setShowImg(false);
        }
    return(
        <div style = {{
        justifyContent: "center",
        alignItems: "center"}}>
            { load?<img src = {loader} />:<div>
            { showImg?<img src = {profileimg} />:""} <br/>
            <button onClick={showPersonal}>show personal details</button><br/>
            <button onClick={showHobbies}>show Hobbies</button><br/>
            <button onClick={hideImg}>Hide Image</button><br/>
            <h3>The personal details are:</h3>
            <table border="2" text-align="center" style = {{margin:"auto"}}>
                <tr>
                    <th> Age </th>
                    <th> Bank Account </th>
                    <th> Pan </th>
                </tr>
                <tr>
                    <td> {personal.age}</td>
                    <td> {personal.bankacc}</td>
                    <td> {personal.pan}</td>
                </tr>
            </table>
            <strong><p>The Hobbies are:</p></strong>
            {
                    hobbies.hobbies.map(function(val){
                        return <ul><li>{val}</li></ul>
                    })
                
            }   
            </div>} <br/>
        </div>
    )
}