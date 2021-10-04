import {Component} from 'react';

class May3test extends Component{
    constructor(){
        super();
        this.state ={
            count: 0,
            count1: 0
        }
        this.increase1 = this.increase1.bind(this);
        this.decrease1 = this.decrease1.bind(this);
    }
    increase = () => {
        this.setState({count: this.state.count +1});
    }
    decrease = () => {      
        this.setState({count: this.state.count - 1});
    }
    increase1 (){
        this.setState({count1:this.state.count1 + 1})
    }
    decrease1 (){
        this.setState({count1:this.state.count1 - 1})
    }
    render (){
        return (
            <div>
                <h3>This is without using bind</h3>
                Count = {this.state.count}<br/>
                <button onClick={this.increase}>increase</button>
                <button onClick={this.decrease}>decrease</button>
                <h3>This is using bind</h3>
                Count = {this.state.count1}<br/>
                <button onClick={this.increase1}>increase</button>
                <button onClick={this.decrease1}>decrease</button>
            </div>
        )
    }
}
export default May3test;