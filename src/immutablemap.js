import { Map, List, fromJS } from 'immutable';
function ImmutableMap(){
    let myObj = Map({name:"ashish", age:23, location:"bangalore"});
    console.log(myObj.toJS());

    let nestedObj = fromJS({ my: { nested: { name: 'Ashish' } } });
    let immutObj = nestedObj.getIn(['my','nested']);
    console.group(immutObj.toJS());
    return(
        <div>
            check immutable objects in console
        </div>
    )
}
export default ImmutableMap;