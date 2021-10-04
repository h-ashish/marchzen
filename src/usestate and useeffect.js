import {useState, useEffect} from 'react';
export default function Hooks() {
    console.log("component ran")

    const [no,setNo] = useState(0);
    const [title,setTitle] = useState("initial value");

    useEffect(() => {
        console.log("i run only when the component is loaded");
        setNo(4);
    },[])
    useEffect(() => {
        console.log("i run only when the component is loaded");
    },[title])

    const increase = () => {
        setNo(no+1);
    }

    const changeTitle = (e) =>{
        e.preventDefault();
        setTitle(e.target.title.value);
    }
    return (
        <div>
            <h1>{title}</h1> 
            <form onSubmit={changeTitle}>
                <input type="text" name="title" placeholder="Enter new title" />
                <button>change Title</button>
            </form>

            no = {no} <br/>
            <button onClick={increase}>increase</button>
        </div>
    )
}

