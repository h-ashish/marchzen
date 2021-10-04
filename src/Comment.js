import {useParams} from 'react-router-dom';
export default function Comment(){
    let paramsOb = useParams();
    console.log(paramsOb);
    return(
        <div>
            Parameter that was passed is : {paramsOb.id}
        </div>
    )
}