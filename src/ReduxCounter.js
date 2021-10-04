import {useStore, useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {changeTitleAction, increase as actionIncrease, decrease as actionDecrease, asyncIncrease} from './actions/CounterActions';
function ReduxCounter(){
    //it will provide a dispatch function
    const dispatch = useDispatch();
    //this will give me access to the store
    const store = useStore();
    //this is the hook to get count from the state and if state changes then the count will also change
    const count = useSelector(state=>state.count);
    const title = useSelector(state=>state.title);
    console.log(title)
    const [localTitle, setLocalTitle] = useState('local title default value')
    console.log(store);
    const increase =()=>{
        dispatch(actionIncrease())
    }
    const decrease =()=>{
        dispatch(actionDecrease())
    }
    const reset =()=>{
        dispatch({type:'counter/reset'})
    }
    const square =()=>{ 
        dispatch({type:'counter/square'})
    }
    const squareroot =()=>{
        dispatch({type:'counter/squareroot'})
    }
    const changeTitle = () =>{
        dispatch(changeTitleAction(localTitle))
    }
    const aincrease = () =>{
        dispatch(asyncIncrease())
    }
    return(
        <div>
           <h2>{title}</h2> 
            count = {count}<br/>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={aincrease}>async increase</button>
            <button onClick={reset}>reset</button>
            <button onClick={square}>square</button>
            <button onClick={squareroot}>squareroot</button>
            <input type="text" value={localTitle} onChange={(e)=>{setLocalTitle(e.target.value)}}/>
            <button onClick={changeTitle}>change title</button>
        </div>
    )
}
export default ReduxCounter;