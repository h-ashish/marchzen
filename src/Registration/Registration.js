import React, {useRef} from 'react';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
export default function Registration (){
    const [details, setDetails] = useState([])
    const {register,formState:{errors}, handleSubmit, watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    
    const onSubmit = (data) =>{
        let res = details.concat([data]);
        setDetails(res)
        console.log(data);
        localStorage.setItem("Registration", JSON.stringify(details));
    }
    return(
        <div>
            <form onSubmit={e=>e.preventDefault()}>
            <input 
            type="email" 
            placeholder="Enter email" 
            name= "email" 
            {...register("email",{
                required: "Email is required",
                pattern:{
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Email is not valid.'}})}
            /><br/>
            {errors.email && <p>{errors.email.message}</p>}
            <input 
            type="text" 
            placeholder="Enter username" 
            name= "username" 
            {...register("username",{
                required: "Username is required",
                message:"Username is required"
            })}
            /><br/>
            {errors.username && <p>{errors.username.message}</p>}
            <input 
            type="password" 
            placeholder="Enter password" 
            name= "password" 
            {...register("password",{
                required: "You must specify a password",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters"
                }
              })}
            /><br/>
            {errors.password && <p>{errors.password.message}</p>}
            <input 
            type="password" 
            placeholder="Re-Enter password" 
            name= "confirmpassword" 
            {...register("confirmpassword",{
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
            /><br/>
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
            </form>
        </div>
    )
}