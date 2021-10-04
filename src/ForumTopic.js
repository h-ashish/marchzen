export default function ForumTopic ({val, index, deleteOne}){
    return(
        <div>
            <table border="|">           
                <tbody>
                <tr>
                    <td>{val.topic}</td>
                    <td>{val.selectuser}</td>
                    <td>{val.date}</td>
                    <td>{val.time}</td>
                    <td><button onClick={()=>{deleteOne(index)}}>delete</button></td>
                </tr>
                </tbody>
                
            </table>
        </div>
    )
}