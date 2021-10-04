import { useState } from "react";

function Counter(){
    let count = 0;
    let [stateVariable,setStateVariable] = useState(0);
    let [title, setTitle] = useState("Initial Title");
    const increase = () => {
        count = count +1;
    }
    const decrease = () =>{
        count = count -1;
    }
    const showCount = () =>{
        alert(count);
    }
    const increaseStateCount = () => {
        setStateVariable(stateVariable + 1);
    }
    const decreaseStateCount = () => {
        setStateVariable(stateVariable - 1);
    }
    const changeTitle = (event) => {
        event.preventDefault();
        const inputTag = event.target.title;
        setTitle(inputTag.value);
    }
    return(
        <div>
            <h1>{title}</h1>
            the count is {count} <br/>
            the dynamic count is {stateVariable}<br/>
            <button onClick = {increase}>increase</button>
            <button onClick = {decrease}>decrease</button>
            <button onClick = {showCount}>show count</button>
            <button onClick = {increaseStateCount}>increase state count</button>
            <button onClick = {decreaseStateCount}>decrease state count</button>
            <form onSubmit = {changeTitle}>
                <input type="text" name = "title" placeholder ="Enter new Title" />
                <button> Change title</button>
            </form>
        </div>
    )
}
export default Counter;