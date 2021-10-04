import {useContext} from 'react';
import {BlogNoContext} from './BlogContext';
export default function CommentContext(){
    const blogsNo = useContext(BlogNoContext);
    return(
        <div>
            showing common value in comment context = {blogsNo}<br/>
        </div>
    )
}