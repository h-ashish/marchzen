import axios from 'axios';
const Register = () =>{
    const doRegistration = (e)=>{
        e.preventDefault();
        const userOb = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        axios.post('/users/register', userOb)
        .then((res)=>{
            console.log(res.data);
            alert("Registered succesfully");
        })
    }
    return(
        <form onSubmit={doRegistration}>
            <input type="text" placeholder="username" name="username"/>
            <input type="email" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <button>submit</button>
        </form>
    )
}
export default Register;