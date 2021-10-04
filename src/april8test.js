import {useState} from 'react'
import loader from './loader.gif'

function CheckBoxtest() {
    let [show,setShow] = useState(true)

    let hide = (e) => {
        if(e.target.checked){
            setShow(false)
        }else{
            setShow(true)
        }
    }
    return (
        <div>
            Select the CheckBox to hide the image
            <input type="checkbox" name="c" onChange={hide}/><br/>
            {show?<img src={loader} />:"" }
        </div>
    )
}
export default CheckBoxtest;