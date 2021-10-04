import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Tutorial (){ 
    const[tutorialList, setTutorialList] = useState([{}]);
    useEffect(()=>{
        getTutorial();
    },[]);
    const getTutorial = () =>{
        axios.get('/tutorial')
        .then((res)=>{
            setTutorialList(res.data);
        })
        .catch((err)=>{
            // alert(err.toString());
        })
    }
    console.log(tutorialList);
    return(
        <div>
            {
                tutorialList.map(function(val){
                    return <div>Title: {val.title} <br/>
                    Description: {val.description} <br/>
                    Published: {val.published}</div>
                })
            }
        </div>
    )
}