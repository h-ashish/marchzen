import {useRef} from 'react';
export default function RefHook(){
    const inputRef = useRef(null);
    const getInputVal = () => {
        console.log(inputRef.current.value);
        alert(inputRef.current.value)
    }
    return(
        <div>
            <input ref={inputRef} type="text" name="input" />
            <button onClick={getInputVal}>Click me</button>
        </div>
    )
}