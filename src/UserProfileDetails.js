export default function UserProfileDetails (props) {
    return(
        <div>
             Name:{props.userObject.name}<br/>
             location:{props.userObject.location} <br/>
        </div>
    )
}