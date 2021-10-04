import {useEffect, useState} from 'react';
function RandomPrime(){
    let output;
    const [no, setNo] = useState(0);
    useEffect(()=>{
       output = JSON.parse(localStorage.getItem('value'));
       setNo(output);
    })
    function ran(){
        let no = Math.floor(Math.random()*100+1);
        while(findPrime(no)==true){
            console.log(no);
            localStorage.setItem('value',no);
            break;
        }
    }
    function findPrime(no){
        let flag = true;
        for(let i=2;i<no/2;i++){
            if(no%i==0){
                flag = false;
            }
        }
        if(flag==true)
            return true;
        else
            return false;
    }
    return(
        <div>
            <button onClick={ran}>get random prime number</button><br/>
            The random prime number is {no}
        </div>
    )
}
export default RandomPrime;