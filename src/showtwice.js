import {useState} from 'react';
function ShowTwice (){
    const [no,setNo] = useState([]);
    let newVal;
    let res;
    let out;
    let countObj = {};
    let newArray =[];
    function creatArr(){
        newVal = document.getElementById('input').value;
        res = no.concat(newVal);
        setNo(res);
        document.getElementById('input').value = ''
    }
    console.log(no);
    function showDupli(){
        
        no.forEach(function(val){
            if(countObj[val]){
                countObj[val] = countObj[val] +1;
            }
            else {
                countObj[val] = 1;
            }
        })
        console.log(countObj);
        for(let i in countObj){
            if(countObj[i]==2){
                newArray.push(i);
            }
        }
        document.getElementById('mydiv').innerHTML =`The numbers which are appearing twice are: ${newArray}`;
    }
    
    return(
        <div>
            <input type="number" id="input" placeholder="Enter a number"/>
            <button onClick={creatArr}>create</button>
            <button onClick={showDupli}>show twice</button>
            {
            no.map(function(val){
                return <div> {val}</div>
            })
        }
        <p id="mydiv"></p>
        </div>
    )
}
export default ShowTwice;