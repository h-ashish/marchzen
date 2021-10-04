const changeTitleAction =(localTitle)=> ({type:'counter/changeTitle', title:localTitle});
const increase =()=>({type:'counter/increase'})
const decrease =()=>({type:'counter/decrease'})
const asyncIncrease = () =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type:'counter/asyncincrease'})
        },4000)
    }
   
}
export {changeTitleAction, increase, decrease,asyncIncrease};