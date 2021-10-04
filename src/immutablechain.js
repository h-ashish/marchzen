import { Map, List, fromJS } from 'immutable';
function ImmutableChain(){

    let food = List(["biryani", "chole batture","panner chilli"]);
    let immuteFoods = food.push("raita").push("idli").push('dosa').toJS();
    console.log(immuteFoods)
    return(
        <div> see immutable chain operations in console </div>
    )
}
export default ImmutableChain;