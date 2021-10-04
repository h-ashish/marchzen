import {useState} from 'react';
function UnderstandingStates(){
    console.log("Function UnderstandingState running");
    const [no,setNo] = useState(0);
    const [students, setStudents] = useState(["ashish","munna","yog","praju"])
    const increase = () => {
        setNo(no+1);
    }
    const addStudent = (event) => {
        event.preventDefault();
        const studentNames = event.target.studentname.value;
        const studentNameArray = students.concat(studentNames);
        setStudents(studentNameArray);
    }
    const removeStudent = (indexToDelete) => {
        let newArr = students.filter(function(val,index){
            if(index == indexToDelete)
                return false;
            return true;
        })
        setStudents(newArr);
    }
return(
    <div>
        The no is {no} <br/>
        <button onClick={increase}>increase</button>
        <form onSubmit={addStudent}>
            <input type="text" name="studentname"/>
            <button>Add student</button>
        </form>
        {
            students.map(function(val,index){
                return <div>{val}<button onClick={()=>{removeStudent(index)}}>delete</button></div>
            })
        }
        
    </div>
)
}
export default UnderstandingStates;