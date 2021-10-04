import {useState} from 'react';
function Hobbies1(){
    const [initialVal,finalVal] = useState([]);
    let newHob;
    let res;
    function createHobby(){
        newHob = document.getElementById('input').value;
        res = initialVal.concat(newHob);
        finalVal(res);
        document.getElementById('input').value = '';
    }
    
    console.log(initialVal);
    
    return(
        <div>
            <h1>Hobby List</h1>
            <input type="text" id="input" placeholder="Enter a hobby"/>
            <button onClick={createHobby}>create hobby</button>
            {
            initialVal.map(function(val){
                return <div> {val}</div>
            })
        }
        </div>
    )
}
export default Hobbies1;