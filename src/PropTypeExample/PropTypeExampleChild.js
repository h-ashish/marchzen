import PropTypes from 'prop-types';
const PropTypeExampleChild = ({userArr,companyOb,age}) =>{
    return(
        <div>
            <h3>Name = {companyOb.name}</h3>
            <h3> company age ={age}</h3>
            {
                userArr.map((val)=>{
                    return <div>{val}</div>
                })
            }
        </div>
    )
}
PropTypeExampleChild.propTypes = {
    userArr: PropTypes.array,
    companyOb: PropTypes.object,
    age: PropTypes.number
}
export default PropTypeExampleChild