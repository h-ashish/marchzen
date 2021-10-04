import { Map, List, fromJS } from 'immutable';
function ImmutableData(){
    let myObj = Map({name:"ashish", age:23, location:"bangalore"});
    let newObj = myObj.set("name","hitesh");
    console.log(myObj.toJS());
    console.log(newObj.toJS())

    console.log(myObj.get('name'));
    console.log(newObj.get('name'));
    return(
        <div>
            check immutable data objects in console
        </div>
    )
}
export default ImmutableData;