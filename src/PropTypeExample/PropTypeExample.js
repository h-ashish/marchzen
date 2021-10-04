import PropTypeExampleChild from './PropTypeExampleChild'
const PropTypeExample = ()=>{
    const userArr = ["ashish","munna","prajwal"];
    const companyOb = {name:"Zenrays",location:"bangalore"};
    const age = 10;

    return(
        <div>
            <h3>i am PropTypeExample parent component</h3>
            <PropTypeExampleChild userArr ={userArr} companyOb={companyOb} age={age}/>
        </div>
    )
}
export default PropTypeExample