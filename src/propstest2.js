
function UserProfileDetails(props){

	return(
		<div>
		  Name:{props.userObject.name}<br/>
		  Age : {props.userObject.age}<br/>
		</div>
		)
}
export default UserProfileDetails;