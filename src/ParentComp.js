import {useState} from 'react';
import React from 'react';
/* eslint-disable */

function ParentComp(){
    console.log('parent component loaded')
    const [no, setNo] = useState(0);
    const increase = ()=>{
        setNo(no + 1);
    }
    return(
        <div>
            <h2>I am parent component</h2>
            The state variable is {no}<br/>
            <button onClick={increase}>increase no</button>
            <ModifiedChildComp/>
        </div>
    )
}

function ChildComp(){
    console.log('child component loaded');
    return(
        <div>
            <h2>I am child component</h2>
        </div>
    )
}
const ModifiedChildComp = React.memo(ChildComp);
export default ParentComp;