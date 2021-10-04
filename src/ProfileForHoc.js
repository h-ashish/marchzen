const Profile = ({userOb}) =>{
    return(
        <div>
            I am a Profile component
            <ul>
                {
                    userOb.hobby.map((val)=>{
                        return <li>{val}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Profile;