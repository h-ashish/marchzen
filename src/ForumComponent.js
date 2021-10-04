import {useState} from 'react';
import ForumForm from './ForumForm';
import ForumList from './ForumList';
import MainCommentComponent from './MainCommentComponent';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
export default function ForumComponent(){
    const [forum, setForum] = useState([]);
    const createForum=(e)=>{
        e.preventDefault();
        let Obj = {
            topic: e.target.input.value,
            user: e.target.selectuser.value,
            time: new Date().toLocaleString('en-US',{timeZone:'IST'}),
            date: new Date().toLocaleDateString('en-US',{timeZone:'IST'}),
            mil: new Date().getTime()
        }
        let result = forum.concat(Obj);
        setForum(result)
        localStorage.setItem("forum details",JSON.stringify(result));
    }
    console.log(forum);
    const deleteOne = (indextodelete) => {
        let confirmDel = window.confirm("Are you sure you want to delete?")
        let output = forum.filter(function(val, index){
            if(index == indextodelete)
                return false;
            return true;
        })
        if(confirmDel == true){
            setForum(output);
        }
    }
    const deleteall=()=>
{
let day=new Date().getTime();
let currentday=Math.floor(day/1000/60);
console.log(currentday)
let asd=forum.filter(function(val)
{
	if(Math.floor(val.mil/1000/60)<=currentday-5)
		return false;
	return true;
})
setForum(asd);
}

    return(
        <div style={{border: "blue"}}>
            <BrowserRouter>
            <Link to='/forumcomponent/nestedroute'>nestedroute</Link>
            <Route path="/forumcomponent/nestedroute">
            <MainCommentComponent/>
            </Route>
            </BrowserRouter>
            <ForumForm createForum = {createForum}/>
            <ForumList forum = {forum} deleteOne = {deleteOne}/>
            <button onClick={deleteall}>Delete after 5</button>
        </div>
    )
}