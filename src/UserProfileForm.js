export default function UserProfileForm ({changeName, changeLocation}){
    return(
        <div>
            <input type="text" placeholder="name" onChange={changeName} name = "name"></input><br/>
            <select name="location" onChange={changeLocation}>
                <option value= "bangalore">Bangalore</option>
                <option value= "pune" >Pune</option>
            </select>
        </div>
    )
}