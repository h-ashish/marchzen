function Reverse(){
    function showReverse(){
        let str = document.getElementById('input').value;
        let res = str.split('').reverse().join('');
        document.getElementById('mydiv').innerHTML = `The reverse of "${str}" is "${res}"`;
    }
    return(
        <div>
            <input type="text" id="input" placeholder="Enter some text"></input>
            <button onClick={showReverse}> Reverse </button>
            <div id="mydiv"></div>
        </div>
    )
}
export default Reverse;