import{useState, useEffect} from 'react';
import axios from 'axios';
import loader from './loader.gif';

export default function April8assign2 () {
    const [user, setUser] = useState([{name:"" , location:"",hobbies: [], personalInfo:{}}]);
    const [load, showLoad] = useState (true);
    const [chennainame, setChennainame] = useState ([])
    const [totalusers, setTotalusers] = useState([]);
    const [hobby, setHobby] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            showLoad(false);
        },3000)
    },[])
    const showDetails = () => {
        axios.get('/details.json')
        .then(function(res){
            console.log(res)
            setUser(res.data);
        })
    }
    const showTotalUsers = () => {
        setTotalusers(user.length);

    }
    function removeElement(indexToDelete){
        let newArr = user.filter(function(val,index){
            if(index == indexToDelete)
                return false;
            return true;
        })
        setUser(newArr)
    }
    const deleteAll = () => {
        setUser([])
    }
    const showChennaiUsers = () => {
        let n = user.filter(function(val){
            if(val.location == "chennai" || val.location == "Chennai"){
               return val;
            } 
        })
        setChennainame(n);
    }

    const showHobbies = (e) => {
        e.preventDefault();
        let out = user.filter(function(val){
            if( val.hobbies[0] === e.target.hobbyname.value ||
                val.hobbies[1] === e.target.hobbyname.value ||
                val.hobbies[2] === e.target.hobbyname.value){
                return val;
            } 
        })
        setHobby(out);
    }
        return (
                <div style = {{
                    justifyContent: "center",
                    alignItems: "center"}}>
                    {load?<img src={loader}/>: <div><button onClick={showDetails}>show details</button>
                    <button onClick={showTotalUsers}> show total users</button>
                    <button onClick={deleteAll}> delete all users</button>
                    <button onClick={showChennaiUsers}>show chennai users</button>
                    <form onSubmit={showHobbies}>
                        <input type="text" name="hobbyname" placeholder="Enter hobbies to search"/>
                        <button>search hobbies</button>
                    </form>
                    <h3>The details are:</h3>
                    {user.map(function(val,index){
                        return <div> <hr>
                        </hr><div><strong>Name:</strong> {val.name} <br/>  </div>
                        <div><strong>Location:</strong>  {val.location} <br/></div>
                        <div><strong>Hobbies:</strong>  <p>{val.hobbies.map(function(a){
                            return <li>{a}</li>
                        })}</p></div>
                        <div><strong>Personal info:</strong>  <li>Age: {val.personalInfo.age}</li>
                        <li>Bank Account: {val.personalInfo.bankacc}</li>
                        <li>Pan: {val.personalInfo.pan}</li></div> <button onClick={()=>{removeElement(index)}}>delete element</button>
                        </div> 
                    })
                    }
                    <strong><div>Total number of users are: {totalusers}</div></strong>
                    <strong><div>Users from chennai are:</div></strong>
                    {
                        chennainame.map(function(val){
                            return <div>{val.name}</div>
                        })
                    }
                    <strong><div>Search results are:</div></strong>
                        {
                        hobby.map(function(val,index){
                            return <tr><td>{val.name}</td></tr>
                        })
                    }
                    </div>}
                </div>
        )
}