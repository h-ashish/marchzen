function Palindrome(){
    function showPali(){
        let str = document.getElementById('input').value;
        let res = str.split('').reverse().join('');
        if(res == str){
            document.getElementById('mydiv').innerHTML = ` "${str}" is a palindrome `;
        } else{
            document.getElementById('mydiv').innerHTML = `"${str}" is not a palindrome `;
        }
    }
    return(
        <div>
            <input type="number" id="input" placeholder="Enter a number"></input>
            <button onClick={showPali}> check Palindrome </button>
            <div id="mydiv"></div>
        </div>
    )
}
export default Palindrome;