import './App.css';
import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';


class App extends React.Component{
    constructor() {
        super();
        this.state= {
            tasks: [
                {id:0, title:'Create music', done: false },
                {id:1, title:'Create video', done: true },
            ]
        }
    }

    addTask = task => {
        this.setState(state => {
            let { tasks } =state;
            tasks.push ({
                id:tasks.length !==0 ? task.length : 0,
                title :task,
                done:false
            })
            return tasks;

        });
    };

    doneTask = id =>{
        const index= this.state.tasks.map(task=>task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            tasks[index].done = true;
            return tasks;
        })
    }

    deleteTask = id =>{
        const index= this.state.tasks.map(task=>task.id).indexOf(id);
        this.setState(state => {
            let { tasks } = state;
            delete tasks[index];
            return tasks;
        });
    };

    render (){
        const { tasks } = this.state;
        const activeTasks = tasks.filter(task => !task.done)
        const doneTasks = tasks.filter(task => task.done)
  
        return (
            <div className="App">
                <div className="Container">

                <header>
                    <h1>ToDo App</h1>
                </header>

                <div>
                <h1 className="top"> Active tasks: {activeTasks.length} </h1>
                </div>
                
                {[...activeTasks, ...doneTasks].map(task => (
                <div className="active-tasks">

                <Task
                doneTask={() => this.doneTask(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
                task={task} key={task.id}></Task>
                </div>
                ))}
                <TaskInput addTask = {this.addTask}></TaskInput>
                </div>
            </div>
        );
    } 

}

export default App;



