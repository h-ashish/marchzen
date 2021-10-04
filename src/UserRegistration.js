import {useState} from 'react';
export default function UserRegistration(){
    const [initialVal,  finalVal] = useState();
    const [pass, setPass] = useState();
    const [dat, setDat] = useState();
    let Obj;
    let res;
    function validation(event){
        event.preventDefault();
        Obj = {
            name: event.target.name.value,
            username: event.target.username.value,
            dob: event.target.dob.value,
            joindate: event.target.dateofjoining.value,
            graddate: event.target.dateofgraduating.value,
            favoritecolor: event.target.favcolor.value,
            city: event.target.city.value,
            password:event.target.password.value,
            confirmpassword: event.target.confirmpassword.value
        }
        if(Obj.password == Obj.confirmpassword){
            if( Obj.joindate < Obj.graddate){
                res = finalVal(Obj);
                localStorage.setItem("UserObj", JSON.stringify(initialVal));
            } else {
                setPass("joining date is after graduation date!!");
            }
        } else {
            setDat("password not matching!!")
        }
    }
    console.log(initialVal);
    return(
        <div>
            <div style={{color: "red"}} >{pass}</div><br/>
            <div style={{color: "red"}}>{dat}</div><br/>
            <form onSubmit={validation}>
            <input type="text" name="name" placeholder="Enter name"/><br/>
            <input type="text" name="username" placeholder="Enter username"/><br/>
            <label for="dob" >Select date of birth:</label><br/>
            <input type="date" name="dob"/><br/>
            <label for="dateofjoining" >Select date of joining:</label><br/>
            <input type="date" name="dateofjoining"/><br/>
            <label for="dateofgraduating" >Select date of graduation:</label><br/>
            <input type="date" name="dateofgraduating"/><br/>
            <input type="color" name="favcolor"/><br/>
            <label for="city" >Select city:</label><br/>
            <select name="city">
                <option value="delhi">Delhi</option>
                <option value="bangalore">bangalore</option>
                <option value="pune">pune</option>
                <option value="chennai">chennai</option>
            </select><br/>
            <input type="password" name="password" placeholder="Enter password"/><br/>
            <input type="password" name="confirmpassword" placeholder="Reenter password"/><br/>
            <button>Submit</button>
            </form>
            
        </div>
    )
}
