import { Map, List, fromJS } from 'immutable';
function ImmutableList (){
    let array = ["ashish", "prajwal","munna","yog"];
    let immutArray = List(array).toJS();
    console.log(immutArray)
    return(
        <div>
            check list in console
        </div>
    )
}
export default ImmutableList;