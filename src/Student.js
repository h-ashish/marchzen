import useDataHelper from './useDataHelper';

const Student = () =>{
    const [student, setStudent] = useDataHelper('/details.json');
    return(
        <div style={{border:"3px solid teal", padding:"10px", margin:"10px"}}>
            Name:{student.name}<br/>
            location:{student.location}
        </div>
    )
}
export default Student;