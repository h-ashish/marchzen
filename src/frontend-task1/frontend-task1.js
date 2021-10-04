import {useState} from 'react';

export default function Card (){
    const [array, setArray] = 

    function add(e){
        e.preventDefault();
        let Obj = {
            cardnumber: [ e.target.input1.value, e.target.input2.value,e.target.input3.value,e.target.input4.value],
            cardholder: e.target.cardholder.value,
            expirymonth: e.target.expirymonth.value,
            expiryyear: e.target.expiryyear.value,
            cvv: e.target.cvv.value
    }
    array.push(Obj);
    showRes();
    }

    return(
        <div className="checkout">
        <h1>Credit Card Details</h1>
        <div className="card-number" id="card-container">
                <form className="form" onSubmit={add} >
                <div className="input-div">
                    <label for="input"> Card Number: </label>
                    <span>
                        <input 
                        type="text" 
                        className="input" 
                        name="input1" 
                        id="input1"
                        placeholder="0000" 
                        size="5"
                        maxlength = "4" 
                        pattern="[0-9]{4}"
                        onkeyup={movetoNext(this, 'input2')}
                            />
                    </span>
                    <span>
                        <input 
                        type="text" 
                        className="input" 
                        name="input2" 
                        id="input2"
                        placeholder="0000" 
                        size="5"
                        minlength="0"
                        maxlength = "4" 
                        pattern="[0-9]{4}"
                        onkeyup={movetoNext(this, 'input3'), movetoPrev(this, 'input1')}
                        />
                    </span>
                    <span>
                        <input 
                        type="text" 
                        className="input" 
                        name="input3" 
                        id="input3"
                        placeholder="0000" 
                        size="5"
                        minlength="0"
                        maxlength = "4" 
                        pattern="[0-9]{4}"
                        onkeyup={movetoNext(this, 'input4'),movetoPrev(this, 'input2')}
                        />
                    </span>
                    <span>
                        <input 
                        type="text" 
                        className="input" 
                        name="input4"
                        id="input4" 
                        placeholder="0000" 
                        size="6"
                        minlength="0"
                        maxlength = "4" 
                        pattern="[0-9]{4}"
                        onkeyup={movetoPrev(this, 'input3')}/>
                    </span>
                </div>
                <input type="submit" className="submit-button" />
                </form>
        </div>
        </div>
    )
}