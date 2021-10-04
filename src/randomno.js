import {useState} from 'react'
function Randomno (){
    let ran;
    let sum;
    let res 
    const [no, setno] = useState([]);
    function createSum(){
        res = no.reduce((prev,next)=>prev+next,0);
        document.getElementById('out').innerHTML = `The sum of random numbers is ${res}`;
    }
    
    function createRandom(event){
        event.preventDefault()
        ran = Number(Math.floor(Math.random()*10+1));
        sum = no.concat(ran);
        setno(sum);
    }  
    console.log(no);
    return (
        <div>
            <form onSubmit={createRandom}>
            <button >create random</button>
            </form>
             <button onClick={createSum}>create sum</button><br/>
             The random numbers are:<br/>
            {
                no.map(function(val){
                return <ul><li>{val}</li></ul>
                })
            }
             <p id="out"></p>
        </div>
       
    )
}
export default Randomno;