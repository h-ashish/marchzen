import {useContext} from  'react';
import React from 'react';
import CommentContext from './CommentContext';
import UserProfileContext from './UserProfileContext';
export const BlogNoContext = React.createContext(20);

export default function BlogContext(){
    const noOfBlogs = 5;
    return(
        <div>
            <BlogNoContext.Provider value = {noOfBlogs}>
                <CommentContext/>
                <UserProfileContext/>
            </BlogNoContext.Provider>
        </div>
    )
}
