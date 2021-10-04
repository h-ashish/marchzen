import {Route, Redirect} from 'react-router-dom';
const PrivateRoute = ({children, ...rest}) =>{
    console.log(children);
    const token = localStorage.getItem('usertoken');
    let isAuthenticated = false;
    if(token!=null)
        isAuthenticated = true;
    return(
            <Route {...rest} render={()=>{
                return isAuthenticated === true? children: <Redirect to={{pathname: '/login'}}/>
            }} />
        )
}
export default PrivateRoute;