import {useState} from 'react';
function Hobbies(){
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
    function deleteHobby(){
        initialVal.length = 0;
        finalVal(initialVal);
        createHobby();
        
    }
    
    return(
        <div>
            <h1>THobby List</h1>
            <input type="text" id="input" placeholder="Enter a hobby"/>
            <button onClick={createHobby}>create hobby</button>
            <button onClick={deleteHobby}>delete</button>
            {
            initialVal.map(function(val){
                return <div> {val}</div>
            })
        }
        </div>
    )
}
export default Hobbies;