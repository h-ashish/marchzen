import {useContext} from 'react';
import {BlogNoContext} from './BlogContext';
export default function UserProfileContext (){
    const blogsNo = useContext(BlogNoContext);
    return(
        <div>
            lets see common value in UserProfileContext component = {blogsNo}<br/>
        </div>
    )
}