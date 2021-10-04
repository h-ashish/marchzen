function Mar28test(){
    function showRes(){
        let str = "Bangalore is the silicon valley of india";
        alert(`the given string is "${str}"`)
        let res = str.replaceAll(" ",'');
        alert(`the string after removing spaces is ${res}`)
    }
    return(
        <div>
            <button onClick={showRes}>show string</button>
        </div>
       
    )
}
export default Mar28test;