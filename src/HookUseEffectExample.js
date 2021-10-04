import {useState, useEffect} from 'react'
function HookUseEffectExample (){
    console.log("component ran");
    const [no,setNo] = useState(0);
    const [title, setTitle] = useState('initial title');
    useEffect(() => {
        console.log("I run only when component is loaded");
        setNo(4);
    },[])
    useEffect(()=>{
        console.log('Title changed');
    },[title])
    const increase = () =>{
        setNo(no+1);
    }
    const changeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.title.value);
    }
    return(
        <div>
            <form onSubmit={changeTitle}>
                <input type="text" name="title" placeholder="enter new title"/>
                <button>Submit</button>
            </form>
            no = {no} <br/>
            <button onClick={increase}>increase</button>
        </div>
    )
}
export default HookUseEffectExample;
