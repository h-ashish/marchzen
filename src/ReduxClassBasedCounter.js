import {Component}from 'react';
import {connect} from 'react-redux';
import {changeTitleAction,increase as actionIncrease,decrease as actionDecrease} from './actions/CounterActions'

class ReduxClassBasedCounter extends Component{
	constructor(props)
	{
		super(props);
		this.increase=this.increase.bind(this);
		this.decrease=this.decrease.bind(this);
		console.log("constuctor called");
	}
	increase(){
		this.props.increase()
	}
	decrease()
	{
		this.props.decrease();
	}
	render(){
		return(
   <div>
ReduxClassBasedCounter starts
<h1>{this.props.title}</h1>
count={this.props.count}<br/>
<button onClick={this.increase}>increase</button>
<button onClick={this.decrease}>decrease</button>
   </div>
	)
}
}
const mapStateToProps=function(state){
	return state.count
}
const maDispatchToProps=function(dispatch){
	return{
		increase:()=>dispatch(actionIncrease()),
		decrease:()=>dispatch(actionDecrease()),
	};
}
export default connect(mapStateToProps,maDispatchToProps)(ReduxClassBasedCounter);