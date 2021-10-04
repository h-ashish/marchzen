function RandomNum (){
    function generateRan (){
        let res = Math.floor(Math.random()*10 + 1);
        document.getElementById('mydiv').innerHTML = `Random number is ${res}`;
    }
    return(
        <div>
            <button onClick = {generateRan} >generate random number</button>
            <div id="mydiv"></div>
        </div>
    )
}
export default RandomNum;