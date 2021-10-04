function PassingValueFunction(){
    const printVal = (val) => {
        alert(val);
    }
    return (
        <div>
            <button onClick={()=>{printVal(5)}}>print val</button>
        </div>
    )
}

export default PassingValueFunction;