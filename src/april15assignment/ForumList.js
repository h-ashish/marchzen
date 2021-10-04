import ForumTopic from './ForumTopic';
export default function ForumList({forum,val, index, deleteOne}){
    return(
        <div>
            {
                forum.map(function(val, index){
                    return <ForumTopic val ={val} index = {index} deleteOne = {deleteOne}/>
                })
            }
        </div>
    )
}