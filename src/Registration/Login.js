import React from 'react';
import {useForm} from 'react-hook-form';
export default function Login(){
    const {register, formState:{errors}, handleSubmit} = useForm();
    const onSubmit = (data)=>{console.log(data)};
    return(
        <div>
            <form onSubmit={e=>{e.preventDefault()}}>
                <input
                type="text"
                name="username"
                placeholder="Enter username"
                {...register("username",{
                    required: "Username is Required",
                    minLength:{
                        value:5,
                        message: "Username must be a minimum of 5 characters"
                    },
                    pattern:{
                        value: /^[A-Za-z]/i,
                        message: "Username not valid"
                    }
                })}/><br/>
                {errors.username && <p>{errors.username.message}</p>}
                <input 
                type="password"
                name="password"
                placeholder="Enter password"
                {...register("password",{
                    required: "Password Required",
                    minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters"
                    },
                    pattern:{
                        value: /.(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i,
                        message: "Password not valid"
                    }
                })}/><br/>
                {errors.password && <p>{errors.password.message}</p>}
                <button onClick={handleSubmit(onSubmit)}>Login</button>
            </form>
        </div>
    )
}