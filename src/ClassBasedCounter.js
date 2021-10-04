import {Component} from 'react';
class ClassBasedCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            title: "This is default"
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);  
    }
    componentDidMount(){
        console.log("called after react component is placed in html page");
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("some state variable has changed to this function is called");
    }
    componentWillUnmount(){
        console.log("component removed from the dom")
    }
    increase () {
        this.setState({count: this.state.count + this.props.step});
    }
    decrease () {      
        this.setState({count: this.state.count - this.props.step});
    }
    render (){
        return (
            <div>
                <h1>{this.state.title}</h1><br/>    
                Count = {this.state.count}<br/>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
            </div>
        )
    }
}
export default ClassBasedCounter;