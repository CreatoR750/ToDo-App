
import React from "react";


class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:'Add your task here'
        };
    }
    emptyInput = () => {
        this.setState({input:''})
    }
    addTask = () => {
        const { input } = this.state;
        if(input) {
        this.props.addTask(input);
        this.setState({input:''});
    }
};
handleEnter = event =>{
    if(event.key === 'Enter') this.addTask();
};
inputChange=event => {
    this.setState({input:event.target.value});
};


render() {
    const { input } = this.state;
    return(
        <div className="input-button">
            <input onClick ={this.emptyInput} onKeyPress={this.handleEnter} onChange={this.inputChange} value={input}></input>
            <button className="AddButton" onClick={this.addTask}>Add</button>
        </div>
    );
    }
}

export default TaskInput;