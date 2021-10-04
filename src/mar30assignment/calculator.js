import {useState} from "react" ;
function Calculator(){
    let [add,setAdd] = useState(  );
    let [sub,setSub] = useState(  );    
    let [multi,setMulti] = useState(  );
    let [divide,setDivide] = useState(  );
    function calc(event){
        event.preventDefault();
        let num1 = Number(event.target.input1.value);
        let num2 = Number(event.target.input2.value);
        setAdd(`The sum is ${num1 + num2}`);
        setSub(`The difference is ${num1 - num2}`);
        setMulti(`The product is ${num1 * num2}`);
        setDivide(`The remainder is ${num1 / num2}`);
    }
    return (
        <div>
            <form onSubmit={calc}>
            <input type="number" name="input1" placeholder = "Enter first num"/>            
            <input type="number" name="input2" placeholder = "Enter second num"/>            
            <button>Submit</button>
            </form>
            <div>{add}</div>
            <div>{sub}</div>
            <div>{multi}</div>
            <div>{divide}</div>
        </div>
    )
}
export default Calculator;