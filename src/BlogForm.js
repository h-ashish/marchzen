import  Bloglist from './BlogList'
export default function Blogform({blog,val,index,deleteone,deleteall}){
	return(<div>
		{
		!blog?null:blog.map(function(val,index){
			return< Bloglist val={val} index={index} deleteone={deleteone}/>
		})
	}
	<button onClick={()=>deleteall()}>deleteall</button>
		</div>)
	}