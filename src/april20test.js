import {Component} from 'react';
class DidMountAndWillMount extends Component{
	constructor(props){
		super(props)
		this.state = {data: "Hello"};
	}
	componentWillMount(){
		console.log("First this called");
	}
	getData(){
		
		setTimeout(() => {
      		console.log('Our data is fetched');
      		this.setState({
        					data: 'Hello Ashish'
     				 })
    	}, 4000)
	}
	componentDidMount(){
		console.log("called after");
		this.getData();
	}
	render(){
		return (
			<div>
				<hr></hr>
					{this.state.data}
				
			</div>
			)
	}
}
export default DidMountAndWillMount;