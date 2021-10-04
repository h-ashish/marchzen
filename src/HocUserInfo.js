import axios from 'axios';
import React from 'react';
function HocUserInfo(InputComponent){
    const Abc = (props)=>{
        const [userOb, setUserOb] = React.useState({name:"default name",  hobby:["default hobby1","default hobby2"]});
        React.useEffect(()=>{
            axios.get('/user.json')
            .then((res)=>{
                setUserOb(res.data);
            })
        },[])
        return <InputComponent userOb = {userOb} {...props}/>
    }
    return Abc;
}
export default HocUserInfo;